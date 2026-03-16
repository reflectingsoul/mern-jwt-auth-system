import { useEffect, useState } from "react";
import api from "../api/axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard(){

  const [user,setUser] = useState(null);

  useEffect(()=>{

    const token = localStorage.getItem("accessToken");

    api.get("/auth/me",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    .then(res=>setUser(res.data.user))

  },[])

  return(

    <div className="flex bg-slate-950 text-white min-h-screen">

      <Sidebar/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-6">
            Welcome Back 👋
          </h1>

          {user && (

            <div className="grid grid-cols-3 gap-6">

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <p className="text-gray-400">Username</p>
                <h2 className="text-xl font-semibold">{user.username}</h2>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <p className="text-gray-400">Email</p>
                <h2 className="text-xl font-semibold">{user.email}</h2>
              </div>

              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <p className="text-gray-400">User ID</p>
                <h2 className="text-sm">{user._id}</h2>
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}