"use client";

import React, { useState, useEffect } from 'react';
import { Portfolio } from './types';

interface PortfolioFormProps {
  onSubmit: (portfolioData: Omit<Portfolio, 'id'> | Portfolio) => void;
  onCancel: () => void;
  initialData?: Portfolio | null; // Pass existing data for editing
}

const PortfolioForm: React.FC<PortfolioFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Populate form if initialData is provided (editing mode)
    if (initialData) {
      setName(initialData.name);
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImageUrl(initialData.imageUrl || '');
    } else {
      // Reset form if switching to add mode or initialData becomes null
      setName('');
      setTitle('');
      setDescription('');
      setImageUrl('');
    }
  }, [initialData]); // Re-run effect if initialData changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const portfolioData = {
        name,
        title,
        description,
        imageUrl: imageUrl || undefined, // Store as undefined if empty
    };

    // If editing, include the id
    if (initialData?.id) {
        onSubmit({ ...portfolioData, id: initialData.id });
    } else {
        onSubmit(portfolioData); // For adding new
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">{initialData ? 'Edit Portfolio' : 'Add New Portfolio'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title / Role</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
           <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {initialData ? 'Update Portfolio' : 'Add Portfolio'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;