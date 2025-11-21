import { motion } from 'framer-motion'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'

const Devices = () => {
  const devices = [
    { id: 1, name: 'Smart Light', type: 'Light', room: 'Living Room', status: 'On' },
    { id: 2, name: 'Thermostat', type: 'Climate', room: 'Bedroom', status: 'Off' },
    { id: 3, name: 'Security Camera', type: 'Camera', room: 'Entrance', status: 'On' },
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-800">Devices Management</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Device
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.room}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    device.status === 'On' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {device.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  )
}

export default Devices