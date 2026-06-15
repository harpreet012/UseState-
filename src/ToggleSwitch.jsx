import { useState } from 'react'

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="card">
      <h3>💡 Toggle Switch</h3>
      <p className="card-desc">Toggle the light on or off</p>
      <div className={`light-bulb ${isOn ? 'on' : 'off'}`}>
        {isOn ? '💡' : '🌑'}
      </div>
      <p className="status-text">Light is <strong>{isOn ? 'ON' : 'OFF'}</strong></p>
      <button className={`btn ${isOn ? 'red' : 'green'}`} onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}

export default ToggleSwitch