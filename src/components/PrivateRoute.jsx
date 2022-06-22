import { Navigate, Outlet } from 'react-router-dom'
import useAuthStatus from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  // const loggedIn = false
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    // return <h1>Loading</h1>
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}

export default PrivateRoute
