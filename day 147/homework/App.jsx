
import { useState } from "react";
import { RoleContext } from "./RoleContext";
import ShowRole from "./ShowRole";

const App = () => {
  const [role, setRole] = useState("guest");

  return (
    <RoleContext.Provider value={role}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-6">
        <h1 className="text-2xl font-bold">User Role Manager</h1>

        <div className="flex gap-4">
          <button
            onClick={() => setRole("guest")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Guest
          </button>
          <button
            onClick={() => setRole("member")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Member
          </button>
          <button
            onClick={() => setRole("admin")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Admin
          </button>
        </div>

        <ShowRole />
      </div>
    </RoleContext.Provider>
  );
};

export default App;
