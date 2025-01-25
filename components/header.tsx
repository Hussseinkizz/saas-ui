'use client';
import { Sidebar } from 'lucide-react';
import { Button } from './ui/button';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { useSidebar } from './ui/sidebar';

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="w-full flex px-4 py-2 items-center justify-between gap-4 sticky top-0 border-b border-gray-300 bg-white text-gray-700 z-10">
      <div className="flex">
        <Sidebar onClick={toggleSidebar}/>
      </div>
      <nav className="flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <FaTwitter />
          <FaGithub/>
          <FaDiscord/>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="bg-violet-500" size='sm'>Action</Button>
        </div>
      </nav>
    </header>
  );
};
