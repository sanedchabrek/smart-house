import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Smartphone, Home, AlertTriangle, Zap } from 'lucide-react'
import { cn } from '../lib/utils'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/users', label: 'Users', icon: Users },
    { path: '/devices', label: 'Devices', icon: Smartphone },
    { path: '/homes', label: 'Homes', icon: Home },
    { path: '/alerts', label: 'Alerts', icon: AlertTriangle },
    { path: '/automations', label: 'Automations', icon: Zap },
  ]

  return (
    <div className="w-64 bg-white/10 backdrop-blur-md h-screen shadow-lg border-r border-white/20">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Smart House</h1>
        <p className="text-sm text-gray-600">Admin Dashboard</p>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-white/20"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar