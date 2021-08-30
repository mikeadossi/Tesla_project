import React, { useContext, useState, useEffect } from "react";
import { auth, createUser, logInUser, logOutOfApp } from "../firebase.js"; 
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false); 

  if(currentUser) console.log("current User", currentUser.uid);

  useEffect(() => { 
    setLoading(); 
  }, []);

  // firebase handles our signup functionality
  function signup(email, password) {
    createUser(email, password)
      .then((user) => {
        const userObj = { 
          email : user["user"]["email"], 
          id : user["_tokenResponse"]["localId"], 
          date_joined : user["user"]["metadata"]["creationTime"],
        }
        setCurrentUser(userObj);
      })
      .catch((error) => { 
        console.log("message", error.message);
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
        }
        setCurrentUser(userObj);
        console.log(userObj);
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
