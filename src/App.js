import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AddNote, Beginning, Categories, Navbar, ShowNote, Sidebar, OpenNote } from './components'

function App() {
    return (
        <div>
            <Navbar />
            <Categories />
            <div className='main'>
                <Sidebar />

                <Routes>

                    <Route path='/' element={<Beginning />} />
                    <Route path='/add' element={<AddNote />} />
                    <Route path="/note/:id" element={<OpenNote />} />
                    <Route path='/show/:category' element={<ShowNote />} />
                    
                </Routes>

            </div>

        </div>


    )
}

export default App