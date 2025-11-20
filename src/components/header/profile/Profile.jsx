import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
     const [isHaveAccount, setIsHaveAccount] = useState(true);
     const [isLogin, setIsLogin] = useState(false);
     return (
          <>
               {isLogin ? (
                    <ProfileDetails setIsLogin={setIsLogin}/>
               ) : (
                    <div className="flex justify-center items-center h-screen">
                         {isHaveAccount ? (
                              <Login
                                   isHaveAccount={isHaveAccount}
                                   setIsHaveAccount={setIsHaveAccount}
                                   setIsLogin={setIsLogin}
                              />
                         ) : (
                              <Signup
                                   isHaveAccount={isHaveAccount}
                                   setIsHaveAccount={setIsHaveAccount}
                              />
                         )}
                    </div>
               )}
          </>
     );
};

export default Profile;
