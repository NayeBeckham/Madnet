import * as React from "react";

/** Custom Hooks */
import useAuthHandler from "../utils/custom-hooks/AuthHandler";
/** Utils */
import { getStoredUserAuth } from "../utils/Helpers";
import { DEFAULT_USER_AUTH } from "../utils/Constants";

export const authContext = React.createContext( DEFAULT_USER_AUTH );

// export const authContext = React.createContext({
//   auth: DEFAULT_USER_AUTH,
//   setUser: (user) => {authHandle.setUser(user)},
//   unsetUser: () => {authHandle.unsetUser()}
// });


const { Provider } = authContext;
const AuthProvider = ({ children }) => {
  const { auth, setUser, unsetUser } = useAuthHandler(
    getStoredUserAuth()
  );

  return (
    <Provider value={{ auth, setUser, unsetUser }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
