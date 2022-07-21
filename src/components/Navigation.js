const Navigation = ({loggedInUser, activateUser}) => {
    
    // when logout is clicked this will prevent page rerender and wipe the active user
    const logout = (e) => {
        e.preventDefault()
        activateUser("")
    }

    return (
        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>
            { loggedInUser ?
                <>
                    {loggedInUser}
                    <a href="/" onClick={logout}>Log out</a>
                </>
                :
                <>
                    Guest
                    <a href="/">Login</a>
                    <a href="/">Sign up</a>
                </>
            } 
        </nav>
    )
}

export default Navigation