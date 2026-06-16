import Counter from './Counter'
import ToggleSwitch from './ToggleSwitch'
import ColorChanger from './ColorChange'
import TodoList from './ToDoList'
import CharacterCounter from './CharacterCounter'
import FormHandling from './FormHandling'

import './App.css'

function App() {
  return (
    <>
      <header className="simple-header">
        <h1>React Day 2 — useState Examples</h1>
      </header>

      {/* Task 1 */}
      <section className="useState-section">
        <h2 className="section-title">Task 1 - useState Examples</h2>

        <p className="section-sub">
          5 components showing different uses of useState hook
        </p>

        <div className="cards-grid">
          <Counter />
          <ToggleSwitch />
          <ColorChanger />
          <TodoList />
          <CharacterCounter />
        </div>
      </section>

      {/* Divider */}
      <section className="task-divider">
        <hr />
        <h2>Task 2 - Form Handling using useState</h2>
        <p>
          Create a separate component demonstrating form handling with
          multiple input fields and proper state management.
        </p>
      </section>

      {/* Task 2 */}
      <section className="useState-section">
        <div className="form-section">
          <FormHandling />
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 React Day 2</p>
      </footer>
    </>
  )
}

export default App