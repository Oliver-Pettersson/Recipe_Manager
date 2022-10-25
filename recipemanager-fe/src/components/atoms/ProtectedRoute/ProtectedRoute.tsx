import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {
  AuthenticationContextProps,
  useAuth,
} from "../../../contexts/AuthenticationContext";

interface ProtectedRouteProps {
  redirect?: string;
}

/**
 * Use this component to make a route protected (can only be accessed by authorized user).
 * When exporting the component to be protected, export this component instead, while passing in the protected component and the accepted roles as arguments.
 * @example // Instead of export default ComponentName;
 * export default ProtectedRoute({
    Component: ComponentName,
    acceptedRoles: ["role1", "role2"],
  });
 * @param Component The component to be displayed if a user is authenticated and authorized to see it.
 * @param acceptedRoles An array of roles that this route accepts
 */
const ProtectedRoute = ({
  redirect = "/login",
}: ProtectedRouteProps) => {
  const auth = useAuth();
  const [pageToRender, setPageToRender] = useState(<></>);
  useEffect(() => {
    getPageToRender(auth, redirect).then((page) =>
      setPageToRender(page)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isProcessingAuthentication, auth.principal]);
  return pageToRender;
};

/** Get the page that should be rendered based on authentication and authorization.
 * @param props The props to be passed to the rendered component
 * @param acceptedRoles An array of roles that this route accepts
 * @param Component The component to be displayed if a user is authenticated and authorized to see it.
 * @returns Either the Login page, if the user isn't auhenticated or authorized or the component in the parameters otherwise
 */
const getPageToRender = async (
  { isProcessingAuthentication, principal }: AuthenticationContextProps,
  redirect: string
) => {
  if (isProcessingAuthentication) {
    return <></>;
  }
  return principal ? <Outlet /> : <Navigate to={redirect} />;
};

export default ProtectedRoute;
