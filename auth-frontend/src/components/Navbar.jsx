import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");
  }

  return(

    <div className="flex justify-between items-center px-8 py-4 border-b border-gray-700">

      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        <LogOut size={18}/>
        Logout
      </button>

    </div>
  )
}