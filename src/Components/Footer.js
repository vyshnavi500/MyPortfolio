import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Vyshnavi Chidire</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Vyshnavi Chidire —
          {/* <a href="https://twitter.com/yourhandle" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@yourhandle</a> */}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/vyshnavi500" className="text-gray-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.75 3.43 22.14 8.2 23.59C8.7 23.68 8.91 23.39 8.91 23.13C8.91 22.89 8.91 22.2 8.91 21.4C5.73 22.2 5.1 19.86 5.1 19.86C4.63 18.73 4 18.43 4 18.43C3.09 17.92 4.12 17.93 4.12 17.93C5.17 18 5.68 19.01 5.68 19.01C6.65 20.49 8.2 20.12 8.91 19.87C9.04 19.07 9.33 18.55 9.67 18.27C7.12 18 4.43 17.08 4.43 12.5C4.43 11.08 4.94 9.92 5.76 9.09C5.63 8.8 5.24 7.4 5.84 5.56C5.84 5.56 6.84 5.25 8.91 6.82C9.82 6.54 10.82 6.39 11.82 6.38C12.82 6.39 13.82 6.54 14.74 6.82C16.8 5.25 17.81 5.56 17.81 5.56C18.41 7.4 18.03 8.8 17.9 9.09C18.72 9.92 19.22 11.08 19.22 12.5C19.22 17.09 16.52 18 13.97 18.26C14.38 18.66 14.73 19.41 14.73 20.53C14.73 21.89 14.72 22.88 14.72 23.13C14.72 23.39 14.93 23.68 15.43 23.59C20.19 22.14 23.62 17.75 23.62 12.5C23.62 5.87 18.25 0.5 12 0.5Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/vyshnavichidire9903/" className="ml-3 text-gray-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M16 8C17.66 8 19 9.34 19 11V16.5C19 17.88 18.13 19 17 19H7C5.87 19 5 17.88 5 16.5V11C5 9.34 6.34 8 8 8H16M16 2H8C4.69 2 2 4.69 2 8V16C2 19.31 4.69 22 8 22H16C19.31 22 22 19.31 22 16V8C22 4.69 19.31 2 16 2M7.8 17H6.25V11.25H7.8V17M6.8 10.5C6.25 10.5 5.8 10.05 5.8 9.5C5.8 8.95 6.25 8.5 6.8 8.5C7.35 8.5 7.8 8.95 7.8 9.5C7.8 10.05 7.35 10.5 6.8 10.5M18 17H16.45V14.25C16.45 13.55 16.2 13.2 15.65 13.2C15.15 13.2 14.95 13.65 14.95 14.25V17H13.45V11.25H14.9V12C15.35 11.6 15.75 11.35 16.4 11.35C17.6 11.35 18 12.1 18 13.25V17Z" />
            </svg>
          </a>
          {/* Add more social icons as needed */}
        </span>
      </div>
    </footer>
  );
}
