import { useState } from 'react'

const colors = [
  '#e74c3c',
  '#3498db',
  '#2ecc71',
  '#f39c12',
  '#9b59b6',
  '#1abc9c'
]

function ColorChanger() {
  const [color, setColor] = useState('#3498db')

  return (
    <div className="card">
      <h3>🎨 Color Changer</h3>
      <p className="card-desc">Click a color to change the box</p>

      <div
        className="color-box"
        style={{ backgroundColor: color }}
      >
        {color}
      </div>

      <div className="color-palette">
        {colors.map((c) => (
          <div
            key={c}
            className="color-dot"
            style={{
              backgroundColor: c,
              border:
                color === c
                  ? '4px solid white'
                  : '2px solid #ddd',
              boxShadow:
                color === c
                  ? '0 0 0 3px #1e3a5f'
                  : '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
    </div>
  )
}

export default ColorChanger