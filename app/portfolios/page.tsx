"use client"; // This page needs client-side interactivity (state, localStorage)

import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioForm from './PortfolioForm';
import { Portfolio } from './types';

const LOCAL_STORAGE_KEY = 'userPortfolios';

export default function PortfoliosPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [isLoading, setIsLoading] = useState(true); // To handle initial load
  const [showForm, setShowForm] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState<Portfolio | null>(null);

  // Load portfolios from localStorage on initial mount
  useEffect(() => {
    const storedPortfolios = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedPortfolios) {
      try {
        setPortfolios(JSON.parse(storedPortfolios));
      } catch (error) {
        console.error("Failed to parse portfolios from localStorage", error);
        // Optionally clear corrupted data
        // localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    }
    setIsLoading(false); // Done loading
  }, []); // Empty dependency array means this runs only once on mount

  // Save portfolios to localStorage whenever they change
  useEffect(() => {
    // Don't save during the initial load
    if (!isLoading) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolios));
    }
  }, [portfolios, isLoading]); // Run this effect when portfolios or isLoading change

  const handleAddClick = () => {
    setEditingPortfolio(null); // Ensure we are adding, not editing
    setShowForm(true);
  };

  const handleEditClick = (portfolio: Portfolio) => {
    setEditingPortfolio(portfolio);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingPortfolio(null); // Clear editing state
  };

  const handleDelete = (id: string) => {
    // Add a confirmation dialog
    if (window.confirm('Are you sure you want to delete this portfolio?')) {
       setPortfolios(currentPortfolios => currentPortfolios.filter(p => p.id !== id));
    }
  };

  const handleFormSubmit = (portfolioData: Omit<Portfolio, 'id'> | Portfolio) => {
    if ('id' in portfolioData) {
      // Editing existing portfolio
      setPortfolios(currentPortfolios =>
        currentPortfolios.map(p => p.id === portfolioData.id ? portfolioData : p)
      );
    } else {
      // Adding new portfolio
      const newPortfolio: Portfolio = {
        ...portfolioData,
        id: Date.now().toString(), // Simple unique ID generation for demo
      };
      setPortfolios(currentPortfolios => [...currentPortfolios, newPortfolio]);
    }
    setShowForm(false); // Close form after submission
    setEditingPortfolio(null); // Clear editing state
  };

  if (isLoading) {
      return <div className="p-8 text-center">Loading portfolios...</div>;
  }

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-black">Candidate Portfolios</h1>
        <button
          onClick={handleAddClick}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          + Add Portfolio
        </button>
      </div>

      {portfolios.length === 0 && !showForm ? (
        <p className="text-gray-600 text-center py-10">No portfolios added yet. Click 'Add Portfolio' to start!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map(portfolio => (
            <PortfolioCard
              key={portfolio.id}
              portfolio={portfolio}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Conditionally render the form */}
      {showForm && (
        <PortfolioForm
          onSubmit={handleFormSubmit}
          onCancel={handleCancelForm}
          initialData={editingPortfolio}
        />
      )}
    </div>
  );
}