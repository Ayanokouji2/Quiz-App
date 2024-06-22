import React ,{createContext,useEffect,useState} from 'react'
export const  AuthContext=createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    setUser(user)
  },[user])
  const store={
    user
  }
  return (
    <AuthContext.Provider value={store}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
