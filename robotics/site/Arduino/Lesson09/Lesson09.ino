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
const byte SERVO_PIN = 9;
const int CLOSED_ANGLE = 20;
const int OPEN_ANGLE = 90;
bool gateOpen = false;
bool clearTiming = false;
unsigned long clearSince = 0;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  gate.attach(SERVO_PIN);
  gate.write(CLOSED_ANGLE);
}

void loop() {
  float distanceCm = readDistanceCm();
  unsigned long now = millis();
  if (distanceCm < 0 || distanceCm <= 15) {
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
  delay(70);
}
