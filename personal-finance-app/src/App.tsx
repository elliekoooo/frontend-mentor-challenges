import { Route, Router, Routes } from 'react-router'
import './App.css'
import { SideBar } from './components/SideBar'
import { OverView } from './layout/Overview'

function App() {

  return (
    <div className='flex flex-row m-6'>
      <SideBar></SideBar>
      <div className='mx-5'>
        <Routes>
          <Route path='/overview' element={<OverView />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
