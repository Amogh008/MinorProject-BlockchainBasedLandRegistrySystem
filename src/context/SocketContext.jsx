import { createContext, useState } from "react";
const SocketContext = createContext();

const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [wadd, setWadd] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [isInspector, setIsInspector] = useState(false);
  const [selected, setSelected] = useState(0);
  const [isReg, setIsReg] = useState(false);
  const [isVer, setIsVer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detectChange, setDetect] = useState(false);
  return (
    <SocketContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        isUser,
        setIsUser,
        isInspector,
        setIsInspector,
        wadd,
        setWadd,
        selected,
        setSelected,
        isReg,
        setIsReg,
        isVer,
        setIsVer,
        loading,
        setLoading,
        detectChange,
        setDetect
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
