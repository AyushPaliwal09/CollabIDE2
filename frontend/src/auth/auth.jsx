import React from 'react'

const auth = () => {
  return (
    <div>
        <div
    className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    style={{ background: "var(--bg)", color: "var(--text)" }}
  >
    {/* Blobs */}
    <div className="absolute inset-0 z-[-1]">
      <div
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse"
        style={{ background: "var(--blob-blue)" }}
      ></div>
      <div
        className="absolute bottom-20 right-24 w-72 h-72 rounded-full blur-3xl animate-pulse"
        style={{ background: "var(--blob-purple)" }}
      ></div>
    </div>

    {/* Card */}
    <div
      className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl border shadow-2xl animate-fadeInUp"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
          <Code size={30} className="text-white" />
        </div>

        <h1 className="text-3xl font-bold  mt-3" style={{ color: "var(--text)" }}>
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--subtext)" }}>
       
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        
          <div className="relative group">
            <Mail className="absolute left-3 mr-5 top-3 text-gray-400 " size={18} />
          
            <InputCompo placeholder="Email"/>
          </div>

        {/* Username */}
        <div className="relative group">
          <User className="absolute left-3 top-3 text-gray-400" size={20} />
        
            <InputCompo placeholder="Username"/>

        </div>

        {/* Password */}
        <div className="relative group">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

            <InputCompo placeholder="Password"/>

        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg text-lg text-white font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.02] transition-all"
          style={{
            boxShadow: "0 4px 15px var(--btn-shadow)",
            opacity: loading ? 0.6 : 1,
          }}
        >
        </button>
      </form>

      {/* Switch */}
      <p className="mt-6 text-center" style={{ color: "var(--subtext)" }}>
        <button
          className="ml-1 hover:underline text-cyan-400"
        >
        </button>
      </p>
    </div>
  </div>
      
    </div>
  )
}

export default auth
