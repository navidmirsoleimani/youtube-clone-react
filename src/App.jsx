import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/Video/Video'

function App() {

    // the menu button and sidebar component aren't in a same place (one in navbar and the other in home) and we should write functionality code for menu btn to hide the sidebar's texts
    // we send the state to the component where we want to check it and we send the function to the component where we want to change it
    // we don't need sidebar in home element itself , we just want to pass it to sidebar , here it's not a big problem but we could also use state management hooks to reduce redundancies
    const [sidebar , setSidebar] = useState(true)




    return (

        <div>
        {/* because it is displayed in both (all) pages */}
        <Navbar setSidebar={setSidebar} />
        <Routes>
            <Route path='/' element={<Home sidebar={sidebar} />} />
            <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
    </div>
    
    )
  
}

export default App
