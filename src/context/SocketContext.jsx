import { createContext, useState } from "react";
const SocketContext = createContext();

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [client, setClient] = useState("");
  return (
    <SocketContext.Provider
      value={{ loggedIn, setLoggedIn, client, setClient }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
