import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./contexts/AuthenticationContext";

interface PropsType {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PropsType) {
  const { isProcessingAuthentication } = useAuth();
  const path = useLocation().pathname;
  const isAuth = path === "/login" || path === "/signup";
  return (
    <div style={isAuth || isProcessingAuthentication ? {} : { marginLeft: "180px" }} className="App">
      {children}
    </div>
  );
}
