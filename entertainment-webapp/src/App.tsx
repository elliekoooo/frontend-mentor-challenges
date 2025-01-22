import './App.css'
import { Contents } from './layout/Contents'
import { SideBar } from './layout/SideBar'

function App() {

  return (
      <div className="columns">
        <div className="column is-1">
          <SideBar></SideBar>
        </div>
        <div className="column">
          <Contents></Contents>
        </div>
      </div>
  )
}

export default App
