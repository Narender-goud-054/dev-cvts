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
            className="absolute right-3 top-2 text-gray-700 hover:text-gray-900"
            aria-label="Close popup"
          >
            ✕
          </button>

          {/* Content (row-based layout) */}
          <div className="flex flex-col gap-4">

            {/* Date */}
            <p className="text-2xl text-center font-semibold text-red-600">
              {date}
            </p>

            {/* Title */}
            <h2 className="text font-normal text-gray-500">
              {title}
            </h2>

            

            {/* Action button */}
            {/* <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              {buttonText}
            </a> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Popup;
