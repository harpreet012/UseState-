import { useState } from 'react'

const MAX = 100

function CharacterCounter() {
  const [text, setText] = useState('')

  const remaining = MAX - text.length
  const percent = (text.length / MAX) * 100

  return (
    <div className="card">
      <h3>⌨️ Character Counter</h3>
      <p className="card-desc">Type below — max {MAX} characters</p>
      <textarea
        className="char-textarea"
        value={text}
        onChange={(e) => e.target.value.length <= MAX && setText(e.target.value)}
        placeholder="Start typing..."
        rows={4}
      />
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{
            width: `${percent}%`,
            backgroundColor: percent > 80 ? '#e74c3c' : '#2e6da4'
          }}
        />
      </div>
      <p className="char-count">
        <span style={{ color: remaining < 10 ? '#e74c3c' : '#333' }}>
          {remaining} characters remaining
        </span>
      </p>
    </div>
  )
}

export default CharacterCounter