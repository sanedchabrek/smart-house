const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const mqtt = require('mqtt');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-house', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes (placeholders)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/devices', require('./routes/devices'));
app.use('/api/sensors', require('./routes/sensors'));
app.use('/api/automations', require('./routes/automations'));
app.use('/api/logs', require('./routes/logs'));

// Socket.io for real-time
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// MQTT client
const mqttClient = mqtt.connect(process.env.MQTT_BROKER || 'mqtt://localhost:1883');
mqttClient.on('connect', () => {
  console.log('MQTT connected');
  mqttClient.subscribe('smart-house/#');
});
mqttClient.on('message', (topic, message) => {
  // Handle MQTT messages
  console.log(`MQTT: ${topic} - ${message.toString()}`);
  // Emit to WebSocket clients
  io.emit('mqtt', { topic, message: message.toString() });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));