import { useContext } from 'react'
import { LoginContext } from '../providers/LoginProvider'


const useLogin = () => {
    const value = useContext(LoginContext)
    return value 
}

export default useLogin
