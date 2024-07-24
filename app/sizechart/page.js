"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faStar,
  faTimes,
  faSearch,

} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const SizeChart = () => {
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
    const sizeChart = [
        { size: "XS", length: "28", chest: "36", waist: "32"},
        { size: "S", length: "28", chest: "38", waist: "34"},
        { size: "M", length: "29", chest: "40", waist: "36"},
        { size: "L", length: "29", chest: "42", waist: "38"},
        { size: "XL", length: "30", chest: "44", waist: "40"},
        { size: "XXL", length: "30", chest: "46", waist: "42"},
      ];
  return (

    <>
    <div className="mt-2 ">
    <span className="text-gray-400">|</span>{" "}
    <span
      className="text-xs text-gray-400 cursor-pointer"
      onClick={() => setIsSizeChartOpen(true)}
    >
      View Size Chart
    </span>
  </div>

{isSizeChartOpen && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 font">
    <div className="bg-white rounded-lg p-6 relative ">
      <h2 className="text-gray-900 text-xl font-semibold mb-4">
        Size Chart
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100">Size</th>
            <th className="px-4 py-2 bg-gray-100">Length (in)</th>
            <th className="px-4 py-2 bg-gray-100">Chest (in)</th>
            <th className="px-4 py-2 bg-gray-100">Waist (in)</th>
          </tr>
        </thead>
        <tbody>
          {sizeChart.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{row.size}</td>
              <td className="border px-4 py-2">{row.length}</td>
              <td className="border px-4 py-2">{row.chest}</td>
              <td className="border px-4 py-2">{row.waist}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => setIsSizeChartOpen(false)}
        className=" cursor-pointer absolute top-2 right-3 w-4 p-2 h-4 bg-orange-200 text-orange-600 rounded-full"
      />
    </div>
  </div>
)}
</>
)
}
export default SizeChart
