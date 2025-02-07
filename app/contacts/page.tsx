'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu, Search } from "lucide-react";

const ContactsPage = () => {
    const { toggleSidebar } = useSidebar();

  return (
    <section className="w-full h-screen min-h-full flex flex-1 overflow-hidden relative">
      <header className="w-full flex flex-col sticky top-0 text-gray-700 z-10">
        <div className="w-full flex px-4 py-2 items-center justify-between gap-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Menu onClick={toggleSidebar} className="md:hidden flex" />
            <h2 className="font-semibold">Contacts</h2>
          </div>
          <nav className="flex items-center gap-2">
            <div className="hidden md:flex gap-2 items-center relative">
              <Search className="w-4 h-4 text-gray-400  absolute left-2 top-[12px] shadow-sm z-[2]"/>
           <Input placeholder="search by name or email..." className="w-64 pl-8"/>
            </div>
            <div className="flex gap-4 items-center">
              <Button className="bg-violet-600" size="sm">
                Add person
              </Button>
            </div>
          </nav>
        </div>
        <div className="flex w-full gap-4 items-center border-b border-gray-200 bg-white py-2 px-4">
          <div className="flex rounded-md text-sm">
            <span className="flex px-2 py-1 ring-1 rounded-l-md ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-700 font-semibold">
              All
            </span>
            <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold">
              Leads
            </span>
            <span className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold rounded-r-md">
              custom
            </span>
          </div>
          <Button variant="outline" className="rounded-md" size="sm">
            Filter
          </Button>
        </div>
      </header>
    </section>
  );
};

export default ContactsPage;
