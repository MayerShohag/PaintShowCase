import React from "react";

const Signup = ({isHaveAccount, setIsHaveAccount}) => {
     return (
          <>
               <div className="border border-gray-700 p-3 rounded-xl">
                    <div className="p-2 text-center">
                         <h1 className="md:leading-3 leading-0 font-[Audiowide] text-[10px] md:text-[15px]">
                              <span className="text-xl font-bold md:text-3xl md:font-bold">
                                   Paint
                              </span>
                              <br />
                              ShowCase
                         </h1>
                         <p className="pt-3 text-lg text-gray-500">
                              Create a new account!
                         </p>
                    </div>
                    <hr className=" border-gray-700" />
                    <form className="flex flex-col gap-3 mt-2">
                         <div className="flex gap-2">
                              <div>
                                   <label htmlFor="name">Name</label>
                                   <br />
                                   <input
                                        type="text"
                                        id="name"
                                        placeholder="name"
                                        required
                                        className="border border-gray-700 rounded-lg px-2 py-1"
                                   />
                              </div>
                              <div>
                                   <label htmlFor="username">Username</label>
                                   <br />
                                   <input
                                        type="text"
                                        placeholder="username"
                                        id="username"
                                        required
                                        className="border border-gray-700 rounded-lg px-2 py-1"
                                   />
                              </div>
                         </div>
                         <div className="">
                              <label htmlFor="mail">Email</label>
                              <br />
                              <input
                                   type="email"
                                   required
                                   className="border border-gray-700 rounded-lg w-full px-2 py-1"
                                   placeholder="example@gmail.com"
                                   id="mail"
                              />
                         </div>
                         <div className="">
                              <div>
                                   <label htmlFor="dob">Date of Birth</label>
                                   <br />
                                   <input
                                        type="date"
                                        id="dob"
                                        required
                                        className="border w-full border-gray-700 rounded-lg px-2 py-1"
                                   />
                              </div>
                         </div>
                         <div className="flex gap-2">
                              <div>
                                   <label htmlFor="password">Password</label>
                                   <br />
                                   <input
                                        type="password"
                                        name=""
                                        id="password"
                                        required
                                        placeholder="password"
                                        className="border border-gray-700 rounded-lg px-2 py-1"
                                   />
                              </div>
                              <div>
                                   <label htmlFor="password">
                                        Confirm password
                                   </label>
                                   <br />
                                   <input
                                        type="password"
                                        name=""
                                        id="password"
                                        required
                                        placeholder="confirm password"
                                        className="border border-gray-700 rounded-lg px-2 py-1"
                                   />
                              </div>
                         </div>
                         <div>
                              <label htmlFor="gender">Gender</label>
                              <div className="flex justify-between border border-gray-700 rounded-lg px-2 py-1">
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             name="gender"
                                             id="male"
                                        />
                                        <label htmlFor="male">Male</label>
                                   </div>
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             name="gender"
                                             id="female"
                                        />
                                        <label htmlFor="female">Female</label>
                                   </div>
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             name="gender"
                                             id="custom"
                                        />
                                        <label htmlFor="custom">Custom</label>
                                   </div>
                              </div>
                         </div>
                         <div className="flex items-center gap-1">
                              <input type="checkbox" id="termsAndCondition" />
                              <label htmlFor="termsAndCondition">
                                   Terms and condition
                              </label>
                         </div>
                         <input
                              type="submit"
                              value="Signup"
                              className="border hover:bg-gray-800 cursor-pointer border-gray-700 rounded-lg px-2 py-1"
                         />
                    </form>
                    <p className="text-center mt-2">
                         Already have an account?{" "}
                         <span
                              className="cursor-pointer hover:underline text-blue-500"
                              onClick={() => setIsHaveAccount(!isHaveAccount)}
                         >
                              Login
                         </span>
                    </p>
               </div>
          </>
     );
};

export default Signup;
