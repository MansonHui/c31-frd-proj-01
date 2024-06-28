import { Navigate, Outlet } from "react-router-dom";
import MenuHeaderBar from "../../components/header/Header";

export function LoginAuthGuard(props: { authToken: string | null }) {
  console.log("guard")
  if (props.authToken) {
    return (
      <>
        <MenuHeaderBar />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
