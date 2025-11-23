import { motion } from 'framer-motion'
import { Plus, Edit, Trash2 } from 'lucide-react'

const Users = () => {
  // Mock data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', home: 'Home 1', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', home: 'Home 2', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', home: 'Home 1', role: 'User' },
  ]

  // Simple Button component replacement
  const Button = ({ children, variant = 'default', size = 'default', ...props }) => (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors
        ${variant === 'default' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
        ${variant === 'ghost' ? 'hover:bg-gray-100' : ''}
        ${size === 'default' ? 'h-10 px-4 py-2' : 'h-8 px-3 text-xs'}
        ${props.className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  )

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-3xl font-bold text-gray-800">Users Management</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 font-semibold text-gray-800">Name</th>
              <th className="text-left p-4 font-semibold text-gray-800">Email</th>
              <th className="text-left p-4 font-semibold text-gray-800">Home</th>
              <th className="text-left p-4 font-semibold text-gray-800">Role</th>
              <th className="text-left p-4 font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 text-gray-700">{user.name}</td>
                <td className="p-4 text-gray-700">{user.email}</td>
                <td className="p-4 text-gray-700">{user.home}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'Admin' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

export default Users