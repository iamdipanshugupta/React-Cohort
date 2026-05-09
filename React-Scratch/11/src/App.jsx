import { BrokenCup } from './Brokencup.jsx'
import { ErrorBoundary } from './ErrorBoundry.jsx'
const App = () => {
  return (
    <div>
      <h1>Chai aur late Night React</h1>
      <ErrorBoundary>
      <BrokenCup />
      </ErrorBoundary>
    </div>
  )
}

export default App
