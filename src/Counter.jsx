import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h3>🔢 Counter</h3>

      <p className="card-desc">Click buttons to increase, decrease or reset</p>
      <div className="count-display">{count}</div>
      <div className="btn-row">
        <button className="btn green" onClick={() => setCount(count + 1)}>+ Increase</button>
        <button className="btn red" onClick={() => setCount(count - 1)}>− Decrease</button>
        <button className="btn gray" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter