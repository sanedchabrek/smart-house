const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="particles">
          {/* Add particles dynamically if needed */}
        </div>
        <canvas className="webgl-canvas" id="webgl-canvas"></canvas>
        <div className="hero-content">
          <h1>SmartHome Elite</h1>
          <p>Quantum-Advanced Modern Living with AI Integration and 3D Visualization</p>
          <a href="#features" className="btn">Explore Features</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature">
          <div className="icon">🏠</div>
          <h3>Smart Home Control</h3>
          <p>Seamlessly manage all your smart devices from a single, intuitive interface with voice commands and automation.</p>
        </div>
        <div className="feature">
          <div className="icon">🤖</div>
          <h3>AI-Powered Insights</h3>
          <p>Leverage advanced AI algorithms to optimize energy usage, predict maintenance needs, and enhance security.</p>
        </div>
        <div className="feature">
          <div className="icon">🌐</div>
          <h3>IoT Integration</h3>
          <p>Connect and control a wide range of IoT devices, from thermostats to security cameras, all in one ecosystem.</p>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard">
        <h2>Live Dashboard</h2>
        <div className="chart-container">
          <canvas id="dashboard-chart"></canvas>
        </div>
        <div className="real-time-data">
          <div className="data-item">
            <h4>Temperature</h4>
            <p>22°C</p>
          </div>
          <div className="data-item">
            <h4>Humidity</h4>
            <p>60%</p>
          </div>
          <div className="data-item">
            <h4>Energy Usage</h4>
            <p>1.2 kWh</p>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <section className="chatbot">
        <h3>AI Assistant</h3>
        <div className="chat-window">
          <div className="chat-messages" id="chat-messages">
            <p><strong>AI:</strong> Hello! How can I help you with your smart home today?</p>
          </div>
          <div className="chat-input">
            <input type="text" id="chat-input" placeholder="Ask me anything..." />
            <button id="send-btn">Send</button>
          </div>
        </div>
      </section>

      {/* VR Preview */}
      <section className="vr-preview">
        <h2>Virtual Reality Preview</h2>
        <div className="vr-container">
          <p>Experience your smart home in immersive 3D. Walk through your virtual space and interact with devices.</p>
          <button className="vr-btn">Enter VR Mode</button>
        </div>
      </section>
    </div>
  )
}

export default Home