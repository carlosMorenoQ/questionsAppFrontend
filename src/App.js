import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { List } from './pages/List'
import { New } from './pages/New'
import { Questions } from './pages/Questions'
import { Question } from './pages/Question'
import "./App.css"

const App = () => {

    const [auth, setAuth] = useState(false);
    const id = useSelector(store => store.login.uid);

    useEffect(() => {
        if (id) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [id])

    return (<div className='page-container'>

        <div className="content-wrap">

            <Navbar auth={auth} />

            <Routes>
                <Route path="/" exact element={<Home auth={auth} />} />
                <Route path="questions" exact element={<Questions />} />
                <Route path="question/:id" exact element={<Question />} />
                <Route path="favorites" exact element={auth ? <Favorites /> : <Navigate to="/" />} />
                <Route path="new" exact element={auth ? <New /> : <Navigate to="/" />} />
                <Route path="list" exact element={auth ? <List /> : <Navigate to="/" />} />

            </Routes>

        </div>

        <Footer />
    </div>)
}

export default App

