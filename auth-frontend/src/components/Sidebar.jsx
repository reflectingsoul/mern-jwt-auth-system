import { LayoutDashboard, User, Settings } from "lucide-react";

export default function Sidebar() {

  return (

    <div className="w-64 h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        AuthApp
      </h1>

      <nav className="space-y-6">

        <div className="flex items-center gap-3 cursor-pointer hover:text-indigo-400">
          <LayoutDashboard size={20}/>
          Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-indigo-400">
          <User size={20}/>
          Profile
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-indigo-400">
          <Settings size={20}/>
          Settings
        </div>

      </nav>

    </div>
  );
}