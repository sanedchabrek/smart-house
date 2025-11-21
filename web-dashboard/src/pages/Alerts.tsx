import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Flame, Wind, Shield, Settings } from 'lucide-react'
import { Button } from '../components/ui/button'

const Alerts = () => {
  const [filter, setFilter] = useState('all')

  const alerts = [
    { id: 1, type: 'fire', message: 'Smoke detected in Kitchen', time: '2 min ago' },
    { id: 2, type: 'gas', message: 'Gas leak in Living Room', time: '5 min ago' },
    { id: 3, type: 'intruder', message: 'Motion detected at Entrance', time: '10 min ago' },
    { id: 4, type: 'system', message: 'Device offline: Thermostat', time: '1 hour ago' },
  ]

  const filteredAlerts = filter === 'all' ? alerts : alerts.filter(a => a.type === filter)

  const getIcon = (type: string) => {
    switch (type) {
      case 'fire': return <Flame className="w-5 h-5 text-red-500" />
      case 'gas': return <Wind className="w-5 h-5 text-yellow-500" />
      case 'intruder': return <Shield className="w-5 h-5 text-blue-500" />
      case 'system': return <Settings className="w-5 h-5 text-gray-500" />
      default: return <AlertTriangle className="w-5 h-5 text-orange-500" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800"
      >
        Alerts & Logs
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex space-x-2"
      >
        {['all', 'fire', 'gas', 'intruder', 'system'].map((f) => (
          <Button
            key={f}
            variant={filter === f ? 'default' : 'outline'}
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 flex items-center space-x-4">
            {getIcon(alert.type)}
            <div className="flex-1">
              <p className="font-medium text-gray-800">{alert.message}</p>
              <p className="text-sm text-gray-600">{alert.time}</p>
            </div>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">{alert.type}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Alerts