// src/components/Sider.jsx
import React from 'react';

const Sider = () => {
  return (
    <aside
      id="logo-sidebar"
      className="col-span-1 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
                -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0
                dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-red-900">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-200 dark:hover:bg-red-400 group hover:scale-110 
                            ${selectedMenu === "realTime" ? 'selected' : ''}`}
              onClick={() => handleMenuSelection('realTime')}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Real Time</span>
            </a>
          </li>
          {/* Adicione outros itens do menu aqui */}
        </ul>
      </div>
    </aside>
  );
};

export default Sider;
