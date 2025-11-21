import { motion } from 'framer-motion'
import { Home, Users, Smartphone, AlertTriangle, Activity } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const Dashboard = () => {
  // Mock data
  const stats = [
    { title: 'Total Homes', value: '12', icon: Home, color: 'text-primary' },
    { title: 'Total Users', value: '45', icon: Users, color: 'text-accent' },
    { title: 'Total Devices', value: '78', icon: Smartphone, color: 'text-green-500' },
  ]

  const alerts = [
    { id: 1, message: 'Gas leak detected in Kitchen', time: '2 min ago', type: 'fire' },
    { id: 2, message: 'Intruder alert in Living Room', time: '5 min ago', type: 'intruder' },
  ]

  const sensorData = [
    { time: '00:00', temperature: 22, humidity: 60 },
    { time: '04:00', temperature: 20, humidity: 65 },
    { time: '08:00', temperature: 25, humidity: 55 },
    { time: '12:00', temperature: 28, humidity: 50 },
    { time: '16:00', temperature: 26, humidity: 52 },
    { time: '20:00', temperature: 23, humidity: 58 },
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800"
      >
        Admin Dashboard
      </motion.h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sensor Data Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Real-time Sensor Data</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#4F46E5" strokeWidth={2} />
              <Line type="monotone" dataKey="humidity" stroke="#22C55E" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Today's Alerts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard