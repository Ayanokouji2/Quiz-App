import React from 'react'
import Home from './Components/home/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Quiz from './Components/quiz/Quiz'
import Dashboard from './Components/dashboard/Dashboard'
import PostQuiz from './Components/post/PostQuiz'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/quiz/:id' element={<Quiz/>}></Route>
        <Route path='/postquiz' element={<PostQuiz/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
