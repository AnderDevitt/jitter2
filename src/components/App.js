import React, {useEffect, useState} from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import MessageDetail from './MessageDetail'
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
      id: messageList[0].id + 1 //nextId(messageList)
    }
    setMessageList(
      // this will put the last message at the top of the message list. reverse the elements in the [ ] to reverse the order
      (messageList) => [message, ...messageList]
    )
  }

  // function nextId(data) {
  //   // exclude empty data
  //   if(data.length === 0) return 1;
  //   // find the next id if there are elements in data
  //   const sortData = data.sort((a,b) => a.id - b.id)
  //   const nextId = sortData[sortData.length - 1].id + 1
  //   return nextId
  // }

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
              {/* Nested routes for messages routes */}
              <Route path="messages" >
                <Route index element={<Messages messageList={messageList} />} />
                <Route path="new" element={
                  loggedInUser?
                    <MessageForm loggedInUser={loggedInUser} addMessage={addMessage} />
                  :
                    <Navigate to="/login" />
                  } />
                <Route path=":messageId" element={<MessageDetail messageList={messageList} />} />  
              </Route>
              <Route path="about" element={<About />} />
              <Route path="login" element={<LoginForm activateUser={activateUser} />} />

              <Route path="*" element={<NotFound />} /> {/*for everything else routes render NotFound component*/}
            </Routes>

          </Router>
    </div>
  )
}

export default App
