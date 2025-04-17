"use client";

import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import { Portfolio } from './types';

interface PortfolioCardProps {
  portfolio: Portfolio;
  onEdit: (portfolio: Portfolio) => void;
  onDelete: (id: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, onEdit, onDelete }) => {
  const placeholderImage = "/placeholder-avatar.png"; // Consider adding a placeholder image to your /public folder

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          // Use placeholder if imageUrl is not provided or if there's an error loading
          src={portfolio.imageUrl || placeholderImage}
          alt={`${portfolio.name}'s profile picture`}
          layout="fill" // Fill the container
          objectFit="cover" // Cover the area, cropping if necessary
          onError={(e) => (e.currentTarget.src = placeholderImage)} // Fallback on error
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{portfolio.name}</h3>
        <p className="text-md text-primary-600 font-medium mb-2">{portfolio.title}</p>
        <p className="text-sm text-gray-600 flex-grow mb-4">{portfolio.description}</p>
        <div className="flex justify-end space-x-2 mt-auto pt-2 border-t border-gray-100">
           <button
            onClick={() => onEdit(portfolio)}
            className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(portfolio.id)}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;