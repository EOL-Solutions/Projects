import { useLoading } from "./hooks/useLoading"
import SplashScreen from "./SplashScreen"

const Layaout = ({children}) => {
  const { loading } = useLoading()
  return (
    <>
    { loading && <SplashScreen/>}
      {children}
    </>
  )
}

export default Layaout