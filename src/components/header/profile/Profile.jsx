import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Profile = () => {
     const [isHaveAccount, setIsHaveAccount] = useState(true);
     return (
          <>
               <div className="flex justify-center items-center h-screen">
                    {isHaveAccount ? (
                         <Login
                              isHaveAccount={isHaveAccount}
                              setIsHaveAccount={setIsHaveAccount}
                         />
                         
                    ) : (
                         <Signup
                              isHaveAccount={isHaveAccount}
                              setIsHaveAccount={setIsHaveAccount}
                         />
                    )}
               </div>
          </>
     );
};

export default Profile;
