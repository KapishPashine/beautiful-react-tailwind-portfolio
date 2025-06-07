// Layout.jsx
import { Navbar } from "./Navbar"; // Adjust import path if needed
import { Outlet } from "react-router-dom"; // Render the children routes

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar (visible on all pages) */}
      <Navbar />

      <Outlet />
    </div>
  );
};
