import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export function Navbar() {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="bg-primary sticky top-0 z-10  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <Button
                  variant={"ghost"}
                  className="text-white font-bold text-xl hover:bg-gray-700 hover:text-white"
                >
                  Product Management
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <LogOut />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
