import React from 'react';

const ProjectCard = ({ title, platform, link, description }) => (
  <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-2">{platform}</p>
    <p className="text-gray-700 mb-3">{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on Store
      </a>
    )}
  </div>
);

export default ProjectCard;
