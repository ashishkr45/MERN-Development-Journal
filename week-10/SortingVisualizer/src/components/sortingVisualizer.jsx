import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Generate random array
  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  // Bubble Sort Algorithm with visualization
  const bubbleSort = async () => {
    let arr = [...array];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    }
  };

  return (
    <div className="p-5 flex  justify-center flex-col items-center bg-[#1f1f1f] h-screen w-screen">
      <div className="flex space-x-2">
        {array.map((value, idx) => (
          <motion.div
            key={idx}
            className="w-6 bg-slate-500 rounded"
            style={{ height: `${value * 3}px` }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        ))}
      </div>
      <div className="mt-5 space-x-2">
        <button onClick={generateArray} className="px-4 py-2 bg-green-500 text-red-50 rounded">Generate Array</button>
        <button onClick={bubbleSort} className="px-4 py-2 bg-blue-500 text-red-50 rounded">Bubble Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
