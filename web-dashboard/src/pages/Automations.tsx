import { motion } from 'framer-motion'
import { Plus, Play } from 'lucide-react'
import { Button } from '../components/ui/button'

const Automations = () => {
  const automations = [
    {
      id: 1,
      name: 'Gas Safety',
      condition: 'Gas level > 40',
      action: 'Turn off cooker + Send alert',
      active: true
    },
    {
      id: 2,
      name: 'Night Security',
      condition: 'Motion detected after 10 PM',
      action: 'Turn on lights + Notify owner',
      active: false
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-800">Automation Panel</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Automation
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        {automations.map((automation) => (
          <div key={automation.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{automation.name}</h2>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  automation.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {automation.active ? 'Active' : 'Inactive'}
                </span>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p><strong>IF:</strong> {automation.condition}</p>
              <p><strong>THEN:</strong> {automation.action}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Automations