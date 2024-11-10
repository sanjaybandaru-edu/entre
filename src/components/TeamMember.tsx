import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export default function TeamMember({ name, role, image, linkedin, twitter }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800">
      <div className="aspect-square">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40">
        <div className="absolute bottom-0 p-6">
          <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
          <p className="text-gray-300 mb-4">{role}</p>
          <div className="flex space-x-3">
            {linkedin && (
              <a href={linkedin} className="text-white hover:text-indigo-400 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="text-white hover:text-indigo-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}