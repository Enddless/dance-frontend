import { Navigate } from "react-router-dom";
import { AuthorizationStatus } from "../../const/const";
import { useAppSelector } from "../../services/type-service";
import { AppRoute } from "../../const/route";

type RedirectProps = {
  children: JSX.Element;
};

function RedirectPersonalArea({ children }: RedirectProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  return authStatus === AuthorizationStatus.Unknown ||
    authStatus === AuthorizationStatus.NoAuth ? (
    <Navigate to={`${AppRoute.Root}`} />
  ) : (
    children
  );
}

export { RedirectPersonalArea };
