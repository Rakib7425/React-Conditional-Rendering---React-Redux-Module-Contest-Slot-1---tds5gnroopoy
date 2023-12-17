import "@/styles/globals.css";
import React, { useState } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [btn1State, setBtn1State] = useState(true);
  const [btn2State, setBtn2State] = useState(true);

  const contextValue = {
    btn1State,
    setBtn1State,
    btn2State,
    setBtn2State,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
