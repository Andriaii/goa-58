
import { useContext } from "react";
import { RoleContext } from "./RoleContext";

const ShowRole = () => {
  const role = useContext(RoleContext);

  let message = "";

  switch (role) {
    case "guest":
      message = "Hello Guest! Feel free to explore.";
      break;
    case "member":
      message = "Welcome back, Member!";
      break;
    case "admin":
      message = "Hello Admin! You have full access.";
      break;
    default:
      message = "Unknown role.";
  }

  return (
    <div className="mt-4 text-xl font-semibold text-center">
      {message}
    </div>
  );
};

export default ShowRole;
