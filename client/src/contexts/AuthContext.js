import React, { useContext, useState, useEffect } from "react";
import { auth, createUser, signInUser } from "../firebase.js";
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // firebase handles validating whether a user is logged in or not, so user is either null or an obeject in auth state change.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading();
    });

    return unsubscribe;
  }, []);

  // firebase handles our signup functionality
  async function signup(email, password) {
    createUser(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.error(error));
  }

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
