import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
