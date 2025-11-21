// Relay Actuator Sketch for ESP32 - Garage Door Control
// Subscribes to MQTT commands and publishes status

#include <WiFi.h>
#include <PubSubClient.h>

// Pin definitions
#define RELAY_PIN 5  // Digital pin connected to relay module

// WiFi credentials
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// MQTT broker settings
const char* mqtt_server = "192.168.1.100";  // Replace with your MQTT broker IP
const int mqtt_port = 1883;
const char* mqtt_topic_command = "actuators/garage_door/1/command";  // Subscribe topic for commands
const char* mqtt_topic_status = "actuators/garage_door/1/status";    // Publish topic for status

// Device ID (change for multiple devices)
const char* device_id = "1";

// WiFi and MQTT clients
WiFiClient espClient;
PubSubClient client(espClient);

// Relay state
bool relayState = false;

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String message;
  for (unsigned int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.println(message);

  // Check if the topic matches the command topic
  if (strcmp(topic, mqtt_topic_command) == 0) {
    if (message == "on" || message == "1") {
      relayState = true;
      digitalWrite(RELAY_PIN, HIGH);
      client.publish(mqtt_topic_status, "on");
      Serial.println("Garage Door turned ON");
    } else if (message == "off" || message == "0") {
      relayState = false;
      digitalWrite(RELAY_PIN, LOW);
      client.publish(mqtt_topic_status, "off");
      Serial.println("Garage Door turned OFF");
    }
  }
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP32-GARAGE_DOOR-";
    clientId += device_id;
    clientId += "-";
    clientId += String(random(0xffff), HEX);

    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Subscribe to command topic
      client.subscribe(mqtt_topic_command);
      // Publish initial status
      client.publish(mqtt_topic_status, relayState ? "on" : "off");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);  // Start with relay off
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  // No periodic publishing for actuators, only on command or status change
}