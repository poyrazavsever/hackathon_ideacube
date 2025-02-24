import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const IdeaCard = ({ title, description, needs }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md hover:shadow-2xl transition-all cursor-pointer">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <h4 className="font-medium mb-2">İhtiyaçlar:</h4>
      <ul>
        {needs.map((need, index) => (
          <li key={index} className="flex items-center gap-2 text-green-600">
            <FaCheckSquare /> {need}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default IdeaCard