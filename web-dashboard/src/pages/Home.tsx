import { motion } from 'framer-motion'
import { Home as HomeIcon, Users, Smartphone, AlertTriangle, Zap } from 'lucide-react'

const Home = () => {
  const features = [
    { title: 'Manage Homes', description: 'Control and monitor multiple smart homes', icon: HomeIcon, path: '/homes' },
    { title: 'User Management', description: 'Add and manage system users', icon: Users, path: '/users' },
    { title: 'Device Control', description: 'Monitor and control IoT devices', icon: Smartphone, path: '/devices' },
    { title: 'Alerts & Security', description: 'View and respond to system alerts', icon: AlertTriangle, path: '/alerts' },
    { title: 'Automations', description: 'Create and manage smart automations', icon: Zap, path: '/automations' },
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Smart House</h1>
        <p className="text-lg text-gray-600">Your comprehensive admin dashboard for managing smart homes and IoT devices</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
            onClick={() => window.location.href = feature.path}
          >
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-gray-500">Navigate using the sidebar to access detailed management features</p>
      </motion.div>
    </div>
  )
}

export default Home