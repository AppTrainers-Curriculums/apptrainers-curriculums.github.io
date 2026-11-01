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

const byte RED_PIN = 2;
const byte YELLOW_PIN = 3;
const byte GREEN_PIN = 4;
const byte BUZZER_PIN = 8;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(RED_PIN, OUTPUT);
  pinMode(YELLOW_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  float distanceCm = readDistanceCm();
  bool valid = distanceCm >= 0;
  bool near = valid && distanceCm <= 20;
  digitalWrite(RED_PIN, near);
  digitalWrite(YELLOW_PIN, !valid);
  digitalWrite(GREEN_PIN, valid && !near);
  if (near) tone(BUZZER_PIN, 1500);
  else noTone(BUZZER_PIN);
  delay(70);
}
