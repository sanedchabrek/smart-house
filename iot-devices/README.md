# IoT Devices for Smart House System

This directory contains Arduino sketches for ESP32-based IoT devices used in the Smart House System. Each device connects to a WiFi network and communicates with the backend via MQTT protocol.

## Prerequisites

- ESP32 development board
- Arduino IDE with ESP32 board support
- Required libraries:
  - WiFi (built-in)
  - PubSubClient (for MQTT)
  - DHT (for temperature/humidity sensor)

## Installation

1. Install Arduino IDE from [arduino.cc](https://www.arduino.cc/en/software).
2. Add ESP32 board support:
   - Go to File > Preferences
   - Add `https://dl.espressif.com/dl/package_esp32_index.json` to Additional Board Manager URLs
   - Tools > Board > Boards Manager > Search for ESP32 and install
3. Install required libraries:
   - Sketch > Include Library > Manage Libraries
   - Install `PubSubClient` by Nick O'Leary
   - Install `DHT sensor library` by Adafruit

## Setup

1. Open the desired sketch (.ino file) in Arduino IDE.
2. Update the WiFi credentials:
   ```cpp
   const char* ssid = "YOUR_SSID";
   const char* password = "YOUR_PASSWORD";
   ```
3. Update the MQTT broker IP:
   ```cpp
   const char* mqtt_server = "192.168.1.100";  // Replace with your MQTT broker IP
   ```
4. Change device ID if needed:
   ```cpp
   const char* device_id = "1";
   ```
5. Select the correct board: Tools > Board > ESP32 Dev Module
6. Select the correct port: Tools > Port > (your ESP32 port)

## Flashing

1. Connect ESP32 to your computer via USB.
2. Click the Upload button in Arduino IDE.
3. Wait for the upload to complete.
4. Open Serial Monitor to see connection logs.

## Device Sketches

### Sensors

- **dht_sensor.ino**: DHT11/DHT22 temperature and humidity sensor
- **mq2_sensor.ino**: MQ-2 gas leakage sensor
- **pir_sensor.ino**: PIR motion sensor
- **reed_sensor.ino**: Magnetic reed switch for door/window
- **smoke_sensor.ino**: Smoke detector sensor

### Actuators

- **relay_lights.ino**: Relay for controlling lights
- **relay_smart_plugs.ino**: Relay for smart plugs
- **relay_air_conditioner.ino**: Relay for air conditioner
- **relay_water_heater.ino**: Relay for water heater
- **relay_curtains_blinds.ino**: Relay for curtains/blinds
- **relay_smart_tv.ino**: Relay for smart TV
- **relay_garage_door.ino**: Relay for garage door

## MQTT Topics

### Sensor Topics

Sensors publish data to topics in the format: `sensors/{type}/{id}/data`

- DHT: `sensors/dht/1/data` - JSON: `{"device_id":"1","temperature":25.0,"humidity":60.0}`
- MQ-2: `sensors/mq2/1/data` - JSON: `{"device_id":"1","gas_level":512}`
- PIR: `sensors/pir/1/data` - JSON: `{"device_id":"1","motion":true}`
- Reed: `sensors/reed/1/data` - JSON: `{"device_id":"1","door_open":false}`
- Smoke: `sensors/smoke/1/data` - JSON: `{"device_id":"1","smoke_detected":false}`

### Actuator Topics

Actuators subscribe to commands and publish status.

- Command topics: `actuators/{type}/{id}/command`
- Status topics: `actuators/{type}/{id}/status`

Supported commands: "on", "1", "off", "0"

Status responses: "on", "off"

Examples:
- Lights: `actuators/lights/1/command` (subscribe), `actuators/lights/1/status` (publish)
- Smart Plugs: `actuators/smart_plugs/1/command`, `actuators/smart_plugs/1/status`
- Air Conditioner: `actuators/air_conditioner/1/command`, `actuators/air_conditioner/1/status`
- Water Heater: `actuators/water_heater/1/command`, `actuators/water_heater/1/status`
- Curtains/Blinds: `actuators/curtains_blinds/1/command`, `actuators/curtains_blinds/1/status`
- Smart TV: `actuators/smart_tv/1/command`, `actuators/smart_tv/1/status`
- Garage Door: `actuators/garage_door/1/command`, `actuators/garage_door/1/status`

## Hardware Connections

### Sensors

- **DHT11/DHT22**: Data pin to GPIO 4
- **MQ-2**: Analog output to GPIO 34
- **PIR**: Signal pin to GPIO 5
- **Reed Switch**: One pin to GPIO 18, other to GND (INPUT_PULLUP)
- **Smoke Detector**: Digital output to GPIO 19

### Actuators

- **Relays**: Control pin to GPIO 5 (common for all relay sketches)

## Notes

- All sketches use GPIO 5 for relay control. Change if needed.
- Sensors publish data every 2 seconds.
- Actuators respond to MQTT commands and publish status changes.
- Ensure MQTT broker (e.g., Mosquitto) is running and accessible.
- Device IDs can be changed for multiple instances of the same device type.
- WiFi and MQTT credentials should be updated before flashing.

## Troubleshooting

- If WiFi connection fails, check SSID and password.
- If MQTT connection fails, verify broker IP and port (default 1883).
- Use Serial Monitor for debugging output.
- Ensure ESP32 board is properly selected in Arduino IDE.