import { Link } from "react-router-dom"

const Navigation = ({loggedInUser, activateUser}) => {
    
    // when logout is clicked this will prevent page rerender and wipe the active user
    const logout = (e) => {
        e.preventDefault()
        activateUser("")
    }

    return (
        <nav>
            <Link to="/messages">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/messages/new">New Message</Link>
            {loggedInUser}
            <Link to="/messages" onClick={logout}>Logout</Link>
            <Link to="/login">Login</Link>
            <Link to="/login">Signup</Link>   
        </nav>
    )
}

export default Navigation