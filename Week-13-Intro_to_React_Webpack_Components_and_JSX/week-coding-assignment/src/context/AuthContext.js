import React, {useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState()

const value ={
    currentUser
}

  return (
<AuthContext.Provider>
    {children}
</AuthContext.Provider>
  )
}
