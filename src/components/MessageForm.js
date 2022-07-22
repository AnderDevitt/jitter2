import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MessageForm = ({loggedInUser, addMessage}) => {

    const navigate = useNavigate()
    const initialFormData = {
        text: ""
    }
    const [formData, setFormData] = useState(initialFormData)

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
    const cleanMessage = () => {
        // adds the message to the list
        setFormData(initialFormData)
    }

    const handleFormData = (e) => {
        // console.log(e.target.value)
        // destructure the previous object and then update the item with the new value
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
        <p>Post a message</p>
        <form onSubmit={handleSubmit}>
            <div>
            <textarea type="text" name="text" id="text" placeholder={`Type a message...`} value={formData.text} onChange={handleFormData} />
            </div>
            
            <input type="submit" value="post" />
            <button onClick={cleanMessage}>Clean Message</button>
        </form>
        </>
    )
}

export default MessageForm