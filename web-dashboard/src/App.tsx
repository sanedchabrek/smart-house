import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Devices from './pages/Devices'
import Homes from './pages/Homes'
import Alerts from './pages/Alerts'
import Automations from './pages/Automations'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/automations" element={<Automations />} />
      </Routes>
    </Layout>
  )
}

export default App
