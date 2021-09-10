import React, { useContext, useState, useEffect } from "react";
import { auth, createUser, logInUser, logOutOfApp } from "../firebase.js"; 
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(); 
  }, []);

  // firebase handles our signup functionality
  async function signup(email, password) {
    setCurrentUser(null); // very important to clear out currentUser!

    await createUser(email, password)
      .then((user) => {
        console.log('user --- ',user)
        setCurrentUser({ 
          email : user["user"]["email"], 
          id : user["_tokenResponse"]["localId"], 
          date_joined : user["user"]["metadata"]["creationTime"],
          gave_cookie_permission : "",
          notifications_on : "",
          apply_all_warning_on : "",
          reset_warning_on : "", 
        })
      })
      .catch((error) => { 
        console.log("message", error.message);
        return null;
      });
  }

  // firebase handles our signup functionality
  function login(email, password) {
    logInUser(email, password)
      .then((user) => { 
        const userObj = { 
          email : user["user"]["email"], 
          id : user["_tokenResponse"]["localId"], 
          date_joined : user["user"]["metadata"]["creationTime"],
          gave_cookie_permission : "",
          notifications_on : "",
          apply_all_warning_on : "",
          reset_warning_on : "", 
        }
        setCurrentUser(userObj);
        console.log(currentUser);
      })
      .catch((error) => {
        console.log("code", error.code);
        console.log("message", error.message);
      });
  }

  function logOut() {
    logOutOfApp()
      .then((_) => setCurrentUser(null))
      .catch((error) => {
        console.log("code", error.code);
        console.log("message", error.message);
      });
  }

  const value = {
    currentUser,
    setCurrentUser,
    signup,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
