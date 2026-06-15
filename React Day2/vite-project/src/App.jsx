import Counter from './Counter'
import ToggleSwitch from './ToggleSwitch'
import ColorChanger from './ColorChange'
import TodoList from './ToDoList'
import CharacterCounter from './CharacterCounter'
import './App.css'

function App() {
  return (
    <>
      <header className="simple-header">
        <h1>React Day 2 — useState Examples</h1>
      </header>

      <section className="useState-section">
        <h2 className="section-title">useState Examples</h2>
        <p className="section-sub">5 components showing different uses of useState hook</p>
        <div className="cards-grid">
          <Counter />
          <ToggleSwitch />
          <ColorChanger />
          <TodoList />
          <CharacterCounter />
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 React Day 2</p>
      </footer>
    </>
  )
}

export default App