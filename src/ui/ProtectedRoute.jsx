import { styled } from "styled-components";
import { useUser } from "../services/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { is } from "date-fns/locale";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2// if no authenticated user, redirect to login page

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  //3. While loading show a loading indicator
  if (isLoading) return;
  <FullPage>
    <Spinner />;
  </FullPage>;
  //4. If there is an authenticated user, show the protected route
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
