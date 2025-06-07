import React from 'react';

export const ImageModal = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg relative max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          ×
        </button>
        <div className="flex justify-between items-center mb-4">
          <button onClick={onPrev} className="p-2 bg-gray-300 rounded-full">
            Previous
          </button>
          <img src={images[currentIndex]} alt="Modal view" className="max-w-full max-h-96 object-contain" />
          <button onClick={onNext} className="p-2 bg-gray-300 rounded-full">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
