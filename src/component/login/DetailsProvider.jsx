import React, { useState, createContext, useContext } from 'react'
import { useNavigate } from "react-router-dom";
const UserDetailsContext = createContext(null);
export const Details = () => useContext(UserDetailsContext);

export default function DetailsProvider({ children }) {
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    userImg: "",
  });

  const responseSuccess = (response) => {
    if (response.profileObj) {
      setuserData({
        username: response.profileObj.givenName,
        email: response.profileObj.email,
        userImg: response.profileObj.imageUrl,
      });
      navigate("/dashboard", { replace: true });
    }
  };

  const resFailure = (response) => {
    console.log(response);
  }

  return (
    <UserDetailsContext.Provider
      value={{
        userData,
        resFailure,
        responseSuccess
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  )
}
