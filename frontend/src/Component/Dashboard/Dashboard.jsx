import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f2f2ff] p-6 md:p-10">
      <h1 className="text-4xl font-bold text-[#4E37D9] mb-10 text-center md:text-left">
        Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
          <div className="mb-3 text-sm text-gray-500">Scans Today</div>
          <div className="text-4xl font-bold text-[#4E37D9]">12</div>
          <p className="mt-2 text-gray-600 text-sm">+4 from yesterday</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
          <div className="mb-3 text-sm text-gray-500">Threats Detected</div>
          <div className="text-4xl font-bold text-red-500">3</div>
          <p className="mt-2 text-gray-600 text-sm">1 new alert</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
          <div className="mb-3 text-sm text-gray-500">Safe Sites</div>
          <div className="text-4xl font-bold text-green-600">9</div>
          <p className="mt-2 text-gray-600 text-sm">+2 verified today</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-semibold text-[#4E37D9] mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="border-l-4 border-green-500 pl-4">
            ✅ Scanned <strong>https://example.com</strong> — No threat found.
          </li>
          <li className="border-l-4 border-red-500 pl-4">
            ⚠️ Detected phishing on <strong>https://phish-site.fake</strong>
          </li>
          <li className="border-l-4 border-green-500 pl-4">
            ✅ Verified <strong>https://mybank.com</strong> as safe.
          </li>
          <li className="border-l-4 border-yellow-400 pl-4">
            🚧 Suspicious activity: <strong>https://login-fake.com</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
