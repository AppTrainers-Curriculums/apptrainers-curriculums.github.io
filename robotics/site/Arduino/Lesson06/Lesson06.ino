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

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  float distanceCm = readDistanceCm();
  if (distanceCm < 0) {
    Serial.println("No valid reading");
  } else {
    Serial.print("Distance cm: ");
    Serial.println(distanceCm, 1);
  }
  delay(70);
}
