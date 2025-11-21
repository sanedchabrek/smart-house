import { useState, useEffect } from 'react'

const Home = () => {
  const [devices, setDevices] = useState({ light: false, security: false, climate: false })
  const [energyUsage, setEnergyUsage] = useState(245)
  const [alerts, setAlerts] = useState(0)

  const toggleDevice = (device: keyof typeof devices) => {
    setDevices(prev => ({ ...prev, [device]: !prev[device] }))
  }

  const updateAnalytics = () => {
    setEnergyUsage(Math.floor(Math.random() * 300))
    setAlerts(Math.floor(Math.random() * 5))
  }

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
  }, [])

  return (
    <div className="bg-neutral text-gray-900 font-sans overflow-x-hidden">
      {/* Header/Navbar */}
      <header className="bg-dark text-white py-6 shadow-2xl animate-fade-in">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold text-primary">Smart House</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-secondary transition-colors duration-300">Home</a>
            <a href="#devices" className="hover:text-secondary transition-colors duration-300">Devices</a>
            <a href="#analytics" className="hover:text-secondary transition-colors duration-300">Analytics</a>
            <a href="#settings" className="hover:text-secondary transition-colors duration-300">Settings</a>
            <a href="/" className="hover:text-secondary transition-colors duration-300">Dashboard</a>
          </nav>
          <button onClick={() => alert('Mobile menu not implemented yet')} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-bg h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Welcome to Your Smart House</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">Control and monitor your home with elegance and precision. Experience advanced automation at your fingertips.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#devices" className="bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">Control Devices</a>
            <a href="/" className="border-2 border-white hover:bg-white hover:text-dark text-white py-4 px-8 rounded-full font-semibold transition-all duration-300">Dashboard</a>
            <button onClick={() => alert('Login functionality would integrate with backend here. For demo, assume logged in.')} className="border-2 border-white hover:bg-white hover:text-dark text-white py-4 px-8 rounded-full font-semibold transition-all duration-300">Login</button>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-dark scroll-reveal">Device Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-neutral p-8 rounded-3xl shadow-lg text-center card-hover scroll-reveal">
              <div className="text-8xl mb-6">💡</div>
              <h3 className="text-3xl font-semibold mb-6 text-primary">Smart Lighting</h3>
              <button
                onClick={() => toggleDevice('light')}
                className={`py-3 px-6 rounded-full font-semibold transition-all duration-300 ${devices.light ? 'device-on' : 'device-off'}`}
              >
                {devices.light ? 'Turn Off' : 'Turn On'}
              </button>
              <p className="mt-4 text-gray-600">Status: {devices.light ? 'On' : 'Off'}</p>
            </div>
            <div className="bg-neutral p-8 rounded-3xl shadow-lg text-center card-hover scroll-reveal">
              <div className="text-8xl mb-6">🔒</div>
              <h3 className="text-3xl font-semibold mb-6 text-secondary">Home Security</h3>
              <button
                onClick={() => toggleDevice('security')}
                className={`py-3 px-6 rounded-full font-semibold transition-all duration-300 ${devices.security ? 'device-on' : 'device-off'}`}
              >
                {devices.security ? 'Disarm System' : 'Arm System'}
              </button>
              <p className="mt-4 text-gray-600">Status: {devices.security ? 'Armed' : 'Disarmed'}</p>
            </div>
            <div className="bg-neutral p-8 rounded-3xl shadow-lg text-center card-hover scroll-reveal">
              <div className="text-8xl mb-6">🌡️</div>
              <h3 className="text-3xl font-semibold mb-6 text-accent">Climate Control</h3>
              <button
                onClick={() => toggleDevice('climate')}
                className={`py-3 px-6 rounded-full font-semibold transition-all duration-300 ${devices.climate ? 'device-on' : 'device-off'}`}
              >
                {devices.climate ? 'Turn Off' : 'Set to 72°F'}
              </button>
              <p className="mt-4 text-gray-600">Status: {devices.climate ? 'On' : 'Off'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-24 bg-neutral">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-dark scroll-reveal">Analytics Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg card-hover scroll-reveal">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Energy Usage</h3>
              <div className="text-4xl font-bold text-secondary">{energyUsage} kWh</div>
              <p className="text-gray-600 mt-4">This month's consumption. <button onClick={updateAnalytics} className="text-primary underline">Refresh</button></p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg card-hover scroll-reveal">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Security Alerts</h3>
              <div className="text-4xl font-bold text-secondary">{alerts}</div>
              <p className="text-gray-600 mt-4">Recent alerts. <button onClick={updateAnalytics} className="text-primary underline">Refresh</button></p>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section id="settings" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8 text-dark scroll-reveal">Settings</h2>
          <form className="max-w-2xl mx-auto bg-neutral p-10 rounded-3xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Full Name" className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors" />
              <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors" />
            </div>
            <textarea placeholder="Preferences" className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors" rows={4}></textarea>
            <button type="submit" className="bg-primary hover:bg-primary/90 text-white py-4 px-8 rounded-full font-semibold transition-all duration-300 w-full shadow-lg">Save Settings</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home