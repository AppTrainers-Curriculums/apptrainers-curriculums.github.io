#include <Servo.h>

const byte TRIG_PIN = 10;
const byte ECHO_PIN = 11;

float readDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  unsigned long durationUs = pulseIn(ECHO_PIN, HIGH, 25000UL);
  if (durationUs == 0) return -1.0;
  float distanceCm = durationUs * 0.0343 / 2.0;
  if (distanceCm < 2.0 || distanceCm > 400.0) return -1.0;
  return distanceCm;
}

Servo gate;
const byte RED_PIN = 2;
const byte YELLOW_PIN = 3;
const byte GREEN_PIN = 4;
const byte BUTTON_PIN = 7;
const byte BUZZER_PIN = 8;
const byte SERVO_PIN = 9;
const int CLOSED_ANGLE = 20;
const int OPEN_ANGLE = 90;
bool gateOpen = false;
bool clearTiming = false;
unsigned long clearSince = 0;
unsigned long lastSample = 0;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(RED_PIN, OUTPUT);
  pinMode(YELLOW_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.begin(9600);
  gate.attach(SERVO_PIN);
  gate.write(OPEN_ANGLE);
  gateOpen = true;
}

void loop() {
  unsigned long now = millis();
  if (now - lastSample < 70UL) return;
  lastSample = now;
  float distanceCm = readDistanceCm();
  bool valid = distanceCm >= 0;
  bool manualOpen = digitalRead(BUTTON_PIN) == LOW;
  bool previousOpen = gateOpen;

  if (!valid || manualOpen || distanceCm <= 15) {
    gateOpen = true;
    clearTiming = false;
  } else if (gateOpen && distanceCm >= 25) {
    if (!clearTiming) {
      clearSince = now;
      clearTiming = true;
    }
    if (now - clearSince >= 2000UL) gateOpen = false;
  } else {
    clearTiming = false;
  }

  gate.write(gateOpen ? OPEN_ANGLE : CLOSED_ANGLE);
  digitalWrite(RED_PIN, !gateOpen && valid);
  digitalWrite(GREEN_PIN, gateOpen && valid);
  digitalWrite(YELLOW_PIN, !valid);
  if (previousOpen != gateOpen && valid) {
    tone(BUZZER_PIN, gateOpen ? 1200 : 700, 120);
  }
  if (!valid) {
    noTone(BUZZER_PIN);
    Serial.println("Sensor fault: gate open");
  } else {
    Serial.print(distanceCm, 1);
    Serial.println(gateOpen ? " cm OPEN" : " cm CLOSED");
  }
}
