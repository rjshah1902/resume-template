import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="bg-transparent text-white border-b border-b-gray-600 w-full">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between">
        <div></div>
        <ul className="flex items-center justify-center gap-5 py-5">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Editor</li>
          <li className="cursor-pointer">Dashboard</li>
        </ul>
        <p>Login</p>
      </div>
    </div>
  );
}
