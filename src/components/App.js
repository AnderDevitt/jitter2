import React, {useEffect, useReducer } from 'react'
import Navigation from './Navigation'
import LoginForm from './LoginForm'
import MessageForm from './MessageForm'
import Messages from './Messages'
import MessageDetail from './MessageDetail'
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './About'
import NotFound from './NotFound'
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext'

const App = () => {
  // useReducer handles all states in the same object
  const initialState = {
    messageList: [],
    loggedInUser: ""
  }

  // useReducer receives 2 arguments
  // reducer -> is the function that is executed when ...
  // state
  // it returns an array with two elements
  //store -> the name of the state
  //dispatch -> is the function that triggers the reducer function
  const [store, dispatch] = useReducer(reducer, initialState)
  // need loggedInUser here with useReducer for the turnary operator in the Routes 
  const {loggedInUser} = store

  // const [loggedInUser, setLoggedInUser] = useState("")
  // const [messageList, setMessageList] = useState([])


  useEffect(
    ()=> {
      // fectch
      // setMessageList(initialMessageList)
      dispatch({
        type: "setMessageList",
        data: initialMessageList
      })
    },
    []
  )

  return (
    <div >
          <h1>Jitter</h1>
          {/* Wrap all the components that use global states like loggedInUser and messageList in the state context provider */}
          <StateContext.Provider value={{store, dispatch}}>
            {/* Wrap all the components involved in the app's routing */}
            <Router>
              <Navigation /> 
              <Routes>
                <Route path="/" element={<Navigate to="messages" replace/>} />
                {/* Nested routes for messages routes */}
                <Route path="messages" >
                  <Route index element={<Messages />} />
                  <Route path="new" element={
                    loggedInUser?
                      <MessageForm />
                    :
                      <Navigate to="/login" />
                    } />
                  <Route path=":messageId" element={<MessageDetail />} />  
                </Route>
                <Route path="about" element={<About />} />
                <Route path="login" element={<LoginForm />} />

                <Route path="*" element={<NotFound />} /> {/*for everything else routes render NotFound component*/}
              </Routes>

            </Router>
          </StateContext.Provider>
    </div>
  )
}

export default App
