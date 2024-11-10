import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`${isPopular ? 'border-indigo-500 scale-105' : 'border-gray-700'} 
      border-2 rounded-2xl p-8 bg-gray-800 transition-all duration-300 hover:transform hover:scale-[1.02]`}>
      {isPopular && (
        <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price.toLocaleString()}</span>
        <span className="text-gray-400">/year</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-5 w-5 text-indigo-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition
        ${isPopular 
          ? 'bg-indigo-500 text-white hover:bg-indigo-600' 
          : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
        Get Started
      </button>
    </div>
  );
}