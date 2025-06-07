import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const Popup = () => {
  const { isOpen, currentProject, closeModal } = useContext(ModalContext);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-50 overflow-y-auto"
      onClick={handleOutsideClick}
    >
      <div
        className="min-h-screen w-full mx-auto p-4 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - with dark mode styling */}
        <button
          onClick={closeModal}
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content - dark theme */}
        <div className="max-w-6xl mx-auto pt-16 text-gray-100">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Project {currentProject} Details
          </h2>

          <div className="space-y-8">
            {/* Project overview section */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </div>

            {/* Grid layout for details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Technologies
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• React</li>
                  <li>• Tailwind CSS</li>
                  <li>• Node.js</li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Features
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Responsive design</li>
                  <li>• Dark mode</li>
                  <li>• Interactive elements</li>
                </ul>
              </div>
            </div>

            {/* Full-width image showcase */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-white">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 h-40 rounded-lg"></div>
                <div className="bg-gray-800 h-40 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
