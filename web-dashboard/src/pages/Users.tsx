import { motion } from 'framer-motion'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'

const Users = () => {
  // Mock data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', home: 'Home 1', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', home: 'Home 2', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', home: 'Home 1', role: 'User' },
  ]

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
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Home</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.home}</TableCell>
                <TableCell>{user.role}</TableCell>
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

export default Users