import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import AuthLayout from "../components/AuthLayout";
import { Mail, Lock } from "lucide-react";

export default function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const res = await api.post("/auth/login",{ email,password });

    localStorage.setItem("accessToken",res.data.accessToken);
    localStorage.setItem("refreshToken",res.data.refreshToken);

    navigate("/dashboard");
  }

  return(

    <AuthLayout>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome Back
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="relative">

          <Mail className="absolute left-3 top-3 text-gray-300"/>

          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e)=>setEmail(e.target.value)}
          />

        </div>

        <div className="relative">

          <Lock className="absolute left-3 top-3 text-gray-300"/>

          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>

        <button
          className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
        >
          Login
        </button>

      </form>

      <p className="text-sm text-center mt-6 text-gray-300">
        Don't have an account?  
        <span
          className="ml-2 text-indigo-400 cursor-pointer"
          onClick={()=>navigate("/register")}
        >
          Register
        </span>
      </p>

    </AuthLayout>

  );
}