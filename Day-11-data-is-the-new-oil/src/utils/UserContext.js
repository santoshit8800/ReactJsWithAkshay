import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy",
        email: "Dummy.prajp@gmail.com",
    },
});
UserContext.displayName = "UserContext";
export default UserContext;