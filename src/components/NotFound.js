import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <p>Error</p>
      <p>Sorry, this page was not found</p>
      <Link to="/messages">Go back to messages</Link>
    </>
  )
}

export default NotFound