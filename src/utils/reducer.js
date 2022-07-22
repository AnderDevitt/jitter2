// alternative to useState, more complex but also more powerful, more flexible. 
// useState is syntactic sugar for useReducer that simplifies it
// kind of Redux

// reducer function receives 2 parameters
// it receives the current state 
// it receives the action we want to implement to the state
// based on the action, the function will update the state in one way or another
// action is an object with 2 keys - type and data
// type key determines the action we are taking
// data key contains the data necessary to update the state 
// the function returns the updated state
export const reducer = (state, action) => {
  console.log(state)
  console.log(action)

  switch(action.type) {
    case "cleanState": {
      // return state to default values
      return {
        loggedInUser: "",
        messageList: []
      }
    }
    case "setMessageList": {
      // populate the messageList array with the initial values
      return {
        ...state,
        messageList: action.data
      }
    }
    case "addMessage": {
      // receives a message and adds it to the message list
      return {
        ...state,
        messageList: [action.data, ...state.messageList]
      }
    }
    case "setLoggedInUser": {
      // set the logged in user
      return {
        ...state,
        loggedInUser: action.data
      }
    }
    default: return state
  }

}



