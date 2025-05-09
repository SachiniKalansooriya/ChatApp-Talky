import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
     <header className="fixed top-0 z-40 w-full border-b bg-blue-50 border-base-300 backdrop-blur-lg">
        <div className="container h-16 px-4 mx-auto">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-5">
              <Link to="/" className="flex items-center tran1sition-all gap- hover:opacity-80">
                <div className="flex items-center justify-center rounded-lg size-12 bg-primary/10">
                
                </div>
                <h1 className="font-mono text-2xl italic font-bold text-blue-800 ">Talky</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to={"/settings"}
                className={`btn btn-sm gap-2 border-2 border-blue-800 transition-colors bg-blue-300 `}
              >
                <Settings className="w-5 h-5" />
                <span className="hidden sm:inline">Settings</span>
              </Link>

              {authUser && (
                <>
                  <Link
                    to={"/profile"}
                    className={`btn btn-sm gap-2 border-2 border-blue-800 transition-colors bg-blue-300`}
                  >
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button
                    className="gap-2 transition-colors bg-blue-300 border-2 border-blue-800 btn btn-sm"
                    onClick={handleLogoutClick}
                  >
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Logout Confirmation */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-medium">Are you sure you want to logout?</h3>
            <div className="flex justify-end gap-2">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 text-gray-700 bg-gray-200 border-2 border-blue-800 rounded-md hover:bg-gray-300"
              >
                No
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 text-white border-2 border-blue-800 rounded-md bg-primary hover:bg-primary/90"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
