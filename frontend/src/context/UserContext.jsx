import React from 'react'
export const UserDataContext = createContext()
const UserContext = ({children}) => {
  return (
    <div>
      <UserDataContext.Provider>
      {children}

      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
