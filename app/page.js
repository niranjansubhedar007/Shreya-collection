
import Navbar from "./home/page";
import Login from "./login/page";

export default function Home() {
  return (
<>
// <Navbar/>
<Login/>

</>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const Login = () => {
//   const [mobileNo, setMobileNo] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [message, setMessage] = useState("");
//   const [boxesEnabled, setBoxesEnabled] = useState(false);
//   const [timer, setTimer] = useState(20);
//   const [counting, setCounting] = useState(false);
//   const [showResendButton, setShowResendButton] = useState(false);
//   const [disableRequestButton, setDisableRequestButton] = useState(false);
//   const [showModal, setShowModal] = useState(true);

//   const onClose = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     let intervalId;
//     if (counting) {
//       intervalId = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer <= 1) {
//             clearInterval(intervalId);
//             setBoxesEnabled(false);
//             setCounting(false);
//             setShowResendButton(true);
//             setDisableRequestButton(false);
//             return 0;
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(intervalId);
//   }, [counting]);

//   const handleLogin = async () => {
//     try {
//       // Request OTP from backend
//       const response = await axios.post(
//         "http://localhost:5000/api/user/auth/register",
//         { mobileNo }
//       );
//       const fetchedOtp = response.data.otp.split(""); // Split plaintext OTP received from backend
//       setOtp(fetchedOtp);

//       setMessage(response.data.message);
//       setBoxesEnabled(true);
//       setCounting(true);
//       setDisableRequestButton(true);
//       setShowResendButton(false);
//       setMobileNo("");
//     } catch (error) {
//       const errorMessage =
//         error.response && error.response.data && error.response.data.message
//           ? error.response.data.message
//           : "Failed to send OTP";
//       setMessage(errorMessage);
//       console.error("Error:", error.response ? error.response.data : error);
//     }
//   };

//   const handleResendOTP = async () => {
//     setCounting(true);
//     setTimer(10);
//     setShowResendButton(false);
//     setDisableRequestButton(true);
//     handleLogin(); // Reuse handleLogin to request a new OTP and start the timer
//   };

//   const handleOtpChange = (index, value) => {
//     if (value.match(/^[0-9]$/)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/auth/login/otp-verify",
//         {
//           otp: otp.join(""),
//         }
//       );

//       const result = response.data;
//       setMessage(result.message);
//       console.log(response.data);

//       // Handle further actions like storing tokens, redirecting user, etc.
//     } catch (error) {
//       const errorMessage =
//         error.response && error.response.data && error.response.data.message
//           ? error.response.data.message
//           : "OTP verification failed";
//       setMessage(errorMessage);
//       console.error("Error:", error.response ? error.response.data : error);
//     }
//   };

//   useEffect(() => {
//     localStorage.removeItem("EmployeeAuthToken");
//   }, []);

//   return (
//     <>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 font">
//           <div className="bg-white lg:p-8 md:p-8 p-4 rounded-lg max-w-96 mx-auto relative">
//             {boxesEnabled ? (
//               <>
//                 <div className="flex justify-center mb-7">
//                   {[0, 1, 2, 3].map((index) => (
//                     <input
//                       key={index}
//                       className="w-12 h-12 text-3xl text-center bg-gray-200 text-gray-900 mx-1 rounded"
//                       type="text"
//                       maxLength="1"
//                       value={otp[index]}
//                       onChange={(e) => handleOtpChange(index, e.target.value)}
//                     />
//                   ))}
//                 </div>
//                 <div className="text-center mb-6">
//                   <p className="text-lg text-gray-700 mb-2">
//                     Enter OTP{" "}
//                     <span className="font-semibold text-red-500">{timer}</span>
//                   </p>
//                   <button
//                     className="bg-blue-100 w-full text-blue-600 hover:bg-blue-200 text-gray font-semibold py-2 px-6 
//                     rounded-md"
//                     onClick={handleResendOTP}
//                     disabled={disableRequestButton}
//                   >
//                     Resend OTP
//                   </button>
//                   <button
//                     className="bg-blue-100 w-full text-blue-600 hover:bg-blue-200 text-gray font-semibold py-2 px-6 mt-4
//                     rounded-md"
//                     onClick={handleVerifyOTP}
//                     disabled={otp.includes("")}
//                   >
//                     Verify OTP
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <p className="text-3xl text-gray-900 text-center font-bold mb-6">
//                   Login
//                 </p>
//                 <div className="relative mb-4">
//                   <input
//                     className="bg-slate-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
//                     id="grid-password"
//                     type="text"
//                     placeholder="Enter Mobile Number"
//                     value={mobileNo}
//                     maxLength={10}
//                     required
//                     autoComplete="off"
//                     onChange={(e) => setMobileNo(e.target.value)}
//                   />
//                 </div>

//                 <div className="text-center">
//                   <button
//                     className="bg-blue-100 w-full text-blue-600 hover:bg-blue-200 text-gray font-semibold py-2 px-6
//                     rounded-md"
//                     onClick={handleLogin}
//                     disabled={counting}
//                   >
//                     Send OTP
//                   </button>
//                 </div>
//               </>
//             )}
            
//             <div className="text-center text-black-500 text-sm mb-4 mt-4">
//               <p>
//                 By continuing, you agree to Shreya's collection{" "}
//                 <Link
//                   href={"/termsOfUse"}
//                   className="text-red-400 font-semibold"
//                 >
//                   Terms of Use
//                 </Link>{" "}
//                 and{" "}
//                 <Link
//                   href={"/privacyPolicy"}
//                   className="text-red-400 font-semibold"
//                 >
//                   Privacy Policy
//                 </Link>
//               </p>
//             </div>
//             <button
//               className="absolute top-2  bg-blue-100 text-blue-600 hover:bg-blue-200 text-gray 
//               font-semibold px-2 py-0.5 
//               rounded-full right-2"
//               onClick={onClose}
//             >
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;









//   async register(req, res, next) {
//     try {
//       // Validate mobile number
//       const { mobileNo } = req.body;
//       const { error } = Joi.string().regex(/^\d{10}$/).validate(mobileNo);
//       if (error) {
//         throw CustomErrorHandler.validationError(error.details[0].message);
//       }

//       // Check if user already exists
//       const userExists = await User.findOne({ mobileNo });
//       if (userExists) {
//         throw CustomErrorHandler.userAlreadyExist("Mobile No Already Registered");
//       }

//       // Check if OTP already exists and time difference
//       const otpExist = await Otp.findOne({ mobileNo }).sort({ createdAt: -1 });
//       if (otpExist) {
//         const differenceTimeOfLastOTPGeneration = new Date() - otpExist.createdAt;
//         if (differenceTimeOfLastOTPGeneration / 1000 < 30) {
//           throw CustomErrorHandler.invalidOTPGenerationRequest("Please wait for 2 minutes to Resend the OTP");
//         }
//       }

//       // Generate OTP and hash it
//       const plainTextOTP = generateOTP(); // Generate plaintext OTP
//       const hashedOTP = await bcrypt.hash(plainTextOTP.toString(), 10); // Hash the OTP

//       // Store plaintext OTP in memory (for demonstration purposes)
//       const otpData = {
//         mobileNo,
//         otp: hashedOTP, // Store hashed OTP in the database
//         plainTextOTP, // Store plaintext OTP for response
//         purpose: "register",
//         isUsed: false,
//       };

//       // Store OTP in the database
//       await Otp.create(otpData);
// console.log(otpData);
//       // Generate JWT token and send it in response
//       const token = JwtService.sign({ mobileNo }, "5m", JWT_OTP_SECRET);
//       res.cookie("OTP_DATA", token, {
//         httpOnly: true,
//         maxAge: 5 * 60 * 1000,
//       });

//       // Send plaintext OTP to frontend
//       res.status(200).json({
//         success: true,
//         message: "OTP has sent successfully on your mobile",
//         otp: plainTextOTP, // Send plaintext OTP to frontend
//       });

//     } catch (error) {
//       next(error);
//     }
//   },




// const mongoose = require('mongoose');

// const otpSchema = new mongoose.Schema({
//   mobileNo: { type: String, required: true },
//   otp: { type: String, required: true },
//   purpose: { type: String, required: true },
//   isUsed: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
//       userId: { 
//         type: String, 
//         ref: 'User', 
//         default: null
//     }, 
// });

// const Otp = mongoose.model('Otp', otpSchema);

// module.exports = Otp;
