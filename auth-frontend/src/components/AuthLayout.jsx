export default function AuthLayout({ children }) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]"/>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[420px]">

        {children}

      </div>

    </div>
  );
}