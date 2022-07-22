import React, {useEffect, useState} from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])


  // this function will pass to LoginForm and be used to update the state of the logged in user
  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  const addMessage = (text) => {
    const message = {
      text: text,
      user: loggedInUser,
      id: messageList[messageList.length - 1].id + 1
    }
    setMessageList(
      (messageList) => [...messageList, message]
    )
  }


  useEffect(
    ()=> {
      // fectch
      setMessageList(initialMessageList)
    },
    []
  )

  return (
    <div >
          <h1>Jitter</h1>
          
          {/* { !loggedInUser ?
            <LoginForm activateUser={activateUser} />
            :
            <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} />}
          <Messages messageList={messageList} /> */}

          {/* Wrap all the components involved in the app's routing */}
          <Router>
            <Navigation loggedInUser={loggedInUser} activateUser={activateUser} /> 
            <Routes>
              <Route path="/" element={<Navigate to="messages" replace/>} />
              <Route path="messages" element={<Messages messageList={messageList} />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<LoginForm activateUser={activateUser} />} />

              <Route path="*" element={<NotFound />} /> {/*for everything else routes render NotFound component*/}
            </Routes>

          </Router>
    </div>
  )
}

export default App
