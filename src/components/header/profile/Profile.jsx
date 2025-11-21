import { Suspense, lazy, useContext, useState } from "react";
import Login from "./Login";
import { LoginContext } from "../../../contexts/ProfileContext";
import ProfileDetails from "../profile/ProfileDetails";

const Profile = () => {
     const [isHaveAccount, setIsHaveAccount] = useState(true);
     const Signup = lazy(() => import("./Signup"));
     const { isLogin, handleLogin, handleLogout, setUser } =
          useContext(LoginContext);
     return (
          <>
               {isLogin ? (
                    <ProfileDetails handleLogout={handleLogout} />
               ) : (
                    <div className="flex justify-center items-center h-screen">
                         {isHaveAccount ? (
                              <Login
                                   isHaveAccount={isHaveAccount}
                                   setIsHaveAccount={setIsHaveAccount}
                                   handleLogin={handleLogin}
                                   setUser={setUser}
                              />
                         ) : (
                              <Suspense
                                   fallback={
                                        <span className="loading loading-infinity loading-xl"></span>
                                   }
                              >
                                   <Signup
                                        isHaveAccount={isHaveAccount}
                                        setIsHaveAccount={setIsHaveAccount}
                                   />
                              </Suspense>
                         )}
                    </div>
               )}
          </>
     );
};

export default Profile;
