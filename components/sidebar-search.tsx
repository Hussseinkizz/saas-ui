'use client';
import { useState } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';


export const SidebarSearch = () => {
  const [input, setInput] = useState('');
  return (
    <div className="flex items-center gap-2 w-full relative z-[1]">
      <Search className="w-4 h-4 text-gray-400  absolute left-2 top-[10px] shadow-sm z-[2]" />
      <Input
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-8"
      />
      <span className="flex items-center p-2 rounded-md bg-gray-200 absolute right-2 top-2 bottom-2 z-[2] text-sm">
        /
      </span>
    </div>
  );
};
