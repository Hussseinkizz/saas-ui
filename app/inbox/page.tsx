'use client';
import { InboxDisplayFilter } from '@/components/inbox-filter';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';
import { useState } from 'react';
import { Clock, Menu, Sidebar, Trash } from 'lucide-react';

const InboxPage = () => {
  const { toggleSidebar } = useSidebar();
  const [showMiniPanel, setShowMiniPanel] = useState(true);

  return (
    <section className="w-full h-screen min-h-full flex flex-1 overflow-hidden relative">
      {/* Left slot */}
      <div className="flex flex-col flex-1 w-[30%] h-full justify-start items-start --gap-4 bg-gray-100 overflow-hidden">
        <nav className="flex sticky p-4 top-0 z-50 bg-white border-b border-gray-300 w-full border-r justify-between items-center">
          <Menu onClick={toggleSidebar} className="md:hidden flex" />
          <h2 className="font-semibold">Inbox</h2>
          <InboxDisplayFilter />
        </nav>
        <div className="flex flex-col bg-white h-full">
          <p className="w-full p-4 bg-gray-100 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
          <p className="w-full p-4 hover:bg-gray-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
          <p className="w-full p-4 hover:bg-gray-100">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          </p>
        </div>
      </div>
      {/* right slot */}
      <div className="hidden md:flex w-[70%] flex-col h-full justify-start items-start gap-4 bg-white overflow-hidden ">
        <nav className="flex sticky justify-end items-center p-4 gap-4 top-0 z-10 --mt-4 bg-white border-b border-gray-300 w-full">
          <Button variant="outline">
            <Trash />
            Delete Notification
          </Button>
          <Button variant="outline">
            <Clock />
            Snooze
          </Button>
        </nav>
        <div className="flex w-full flex-col border-l border-gray-200 h-full">
          {/* sub header */}
          <nav className="flex w-full justify-between items-center py-2 border-b border-gray-200 px-4">
            <h2 className="font-semibold text-gray-700 flex gap-2 items-center">
              Contacts /
              <span className="flex text-gray-400">Francisco-Javier Smits</span>
            </h2>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowMiniPanel(!showMiniPanel)}>
              <Sidebar />
            </Button>
          </nav>
          {/* sub header 2 */}
          <section className="flex w-full flex-1 h-full">
            <div className="flex w-full flex-col flex-1">
              <nav className="flex w-full justify-between items-center border-b border-gray-200 px-4">
                <span className="flex py-2 border-b border-gray-500 text-sm">
                  Activity
                </span>
              </nav>
              {/* Activity Body */}
              <div className="flex flex-col w-full p-4">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam nulla consequuntur, ullam cumque ab corrupti atque
                  repudiandae dicta fugiat porro.
                </p>
              </div>
            </div>
            {showMiniPanel && (
              <div
                className="flex flex-col flex-1 p-8 border-l border-gray-200 h-full 
                transition-all duration-1000 ease-linear 
                w-full max-w-full">
                mini side panel
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default InboxPage;
