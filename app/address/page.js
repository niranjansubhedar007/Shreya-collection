// "use client";
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faPlus,
//   faShieldHalved,
// } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import Navbar from "../navbar/page";
// import axios from "axios";

// const Address = () => {
//   const [address, setAddress] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedAddressId, setSelectedAddressId] = useState(null);
//   const [editAddress, setEditAddress] = useState({
//     userName: "",
//     address: "",
//     state: "",
//     mobileNo: "",
//     pincode: "",
//   });
//   const [deletePopup, setDeletePopup] = useState(false);

//   useEffect(() => {
//     const fetchAddress = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/address");
//         setAddress(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching sections:", error.message);
//       }
//     };
//     fetchAddress();
//   }, []);

//   const openPopup = () => {
//     setEditAddress({
//       userName: "",
//       address: "",
//       state: "",
//       mobileNo: "",
//       pincode: "",
//     });
//     setSelectedAddressId(null);
//     setOpen(true);
//   };

//   const closePopup = () => {
//     setOpen(false);
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedAddressId(id);
//   };

//   const handleRemove = (id) => {
//     setSelectedAddressId(id);
//     setDeletePopup(true);
//   };

//   const confirmDelete = async () => {
//     if (selectedAddressId) {
//       try {
//         await axios.delete(`http://localhost:5000/api/address/address/${selectedAddressId}`);
//         setAddress(address.filter((item) => item._id !== selectedAddressId));
//         setSelectedAddressId(null);
//         setDeletePopup(false);
//       } catch (error) {
//         console.error("Error deleting address:", error.message);
//       }
//     }
//   };

//   const cancelDelete = () => {
//     setSelectedAddressId(null);
//     setDeletePopup(false);
//   };

//   const handleEdit = (item) => {
//     setEditAddress(item);
//     setSelectedAddressId(item._id);
//     setOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditAddress((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (selectedAddressId) {
//       // Update existing address
//       try {
//         await axios.patch(`http://localhost:5000/api/address/address/${selectedAddressId}`, editAddress);
//         setAddress((prevState) =>
//           prevState.map((item) => (item._id === selectedAddressId ? editAddress : item))
//         );
//       } catch (error) {
//         console.error("Error updating address:", error.message);
//       }
//     } else {
//       // Add new address
//       try {
//         const response = await axios.post("http://localhost:5000/api/address/addAddress", editAddress);
//         setAddress((prevState) => [...prevState, response.data]);
//       } catch (error) {
//         console.error("Error adding address:", error.message);
//       }
//     }
//     setOpen(false);
//   };

//   return (
//     <>
//       <section className="min-h-screen font" style={{ backgroundColor: "#fff" }}>
//         <Navbar />
//         <div className="lg:flex-row lg:flex md:flex-row md:flex max-w-6xl mx-auto pt-5 justify-center w-full">
//           <div className="lg:w-3/4 md:w-1/2">
//             <div className="font-semibold text-xs pt-16 mb-3 bg-white lg:justify-start md:justify-start justify-center flex">
//               <div className="flex border-black">
//                 <Link href={"/addToCart"}>
//                   <p className="">BAG</p>
//                 </Link>
//                 <span>
//                   <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
//                 </span>
//               </div>
//               <div className="flex">
//                 <Link href={"/address"}>
//                   <p className="border-b-2 -mt-1 text-base text-orange-700 border-orange-700">
//                     ADDRESS
//                   </p>
//                 </Link>
//                 <span>
//                   <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
//                 </span>
//               </div>
//               <div className="flex">
//                 <Link href={"/payment"}>
//                   <p>PAYMENT</p>
//                 </Link>
//               </div>
//             </div>
//             <div className="rounded-full">
//               <div className="justify-between flex bg-pink-50 lg:p-4 md:p-3 p-1">
//                 <div className="lg:px-5 md:px-3 px-1">
//                   <p className="lg:text-xl md:text-base text-sm text-gray-500 font-semibold">
//                     Select Delivery Address
//                   </p>
//                   <p className="font-semibold text-xs mt-2">DEFAULT ADDRESS</p>
//                 </div>
//               </div>
//             </div>
//             {open && (
//               <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//                 <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                     {selectedAddressId ? "Edit Address" : "Add Address"}
//                   </h2>
//                   <input
//                     type="text"
//                     name="userName"
//                     value={editAddress.userName}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Name"
//                   />
//                   <input
//                     type="text"
//                     name="address"
//                     value={editAddress.address}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Address"
//                   />
//                   <input
//                     type="text"
//                     name="state"
//                     value={editAddress.state}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="State"
//                   />
//                   <input
//                     type="text"
//                     name="mobileNo"
//                     value={editAddress.mobileNo}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="MobileNo"
//                   />
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={editAddress.pincode}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Pincode"
//                   />
//                   <div className="flex justify-end">
//                     <button
//                       className="text-sm text-gray-600 focus:outline-none mr-2"
//                       onClick={closePopup}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="text-sm text-orange-500 font-semibold focus:outline-none"
//                       onClick={handleSubmit}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {deletePopup && (
//               <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//                 <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                     Confirm Delete
//                   </h2>
//                   <p>Are you sure you want to delete this address?</p>
//                   <div className="flex justify-end mt-4">
//                     <button
//                       className="text-sm text-gray-600 focus:outline-none mr-2"
//                       onClick={cancelDelete}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="text-sm text-red-500 font-semibold focus:outline-none"
//                       onClick={confirmDelete}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className="rounded-full">
//               <div className="flex border relative border-gray-200 lg:p-4 md:p-3 p-2">
//                 {address.map((item) => (
//                   <div key={item._id} className="flex items-center w-full">
//                     <input
//                       type="checkbox"
//                       checked={selectedAddressId === item._id}
//                       onChange={() => handleCheckboxChange(item._id)}
//                     />
//                     <div className="ml-3 w-full">
//                       <div className="lg:-mt-1">
//                         <p className="font-semibold lg:text-xl md:text-base text-base">
//                           {item.userName}
//                         </p>
//                         <p className="text-gray-900 lg:text-md md:text-sm text-xs font-sans mt-1">
//                           {item.address}
//                         </p>
//                         <p className="lg:text-base md:text-sm text-xs">
//                           {item.state}{" "}
//                           <span className="text-md">{item.pincode}</span>{" "}
//                         </p>
//                         <p className="lg:text-base md:text-sm text-xs">
//                           Mobile:{" "}
//                           <span className="font-semibold text-md">
//                             {item.mobileNo}
//                           </span>
//                         </p>
//                       </div>
//                       <div className="flex mt-4">
//                         <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm">
//                           <button onClick={() => handleRemove(item._id)}>
//                             Remove
//                           </button>
//                         </div>
//                         <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm ml-1">
//                           <button onClick={() => handleEdit(item)}>Edit</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative rounded-full lg:mt-4 md:mt-4 mt-0">
//               <button
//                 className="w-full flex border border-gray-200 lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2"
//                 onClick={openPopup}
//               >
//                 <FontAwesomeIcon icon={faPlus} className="mt-1" />
//                 <span className="lg:ml-3 md:ml-3 ml-2 lg:text-base md:text-xs text-xs">
//                   ADD NEW ADDRESS
//                 </span>
//               </button>
//             </div>
//             <div className="border border-gray-300 md:py-1 py-1 lg:py-2">
//               <div className="lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2">
//                 <div className="lg:text-base md:text-xs text-xs flex">
//                   <span>
//                     <FontAwesomeIcon icon={faShieldHalved} />
//                   </span>
//                   <p className="lg:font-semibold md:font-normal font-normal ml-2">
//                     Safe and Secure Payments. Easy returns. 100% Authentic
//                     products.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:mt-26 md:mt-24 mb-2 border border-gray-100 lg:w-96">
//             <div className="lg:pl-5 md:pl-5 pl-3">
//               <p className="py-3 font-semibold">DELIVERY ESTIMATES</p>
//               <div className="flex align-middle text-center">
//                 <img alt="ecommerce" className="object-fit" width={70} src="/kurta5.jpg" />
//                 <div className="flex mt-10 lg:text-sm md:text-sm text-xs lg:pl-4 md:pl-4 pl-4">
//                   <p className="">Estimated Delivery by </p>
//                   <p className="font-semibold pl-1">13 Apr - 15 Apr</p>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="lg:px-5 md:px-4 px-3">
//                 <p className="pt-2">
//                   Price Details <span>(2 Items)</span>
//                 </p>
//               </div>
//               <div className="lg:px-5 md:px-4 px-3 mt-3 border border-gray-100 rounded-sm">
//                 <div className="flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Total MRP</p>
//                   <span>₹ 1444</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Discount On MRP</p>
//                   <span className="text-green-400">- ₹ 604</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Coupon Discount</p>
//                   <span className="text-red-400 cursor-pointer">Apply Coupon</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Delivery Charges</p>
//                   <span className="text-green-400">Free</span>
//                 </div>
//                 <div className="flex justify-between lg:text-xl md:text-base text-base mt-2 border-t-2 border-gray-300 text-gray-600 font-semibold">
//                   <p className="lg:mt-4 md:mt-3 mt-2">Total Amount</p>
//                   <span className="lg:mt-4 md:mt-3 mt-2">₹ 850</span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-1">
//               <Link href={"/payment"}>
//                 <button className="border p-3 w-full text-sm bg-pink-500 text-white font-semibold rounded-sm">
//                   CONTINUE
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Address;



"use client";
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faPlus, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import Navbar from "../navbar/page";
// import axios from "axios";

// const Address = () => {
//   const [address, setAddress] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedAddressId, setSelectedAddressId] = useState(null);
//   const [editAddress, setEditAddress] = useState({
//     userName: "",
//     address: "",
//     state: "",
//     mobileNo: "",
//     pincode: "",
//     isDefault: false,
//   });
//   const [deletePopup, setDeletePopup] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAddress = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/address");
//         setAddress(response.data);
//       } catch (error) {
//         console.error("Error fetching addresses:", error.message);
//       }
//     };
//     fetchAddress();
//   }, []);

//   const openPopup = () => {
//     setEditAddress({
//       userName: "",
//       address: "",
//       state: "",
//       mobileNo: "",
//       pincode: "",
//       isDefault: false,
//     });
//     setSelectedAddressId(null);
//     setOpen(true);
//   };

//   const closePopup = () => {
//     setOpen(false);
//     setError("");
//   };

//   const handleCheckboxChange = (id) => {
//     setSelectedAddressId(id);
//   };

//   const handleRemove = (id) => {
//     setSelectedAddressId(id);
//     setDeletePopup(true);
//   };

//   const confirmDelete = async () => {
//     if (selectedAddressId) {
//       try {
//         await axios.delete(`http://localhost:5000/api/address/address/${selectedAddressId}`);
//         setAddress(address.filter((item) => item._id !== selectedAddressId));
//         setSelectedAddressId(null);
//         setDeletePopup(false);
//       } catch (error) {
//         console.error("Error deleting address:", error.message);
//       }
//     }
//   };

//   const cancelDelete = () => {
//     setSelectedAddressId(null);
//     setDeletePopup(false);
//   };

//   const handleEdit = (item) => {
//     setEditAddress(item);
//     setSelectedAddressId(item._id);
//     setOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEditAddress((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       if (editAddress.isDefault) {
//         await axios.patch("http://localhost:5000/api/address/unsetDefault");
//       }

//       if (selectedAddressId) {
//         await axios.patch(`http://localhost:5000/api/address/address/${selectedAddressId}`, editAddress);
//         setAddress((prevState) =>
//           prevState.map((item) => (item._id === selectedAddressId ? { ...item, ...editAddress } : item))
//         );
//       } else {
//         const response = await axios.post("http://localhost:5000/api/address/addAddress", editAddress);
//         setAddress((prevState) => [...prevState, response.data]);
//       }

//       setOpen(false);
//       setError("");
//     } catch (error) {
//       console.error("Error submitting address:", error.message);
//       setError(error.response ? error.response.data.message : "Error submitting address");
//     }
//   };

//   return (
//     <>
//       <section className="min-h-screen font" style={{ backgroundColor: "#fff" }}>
//         <Navbar />
//         <div className="lg:flex-row lg:flex md:flex-row md:flex max-w-6xl mx-auto pt-5 justify-center w-full">
//           <div className="lg:w-3/4 md:w-1/2">
//             <div className="font-semibold text-xs pt-16 mb-3 bg-white lg:justify-start md:justify-start justify-center flex">
//               <div className="flex border-black">
//                 <Link href={"/addToCart"}>
//                   <p className="">BAG</p>
//                 </Link>
//                 <span>
//                   <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
//                 </span>
//               </div>
//               <div className="flex">
//                 <Link href={"/address"}>
//                   <p className="border-b-2 -mt-1 text-base text-orange-700 border-orange-700">
//                     ADDRESS
//                   </p>
//                 </Link>
//                 <span>
//                   <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
//                 </span>
//               </div>
//               <div className="flex">
//                 <Link href={"/payment"}>
//                   <p>PAYMENT</p>
//                 </Link>
//               </div>
//             </div>
//             <div className="rounded-full">
//               <div className="justify-between flex bg-pink-50 lg:p-4 md:p-3 p-1">
//                 <div className="lg:px-5 md:px-3 px-1">
//                   <p className="lg:text-xl md:text-base text-sm text-gray-500 font-semibold">
//                     Select Delivery Address
//                   </p>
//                   <p className="font-semibold text-xs mt-2">DEFAULT ADDRESS</p>
//                 </div>
//               </div>
//             </div>
//             {open && (
//               <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//                 <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                     {selectedAddressId ? "Edit Address" : "Add Address"}
//                   </h2>
//                   <input
//                     type="text"
//                     name="userName"
//                     value={editAddress.userName}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Name"
//                   />
//                   <input
//                     type="text"
//                     name="address"
//                     value={editAddress.address}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Address"
//                   />
//                   <input
//                     type="text"
//                     name="state"
//                     value={editAddress.state}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="State"
//                   />
//                   <input
//                     type="text"
//                     name="mobileNo"
//                     value={editAddress.mobileNo}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="MobileNo"
//                   />
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={editAddress.pincode}
//                     onChange={handleInputChange}
//                     className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                     placeholder="Pincode"
//                   />
//                   <div className="flex items-center mb-4">
//                     <input
//                       type="checkbox"
//                       name="isDefault"
//                       checked={editAddress.isDefault}
//                       onChange={handleInputChange}
//                       className="mr-2"
//                     />
//                     <label htmlFor="isDefault">Set as Default Address</label>
//                   </div>
//                   {error && <p className="text-red-500 text-sm">{error}</p>}
//                   <div className="flex justify-end">
//                     <button
//                       className="text-sm text-gray-600 focus:outline-none mr-2"
//                       onClick={closePopup}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="text-sm text-orange-500 font-semibold focus:outline-none"
//                       onClick={handleSubmit}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {deletePopup && (
//               <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//                 <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                     Confirm Delete
//                   </h2>
//                   <p>Are you sure you want to delete this address?</p>
//                   <div className="flex justify-end mt-4">
//                     <button
//                       className="text-sm text-gray-600 focus:outline-none mr-2"
//                       onClick={cancelDelete}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="text-sm text-red-500 font-semibold focus:outline-none"
//                       onClick={confirmDelete}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className=" overflow-y-hidden w-full">
//               <div className="flex border relative  gap-14 border-gray-200 lg:p-4 md:p-3 p-2">
//                 {address.map((item) => (
//                   <div key={item._id} className="flex items-center w-full">
//                     <input
//                       type="checkbox"
//                       checked={selectedAddressId === item._id}
//                       onChange={() => handleCheckboxChange(item._id)}
//                     />
//                     <div className="ml-3 w-full">
//                       <div className="lg:-mt-1">
//                         <p className="font-semibold lg:text-xl md:text-base text-base">
//                           {item.userName}
//                         </p>
//                         <p className="text-gray-900 lg:text-md md:text-sm text-xs font-sans mt-1">
//                           {item.address}
//                         </p>
//                         <p className="lg:text-base md:text-sm text-xs">
//                           {item.state}{" "}
//                           <span className="text-md">{item.pincode}</span>{" "}
//                         </p>
//                         <p className="lg:text-base md:text-sm text-xs">
//                           Mobile:{" "}
//                           <span className="font-semibold text-md">
//                             {item.mobileNo}
//                           </span>
//                         </p>
//                         {item.isDefault && (
//                           <p className="text-green-600 text-xs mt-1">Default</p>
//                         )}
//                       </div>
//                       <div className="flex mt-4">
//                         <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm">
//                           <button onClick={() => handleRemove(item._id)}>
//                             Remove
//                           </button>
//                         </div>
//                         <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm ml-1">
//                           <button onClick={() => handleEdit(item)}>Edit</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative rounded-full lg:mt-4 md:mt-4 mt-0">
//               <button
//                 className="w-full flex border border-gray-200 lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2"
//                 onClick={openPopup}
//               >
//                 <FontAwesomeIcon icon={faPlus} className="mt-1" />
//                 <span className="lg:ml-3 md:ml-3 ml-2 lg:text-base md:text-xs text-xs">
//                   ADD NEW ADDRESS
//                 </span>
//               </button>
//             </div>
//             <div className="border border-gray-300 md:py-1 py-1 lg:py-2">
//               <div className="lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2">
//                 <div className="lg:text-base md:text-xs text-xs flex">
//                   <span>
//                     <FontAwesomeIcon icon={faShieldHalved} />
//                   </span>
//                   <p className="lg:font-semibold md:font-normal font-normal ml-2">
//                     Safe and Secure Payments. Easy returns. 100% Authentic
//                     products.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:mt-26 md:mt-24 mb-2 border border-gray-100 lg:w-96">
//             <div className="lg:pl-5 md:pl-5 pl-3">
//               <p className="py-3 font-semibold">DELIVERY ESTIMATES</p>
//               <div className="flex align-middle text-center">
//                 <img alt="ecommerce" className="object-fit" width={70} src="/kurta5.jpg" />
//                 <div className="flex mt-10 lg:text-sm md:text-sm text-xs lg:pl-4 md:pl-4 pl-4">
//                   <p className="">Estimated Delivery by </p>
//                   <p className="font-semibold pl-1">13 Apr - 15 Apr</p>
//                 </div>
//               </div>
//             </div>
//             <div className="">
//               <div className="lg:px-5 md:px-4 px-3">
//                 <p className="pt-2">
//                   Price Details <span>(2 Items)</span>
//                 </p>
//               </div>
//               <div className="lg:px-5 md:px-4 px-3 mt-3 border border-gray-100 rounded-sm">
//                 <div className="flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Total MRP</p>
//                   <span>₹ 1444</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Discount On MRP</p>
//                   <span className="text-green-400">- ₹ 604</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Coupon Discount</p>
//                   <span className="text-red-400 cursor-pointer">Apply Coupon</span>
//                 </div>
//                 <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
//                   <p>Delivery Charges</p>
//                   <span className="text-green-400">Free</span>
//                 </div>
//                 <div className="flex justify-between lg:text-xl md:text-base text-base mt-2 border-t-2 border-gray-300 text-gray-600 font-semibold">
//                   <p className="lg:mt-4 md:mt-3 mt-2">Total Amount</p>
//                   <span className="lg:mt-4 md:mt-3 mt-2">₹ 850</span>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-1">
//               <Link href={"/payment"}>
//                 <button className="border p-3 w-full text-sm bg-pink-500 text-white font-semibold rounded-sm">
//                   CONTINUE
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Address;



import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlus, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "../navbar/page";
import axios from "axios";

const Address = () => {
  const [address, setAddress] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [editAddress, setEditAddress] = useState({
    userName: "",
    address: "",
    state: "",
    mobileNo: "",
    pincode: "",
    isDefault: false,
  });
  const [deletePopup, setDeletePopup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/address");
        setAddress(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };
    fetchAddress();
  }, []);

  const openPopup = () => {
    setEditAddress({
      userName: "",
      address: "",
      state: "",
      mobileNo: "",
      pincode: "",
      isDefault: false,
    });
    setSelectedAddressId(null);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setError("");
  };

  const handleCheckboxChange = (id) => {
    setSelectedAddressId(id);
  };

  const handleRemove = (id) => {
    setSelectedAddressId(id);
    setDeletePopup(true);
  };

  const confirmDelete = async () => {
    if (selectedAddressId) {
      try {
        await axios.delete(`http://localhost:5000/api/address/address/${selectedAddressId}`);
        setAddress(address.filter((item) => item._id !== selectedAddressId));
        setSelectedAddressId(null);
        setDeletePopup(false);
      } catch (error) {
        console.error("Error deleting address:", error.message);
      }
    }
  };

  const cancelDelete = () => {
    setSelectedAddressId(null);
    setDeletePopup(false);
  };

  const handleEdit = (item) => {
    setEditAddress(item);
    setSelectedAddressId(item._id);
    setOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditAddress((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (editAddress.isDefault) {
        // Optimistically update the UI
        setAddress((prevState) =>
          prevState.map((item) => ({
            ...item,
            isDefault: item._id === selectedAddressId,
          }))
        );

        await axios.patch("http://localhost:5000/api/address/unsetDefault");
      }

      if (selectedAddressId) {
        await axios.patch(`http://localhost:5000/api/address/address/${selectedAddressId}`, editAddress);
        setAddress((prevState) =>
          prevState.map((item) => (item._id === selectedAddressId ? { ...item, ...editAddress } : item))
        );
      } else {
        const response = await axios.post("http://localhost:5000/api/address/addAddress", editAddress);
        setAddress((prevState) => [...prevState, response.data]);
      }

      setOpen(false);
      setError("");
    } catch (error) {
      console.error("Error submitting address:", error.message);
      setError(error.response ? error.response.data.message : "Error submitting address");
    }
  };

  return (
    <>
      <section className="min-h-screen font" style={{ backgroundColor: "#fff" }}>
        <Navbar />
        <div className="lg:flex-row lg:flex md:flex-row md:flex max-w-6xl mx-auto pt-5 justify-center w-full">
          <div className="lg:w-3/4 md:w-1/2">
            <div className="font-semibold text-xs pt-16 mb-3 bg-white lg:justify-start md:justify-start justify-center flex">
              <div className="flex border-black">
                <Link href={"/addToCart"}>
                  <p className="">BAG</p>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>
              <div className="flex">
                <Link href={"/address"}>
                  <p className="border-b-2 -mt-1 text-base text-orange-700 border-orange-700">
                    ADDRESS
                  </p>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-7" />
                </span>
              </div>
              <div className="flex">
                
                  <p>PAYMENT</p>
               
              </div>
            </div>
            <div className="">
              <div className="justify-between flex bg-pink-50 lg:p-4 md:p-3 p-1">
                <div className="lg:px-5 md:px-3 px-1">
                  <p className="lg:text-xl md:text-base text-sm text-gray-500 font-semibold">
                    Select Delivery Address
                  </p>
                
                </div>
              </div>
            </div>
            {open && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {selectedAddressId ? "Edit Address" : "Add Address"}
                  </h2>
                  <input
                    type="text"
                    name="userName"
                    value={editAddress.userName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="address"
                    value={editAddress.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    name="state"
                    value={editAddress.state}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    name="mobileNo"
                    value={editAddress.mobileNo}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    placeholder="MobileNo"
                  />
                  <input
                    type="text"
                    name="pincode"
                    value={editAddress.pincode}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                    placeholder="Pincode"
                  />
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      name="isDefault"
                      checked={editAddress.isDefault}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="isDefault">Set as Default Address</label>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <div className="flex justify-end">
                    <button
                      className="text-sm text-gray-600 focus:outline-none mr-2"
                      onClick={closePopup}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-sm text-orange-500 font-semibold focus:outline-none"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
            {deletePopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Confirm Delete
                  </h2>
                  <p>Are you sure you want to delete this address?</p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="text-sm text-gray-600 focus:outline-none mr-2"
                      onClick={cancelDelete}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-sm text-red-500 font-semibold focus:outline-none"
                      onClick={confirmDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className=" overflow-y-hidden">
              <div className="flex border relative gap-14 lg:p-4 md:p-3 p-2">
                {address.map((item) => (
                  <div key={item._id} className="flex items-center w-full">
                    <input
                      type="checkbox"
                      checked={selectedAddressId === item._id}
                      onChange={() => handleCheckboxChange(item._id)}
                    />
                    <div className="ml-3 w-full">
                      <div className="lg:-mt-1">
                        <p className="font-semibold lg:text-xl md:text-base text-base">
                          {item.userName}
                        </p>
                        <p className="text-gray-900 lg:text-md md:text-sm text-xs font-sans mt-1">
                          {item.address}
                        </p>
                        <p className="lg:text-base md:text-sm text-xs">
                          {item.state}{" "}
                          <span className="text-md">{item.pincode}</span>{" "}
                        </p>
                        <p className="lg:text-base md:text-sm text-xs">
                          Mobile:{" "}
                          <span className="font-semibold text-md">
                            {item.mobileNo}
                          </span>
                        </p>
                        {item.isDefault && (
                          <p className="text-green-600 text-xs mt-1">Default</p>
                        )}
                      </div>
                      <div className="flex mt-4">
                        <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm">
                          <button onClick={() => handleRemove(item._id)}>
                            Remove
                          </button>
                        </div>
                        <div className="border text-sm border-pink-500 text-pink-500 px-4 py-2 font-semibold rounded-sm ml-1">
                          <button onClick={() => handleEdit(item)}>Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-full lg:mt-4 md:mt-4 mt-0">
              <button
                className="w-full flex border border-gray-200 lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2"
                onClick={openPopup}
              >
                <FontAwesomeIcon icon={faPlus} className="mt-1" />
                <span className="lg:ml-3 md:ml-3 ml-2 lg:text-base md:text-xs text-xs">
                  ADD NEW ADDRESS
                </span>
              </button>
            </div>
            <div className="border border-gray-300 md:py-1 py-1 lg:py-2">
              <div className="lg:px-9 md:px-5 px-3 lg:p-4 md:p-3 p-2">
                <div className="lg:text-base md:text-xs text-xs flex">
                  <span>
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </span>
                  <p className="lg:font-semibold md:font-normal font-normal ml-2">
                    Safe and Secure Payments. Easy returns. 100% Authentic
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-26 md:mt-24 mb-2 border border-gray-100 lg:w-96">
            <div className="lg:pl-5 md:pl-5 pl-3">
              <p className="py-3 font-semibold">DELIVERY ESTIMATES</p>
              <div className="flex align-middle text-center">
                <img alt="ecommerce" className="object-fit" width={70} src="/kurta5.jpg" />
                <div className="flex mt-10 lg:text-sm md:text-sm text-xs lg:pl-4 md:pl-4 pl-4">
                  <p className="">Estimated Delivery by </p>
                  <p className="font-semibold pl-1">13 Apr - 15 Apr</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="lg:px-5 md:px-4 px-3">
                <p className="pt-2">
                  Price Details <span>(2 Items)</span>
                </p>
              </div>
              <div className="lg:px-5 md:px-4 px-3 mt-3 border border-gray-100 rounded-sm">
                <div className="flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Total MRP</p>
                  <span>₹ 1444</span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Discount On MRP</p>
                  <span className="text-green-400">- ₹ 604</span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Coupon Discount</p>
                  <span className="text-red-400 cursor-pointer">Apply Coupon</span>
                </div>
                <div className="mt-1 flex justify-between lg:text-base md:text-xs text-xs text-gray-600 font-normal">
                  <p>Delivery Charges</p>
                  <span className="text-green-400">Free</span>
                </div>
                <div className="flex justify-between lg:text-xl md:text-base text-base mt-2 border-t-2 border-gray-300 text-gray-600 font-semibold">
                  <p className="lg:mt-4 md:mt-3 mt-2">Total Amount</p>
                  <span className="lg:mt-4 md:mt-3 mt-2">₹ 850</span>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <Link href={"/payment"}>
                <button className="border p-3 w-full text-sm bg-pink-500 text-white font-semibold rounded-sm">
                  CONTINUE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;


