import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const ProfileContext = ({ children }) => {
     const [isLogin, setIsLogin] = useState(
          localStorage.getItem("isLogin") === "true"
     );

     const [user, setUser] = useState(() => {
          const savedUser = localStorage.getItem("user");
          return savedUser ? JSON.parse(savedUser) : {};
     });

     const handleLogin = (userData) => {
          setIsLogin(true);
          setUser(userData);
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("user", JSON.stringify(userData));
     };

     const handleLogout = () => {
          setIsLogin(false);
          setUser({})
          localStorage.removeItem("isLogin");
          localStorage.removeItem("user")
     };
     return (
          <LoginContext.Provider
               value={{
                    handleLogin,
                    handleLogout,
                    isLogin,
                    user,
                    setUser,
               }}
          >
               {children}
          </LoginContext.Provider>
     );
};

export default ProfileContext;
