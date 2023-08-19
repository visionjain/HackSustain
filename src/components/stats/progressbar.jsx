import React from 'react';

const ProgressBar = ({ heading, percent }) => {
    return (
        <div className="mb-4">
            <h2 className="text-lg font-semibold">{heading}</h2>
            <div className="relative h-4 rounded-lg bg-gray-300">
                <div
                    className="absolute h-full bg-blue-500 rounded-lg"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;