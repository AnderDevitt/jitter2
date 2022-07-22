import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalState} from "../utils/stateContext"   

const MessageForm = () => {
    const {store, dispatch}   = useGlobalState()
    const {loggedInUser, messageList} = store
    const navigate = useNavigate()
    const initialFormData = {
        text: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleFormData = (e) => {
        // console.log(e.target.value)
        // destructure the previous object and then update the item with the new value
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.text === ""){
            console.log("Empty Message")
        } else {
            console.log(formData)
            addMessage(formData.text)
            cleanMessage()
            navigate("/messages")
        }
    }

    const addMessage = (text) => {
        const message = {
            text: text,
            user: loggedInUser,
            id: messageList[0].id + 1 //nextId(messageList)
        }
            // setMessageList(
            //   // this will put the last message at the top of the message list. reverse the elements in the [ ] to reverse the order
            //   (messageList) => [message, ...messageList]
            // )
        dispatch({
            type: "addMessage",
            data: message
        })
    }

    
    const cleanMessage = () => {
        // adds the message to the list
        setFormData(initialFormData)
    }

    

    return (
        <>
        <p>Post a message</p>
        <form onSubmit={handleSubmit}>
            <div>
            <textarea type="text" name="text" id="text" placeholder={`${loggedInUser}, type a message...`} value={formData.text} onChange={handleFormData} />
            </div>
            
            <input type="submit" value="post" />
            <button onClick={cleanMessage}>Clean Message</button>
        </form>
        </>
    )
}

export default MessageForm