import { motion } from 'framer-motion'
import { Home, Users, Smartphone, AlertTriangle, Zap, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts'

const Dashboard = () => {
  // Enhanced mock data
  const stats = [
    { 
      title: 'Total Homes', 
      value: '12', 
      icon: Home, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+2 this month'
    },
    { 
      title: 'Total Users', 
      value: '45', 
      icon: Users, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: '+5 this week'
    },
    { 
      title: 'Active Devices', 
      value: '78', 
      icon: Smartphone, 
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '92% online'
    },
    { 
      title: 'Automations', 
      value: '24', 
      icon: Zap, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: '18 active'
    },
  ]

  const alerts = [
    { 
      id: 1, 
      message: 'Gas leak detected in Kitchen', 
      time: '2 min ago', 
      type: 'critical',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    { 
      id: 2, 
      message: 'Intruder alert in Living Room', 
      time: '5 min ago', 
      type: 'critical',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    { 
      id: 3, 
      message: 'Living Room lights left on', 
      time: '15 min ago', 
      type: 'warning',
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
  ]

  const sensorData = [
    { time: '00:00', temperature: 22, humidity: 60 },
    { time: '04:00', temperature: 20, humidity: 65 },
    { time: '08:00', temperature: 25, humidity: 55 },
    { time: '12:00', temperature: 28, humidity: 50 },
    { time: '16:00', temperature: 26, humidity: 52 },
    { time: '20:00', temperature: 23, humidity: 58 },
  ]

  const recentActivities = [
    { id: 1, action: 'New user registered', time: '10:30 AM', device: 'Mobile App' },
    { id: 2, action: 'Thermostat adjusted', time: '10:15 AM', device: 'Living Room' },
    { id: 3, action: 'Security system armed', time: '09:45 AM', device: 'Front Door' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Smart Home Dashboard</h1>
            <p className="text-gray-600 mt-1">Monitor and manage your smart home ecosystem</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">System Online</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.trend}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart - Takes 2/3 on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Real-time Sensor Data</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Temperature (°C)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Humidity (%)</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <YAxis 
                  tick={{ fill: '#6B7280' }}
                  axisLine={{ stroke: '#E5E7EB' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="temperature" stroke="#4F46E5" fill="url(#tempGradient)" strokeWidth={2} />
                <Area type="monotone" dataKey="humidity" stroke="#22C55E" fill="url(#humidityGradient)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Alerts & Activities Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
                <div className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                  {alerts.length} Active
                </div>
              </div>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <motion.div 
                    key={alert.id}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border ${alert.borderColor} ${alert.bgColor} cursor-pointer transition-all duration-200`}
                  >
                    <alert.icon className={`w-5 h-5 ${alert.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {activity.action}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                        <span>{activity.time}</span>
                        <span>•</span>
                        <span>{activity.device}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard