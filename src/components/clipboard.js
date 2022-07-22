<nav>
  <Link to="/messages">Home</Link>
  <Link to="/about">About</Link>
  { loggedInUser ?
    <>
      {loggedInUser}
      <Link to="/messages/new">New Message</Link>
      <Link to="/messages" onClick={logout}>Log out</Link>
    </>
    :
    <>
      Guest
      <link to="/login">Login</link>
      <Link to="/login">Sign up</Link>
    </>
  } 
</nav>