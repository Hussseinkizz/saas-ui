'use client';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { useSidebar } from './ui/sidebar';

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="w-full flex flex-col sticky top-0 text-gray-700 z-10">
      <div className="w-full flex px-4 py-2 items-center justify-between gap-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <Menu onClick={toggleSidebar} className="md:hidden flex" />
          <h2 className="font-semibold">Kodeeyo</h2>
        </div>
        <nav className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <FaTwitter />
            <FaGithub />
            <FaDiscord />
          </div>
          <div className="flex gap-4 items-center">
            <Button className="bg-violet-500" size="sm">
              Action
            </Button>
          </div>
        </nav>
      </div>
      <div className="flex w-full gap-4 items-center border-b border-gray-200 bg-white py-2 px-4">
        <div className="flex rounded-md text-sm">
          <span className="flex px-2 py-1 ring-1 rounded-l-md ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold">
            1d
          </span>
          <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold">
            3d
          </span>
          <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold">
            7d
          </span>
          <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold">
            30d
          </span>
          <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold rounded-r-md">
            custom
          </span>
        </div>
        <Button variant='outline' className='rounded-md' size='sm'>date</Button>
      </div>
    </header>
  );
};
