import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import AuthLayout from "../components/AuthLayout";

export default function Register(){

  const navigate = useNavigate();

  const [form,setForm] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    await api.post("/auth/register",form);

    navigate("/login");
  }

  return(

    <AuthLayout>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          name="username"
          placeholder="Username"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          onChange={handleChange}
        />

        <button
          className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
        >
          Register
        </button>

      </form>

    </AuthLayout>

  )
}