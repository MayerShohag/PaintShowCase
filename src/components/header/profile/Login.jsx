import { useEffect, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router";

const Login = ({ setIsHaveAccount, isHaveAccount, handleLogin, setUser }) => {
     const [passUsername, setPassUsername] = useState([]);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showPass, setShowPass] = useState(false);

     const handleSubmit = (e) => {
          e.preventDefault();
          passUsername.map((users) => {
               if (
                    email === users.email ||
                    (email === users.username && password === users.password)
               ) {
                    handleLogin(users);
                    setUser(users);
                    console.log(`login true`);
               } else {
                    console.log(`login false`);
               }
          });
     };
     useEffect(() => {
          fetch(
               `https://691cb4a03aaeed735c91d7ac.mockapi.io/paintshowcase/user`
          )
               .then((res) => res.json())
               .then((data) => setPassUsername(data));
     }, []);
     return (
          <div className="border border-gray-700 rounded-xl p-3">
               <div className="p-2 text-center">
                    <h1 className="md:leading-3 leading-0 font-[Audiowide] text-[10px] md:text-[15px]">
                         <span className="text-xl font-bold md:text-3xl md:font-bold">
                              Paint
                         </span>
                         <br />
                         ShowCase
                    </h1>
                    <p className="pt-3 text-lg text-gray-500 ">
                         Log in to{" "}
                         <span className="font-[Audiowide]">PaintShowCase</span>
                    </p>
               </div>
               <hr className=" border-gray-700" />
               <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col w-90 gap-2">
                         <div className="mt-3">
                              <label htmlFor="text">
                                   Username or email address
                              </label>
                              <br />
                              <input
                                   type="text"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   id="email"
                                   placeholder="example@gmail.com"
                                   required
                                   className="border w-full border-gray-700 rounded-lg p-3 text-xl"
                              />
                         </div>
                         <div>
                              <div className="flex items-center gap-1">
                                   <label htmlFor="password">Password</label>
                                   <div className="hover:bg-white/20 p-1 rounded-full">
                                        {showPass ? (
                                             <GoEye
                                                  onClick={() =>
                                                       setShowPass(!showPass)
                                                  }
                                             />
                                        ) : (
                                             <GoEyeClosed
                                                  onClick={() =>
                                                       setShowPass(!showPass)
                                                  }
                                             />
                                        )}
                                   </div>
                              </div>
                              <input
                                   type={showPass ? "text" : "password"}
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"
                                   id="password"
                                   required
                                   className="border w-full border-gray-700 rounded-lg p-3 text-xl"
                              />
                         </div>
                         <input
                              type="submit"
                              value="Log in"
                              className="border w-full hover:bg-gray-800 cursor-pointer border-gray-700 rounded-lg p-3"
                         />
                    </div>

                    <div className="text-center pt-2 flex flex-col">
                         <div>
                              <Link to="/forgetten-password">
                                   forgotten password?
                              </Link>{" "}
                              <span
                                   className="cursor-pointer hover:underline text-blue-500"
                                   onClick={() =>
                                        setIsHaveAccount(!isHaveAccount)
                                   }
                              >
                                   Sign up
                              </span>
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default Login;
