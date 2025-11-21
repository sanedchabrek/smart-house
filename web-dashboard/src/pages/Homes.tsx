import { motion } from 'framer-motion'
import { Home, Plus, Settings } from 'lucide-react'
import { Button } from '../components/ui/button'

const Homes = () => {
  const homes = [
    {
      id: 1,
      name: 'Main House',
      address: '123 Main St',
      rooms: [
        { name: 'Living Room', devices: 5, sensors: 2 },
        { name: 'Kitchen', devices: 3, sensors: 1 },
        { name: 'Bedroom', devices: 4, sensors: 1 },
      ]
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800"
      >
        Home Management
      </motion.h1>

      {homes.map((home) => (
        <motion.div
          key={home.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <Home className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">{home.name}</h2>
                <p className="text-gray-600">{home.address}</p>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Manage
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {home.rooms.map((room, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium">{room.name}</h3>
                <p className="text-sm text-gray-600">
                  {room.devices} devices, {room.sensors} sensors
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Home
        </Button>
      </motion.div>
    </div>
  )
}

export default Homes