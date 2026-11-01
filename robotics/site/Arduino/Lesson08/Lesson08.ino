#include <Servo.h>

Servo gate;
const byte SERVO_PIN = 9;

void setup() {
  gate.attach(SERVO_PIN);
}

void loop() {
  gate.write(20);
  delay(1200);
  gate.write(90);
  delay(1200);
}
