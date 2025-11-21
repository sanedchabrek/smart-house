const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-wider">
            SmartHome Elite
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 italic font-light">
            Quantum-Advanced Modern Living with AI Integration and 3D Visualization
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            Explore Features
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-16">
            Advanced Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-6xl mb-6 group-hover:animate-pulse">🏠</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Smart Home Control</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly manage all your smart devices from a single, intuitive interface with voice commands and automation.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-6xl mb-6 group-hover:animate-pulse">🤖</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage advanced AI algorithms to optimize energy usage, predict maintenance needs, and enhance security.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-6xl mb-6 group-hover:animate-pulse">🌐</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">IoT Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Connect and control a wide range of IoT devices, from thermostats to security cameras, all in one ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Live Dashboard</h2>
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-2xl text-cyan-300 font-semibold">Interactive Chart Placeholder</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
                <h4 className="text-cyan-300 font-bold mb-2">Temperature</h4>
                <p className="text-3xl font-bold text-white">22°C</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
                <h4 className="text-purple-300 font-bold mb-2">Humidity</h4>
                <p className="text-3xl font-bold text-white">60%</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-xl border border-white/20">
                <h4 className="text-blue-300 font-bold mb-2">Energy Usage</h4>
                <p className="text-3xl font-bold text-white">1.2 kWh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-12">
            AI Assistant
          </h3>
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-600/50 shadow-2xl max-w-lg mx-auto">
            <div className="h-64 overflow-y-auto mb-4 p-4 bg-slate-800/50 rounded-2xl">
              <p className="text-cyan-300"><strong>AI:</strong> Hello! How can I help you with your smart home today?</p>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VR Preview */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 via-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Virtual Reality Preview</h2>
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <p className="text-xl text-gray-300 mb-8 italic">
              Experience your smart home in immersive 3D. Walk through your virtual space and interact with devices.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-lg rounded-full hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 uppercase tracking-wider">
              Enter VR Mode
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home