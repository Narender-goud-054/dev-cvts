import React from "react";

const Popup = ({ open, onClose, title, date, buttonText, link }) => {
  
    if (!open) return null;

  return (
    <>
      {/* Overlay with blur */}
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          
          {/* Close icon */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            aria-label="Close popup"
          >
            ✕
          </button>

          {/* Content (row-based layout) */}
          <div className="flex flex-col gap-4">

            {/* Title */}
            <h2 className="text-lg font-medium text-gray-800">
              {title}
            </h2>

            {/* Date */}
            <p className="text-2xl font-semibold text-gray-900">
              {date}
            </p>

            {/* Action button */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              {buttonText}
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Popup;
