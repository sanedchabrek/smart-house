// Magnetic Reed Switch Sensor Sketch for ESP32
// Publishes door/window open/closed status via MQTT

#include <WiFi.h>
#include <PubSubClient.h>

// Pin definitions
#define REED_PIN 18  // Digital pin connected to reed switch (INPUT_PULLUP assumed)

// WiFi credentials
const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// MQTT broker settings
const char* mqtt_server = "192.168.1.100";  // Replace with your MQTT broker IP
const int mqtt_port = 1883;
const char* mqtt_topic_data = "sensors/reed/1/data";  // Publish topic for sensor data

// Device ID (change for multiple devices)
const char* device_id = "1";

// WiFi and MQTT clients
WiFiClient espClient;
PubSubClient client(espClient);

// Timing variables
unsigned long lastMsg = 0;
const long interval = 2000;  // Publish interval in milliseconds

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
  // Callback for MQTT messages (not used for sensors, but can be extended for configuration)
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (unsigned int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    String clientId = "ESP32-REED-";
    clientId += device_id;
    clientId += "-";
    clientId += String(random(0xffff), HEX);

    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Subscribe to any necessary topics (e.g., for remote configuration)
      // client.subscribe("sensors/reed/1/config");
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
  pinMode(REED_PIN, INPUT_PULLUP);  // Reed switch with pull-up
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  unsigned long now = millis();
  if (now - lastMsg > interval) {
    lastMsg = now;

    // Read sensor data
    // Assuming LOW = door closed (magnet near), HIGH = door open
    bool doorOpen = digitalRead(REED_PIN) == HIGH;

    // Create JSON payload
    String payload = "{";
    payload += "\"device_id\":\"" + String(device_id) + "\",";
    payload += "\"door_open\":" + String(doorOpen ? "true" : "false");
    payload += "}";

    // Publish to MQTT
    Serial.print("Publishing to ");
    Serial.print(mqtt_topic_data);
    Serial.print(": ");
    Serial.println(payload);
    client.publish(mqtt_topic_data, payload.c_str());
  }
}