import { useLoading } from "./hooks/useLoading"
import SplashScreen from "./SplashScreen"

const Layaout = ({children}) => {
  const { loading } = useLoading()
  return (
    <>
      {children}
    </>
  )
}

export default Layaout