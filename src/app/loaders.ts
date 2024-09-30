import { redirect } from "react-router-dom";
import { decodeJwt } from "jose";

export const protectedLoader = async () => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    throw redirect("/auth");
  }
  return null;
};

export const authLoader = async () => {
  const isAuthenticated = localStorage.getItem("token");
  if (isAuthenticated) {
    throw redirect("/polls");
  }
  return null;
};

export const adminLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/auth");
  }

  const user = decodeJwt(token) as { role: string; id: string };

  if (user?.role !== "admin") {
    throw redirect("/polls");
  }

  return null;
};
