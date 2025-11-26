import { useEffect, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
const Signup = ({ isHaveAccount, setIsHaveAccount }) => {
     const dateTime = new Date();
     const [name, setName] = useState("");
     const [username, setUsername] = useState("");
     const [formEmail, setFormEmail] = useState("");
     const [date, setDate] = useState("");
     const [signPassword, setSignPassword] = useState("");
     const [gender, setGender] = useState("");
     const [termsCheck, setTermsCheck] = useState(false);
     const [location, setLocation] = useState({});
     const [showPass, setShowPass] = useState(false);
     const [profilePicture, setProfilePicture] = useState(null);

     const fileUpload = async () => {
          if (!profilePicture) return alert("Please select a profile picture.");
          const formData = new FormData();
          formData.append("file", profilePicture);
          formData.append("upload_preset", "paintshowcase");
          const url = `https://api.cloudinary.com/v1_1/dua5xqaek/image/upload`;
          const response = await fetch(url, {
               method: "POST",
               body: formData,
          });
          const data = await response.json();
          return data.secure_url;
     };

     useEffect(() => {
          navigator.geolocation.getCurrentPosition(async (position) => {
               let latitute = position.coords.latitude;
               let longtitute = position.coords.longitude;
               const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitute}&longitude=${longtitute}`;
               const response = await fetch(url);
               const data = await response.json();
               setLocation(data);
          });
     }, []);

     const termUsername = (e) => {
          let username = e.target.value;
          const validUsername = /^[a-z0-9_.-]*$/;
          if (validUsername.test(username)) {
               setUsername(username);
          } else {
               const filteredUsername = username.replace(/[^a-z0-9_.-]/g, "");
               setUsername(filteredUsername);
          }
     };

     const handlePostSubmit = async (e) => {
          e.preventDefault();
          const imageUrl = await fileUpload();
          const postData = {
               name,
               username: `${username}`,
               email: formEmail,
               avatar: imageUrl,
               followers: 0,
               following: 0,
               cart: 0,
               notifications: 0,
               dateOfBirth: date,
               bio: "hello friends",
               datetime: dateTime.toLocaleTimeString(),
               location: `${location.locality}, ${location.city}, ${location.countryName}`,
               createdAt: `${dateTime.toDateString()}`,
               is_verified: false,
               password: signPassword,
               gender,
          };
          await fetch(
               `https://691cb4a03aaeed735c91d7ac.mockapi.io/paintshowcase/user`,
               {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                         "content-type": "application/json",
                    },
               }
          );
          setName("");
          setUsername("");
          setFormEmail("");
          setDate("");
          setSignPassword("");
          setProfilePicture(null);
          setGender("");
          setTermsCheck(false);
     };
     return (
          <>
               <div className="border border-gray-700 w-xl p-3 rounded-xl">
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
                    <form
                         className="grid grid-cols-2 gap-3 mt-2"
                         onSubmit={(e) => {
                              handlePostSubmit(e);
                         }}
                    >
                         <div className="col-span-2 md:col-span-1">
                              <label htmlFor="name">Name</label>
                              <br />
                              <input
                                   type="text"
                                   id="name"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   placeholder="name"
                                   required
                                   className="border w-full border-gray-700 rounded-lg px-2 py-1"
                              />
                         </div>
                         <div className="col-span-2 md:col-span-1">
                              <label htmlFor="username">Username</label>
                              <br />
                              <input
                                   type="text"
                                   placeholder="username"
                                   id="username"
                                   value={username}
                                   onChange={(e) => termUsername(e)}
                                   required
                                   className="border w-full border-gray-700 rounded-lg px-2 py-1"
                              />
                         </div>
                         <div className="col-span-2 md:col-span-1">
                              <label htmlFor="mail">Email</label>
                              <br />
                              <input
                                   type="email"
                                   required
                                   value={formEmail}
                                   onChange={(e) =>
                                        setFormEmail(e.target.value)
                                   }
                                   className="border border-gray-700 rounded-lg w-full px-2 py-1"
                                   placeholder="example@gmail.com"
                                   id="mail"
                              />
                         </div>
                         <div className="col-span-2 md:col-span-1">
                              <label htmlFor="dob">Date of Birth</label>
                              <br />
                              <input
                                   type="date"
                                   id="dob"
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                                   required
                                   className="border w-full border-gray-700 rounded-lg px-2 py-1"
                              />
                         </div>

                         <div className="col-span-2 md:col-span-1">
                              <div className="flex items-center gap-1">
                                   <label
                                        htmlFor="signPassword"
                                        className="flex items-center"
                                   >
                                        <span>Password</span>
                                   </label>
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
                                   name=""
                                   id="signPassword"
                                   required
                                   minLength={8}
                                   maxLength={255}
                                   value={signPassword}
                                   onChange={(e) =>
                                        setSignPassword(e.target.value)
                                   }
                                   placeholder="password"
                                   className="border w-full border-gray-700 rounded-lg px-2 py-1"
                              />
                         </div>

                         <div className="col-span-2 md:col-span-1">
                              <label htmlFor="gender">Gender</label>
                              <div className="flex justify-between border border-gray-700 rounded-lg px-2 py-1">
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             name="gender"
                                             required
                                             value="Male"
                                             checked={gender === "Male"}
                                             onChange={(e) =>
                                                  setGender(e.target.value)
                                             }
                                             id="male"
                                        />
                                        <label htmlFor="male">Male</label>
                                   </div>
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             name="gender"
                                             required
                                             value="Female"
                                             checked={gender === "Female"}
                                             onChange={(e) =>
                                                  setGender(e.target.value)
                                             }
                                             id="female"
                                        />
                                        <label htmlFor="female">Female</label>
                                   </div>
                                   <div className="flex gap-1 items-center accent-green-400">
                                        <input
                                             type="radio"
                                             required
                                             name="gender"
                                             value="Custom"
                                             checked={gender === "Custom"}
                                             onChange={(e) =>
                                                  setGender(e.target.value)
                                             }
                                             id="custom"
                                        />
                                        <label htmlFor="custom">Custom</label>
                                   </div>
                              </div>
                         </div>

                         <div className="col-span-2">
                              <label
                                   htmlFor="profilePicture"
                                   className="flex flex-col border border-dashed text-2xl rounded-xl items-center justify-center py-10 text-gray-500"
                              >
                                   Upload Photo
                                   <input
                                        type="file"
                                        id="profilePicture"
                                        onChange={(e) =>
                                             setProfilePicture(
                                                  e.target.files[0]
                                             )
                                        }
                                        accept="image/*"
                                        required
                                        placeholder="Upload photo"
                                        className="hidden"
                                   />
                              </label>
                         </div>

                         <div className="flex items-center col-span-2 gap-1">
                              <input
                                   type="checkbox"
                                   checked={termsCheck}
                                   required
                                   onChange={() => setTermsCheck(!termsCheck)}
                                   id="termsAndCondition"
                              />
                              <label htmlFor="termsAndCondition">
                                   Terms and condition
                              </label>
                         </div>
                         <input
                              type="submit"
                              value="Signup"
                              className="border col-span-2 hover:bg-gray-800 cursor-pointer border-gray-700 rounded-lg px-2 py-1"
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
