const int relayPin = 7;

void setup()
{
  Serial.begin(9600);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);
}

void loop()
{
  if (Serial.available() > 0)
  {
    char command = Serial.read();

    if (command == '1')
    {
      digitalWrite(relayPin, HIGH);
    }

    else if (command == '0')
    {
      digitalWrite(relayPin, LOW);
    }
  }
}
