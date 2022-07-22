import { useState } from "react"
import { useNavigate}   from "react-router-dom"

const LoginForm = ({activateUser}) => {

    const navigate = useNavigate()
    const initialFormData = {
        user: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    

    // stop the page from rerendering when the form is submitted and user details being added to search bar
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("You clicked submit")
        console.log(formData)
        // invoke activateUser to pass the username back to app component and update the state
        activateUser(formData.user)
        // clean the form
        setFormData(initialFormData)
        navigate("/messages")
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="user" id="user" value={formData.user} onChange={handleFormData} />
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData} />
            </div>
            <input type="submit" value="Login" />
        </form>
        </>
    )
}

export default LoginForm