'use client';
import { ContactsGrid } from '@/components/contacts/contacts-grid';
import { ContactsTablePagination } from '@/components/contacts/pagination';
import { ContactsTable } from '@/components/contacts/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSidebar } from '@/components/ui/sidebar';
import { contacts } from '@/data';
import {
  LayoutGrid,
  Menu,
  Search,
  SlidersHorizontal,
  TableOfContents,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ContactsPage = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [selectedTab, setSelectedTab] = useState('all');
  const { toggleSidebar } = useSidebar();

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const filteredContacts = contacts.filter((contact) => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'leads') return contact.type === 'Lead';
    if (selectedTab === 'customers') return contact.type === 'Customer';
    return true;
  });

  return (
    <main className="w-full min-h-screen flex flex-col flex-1 relative">
      <header className="w-full flex flex-col sticky top-0 text-gray-700 z-10">
        <div className="w-full flex px-4 py-2 items-center justify-between gap-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Menu onClick={toggleSidebar} className="md:hidden flex" />
            <h2 className="font-semibold">Contacts</h2>
          </div>
          <nav className="flex items-center gap-2">
            <div className="hidden md:flex gap-2 items-center relative">
              <Search className="w-4 h-4 text-gray-400  absolute left-2 top-[12px] shadow-sm z-[2]" />
              <Input
                placeholder="search by name or email..."
                className="w-64 pl-8"
              />
            </div>
            <div className="flex gap-4 items-center">
              <Button className="bg-violet-600" size="sm">
                Add person
              </Button>
            </div>
          </nav>
        </div>
        <section className="flex w-full gap-4 items-center border-b border-gray-200 bg-white py-2 px-4 justify-between">
          <div className="flex gap-4 items-center">
            <div className="flex rounded-md text-sm">
              <span
                className="flex px-2 py-1 ring-1 rounded-l-md ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-700 font-semibold"
                onClick={() => setSelectedTab('all')}>
                All
              </span>
              <span
                className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold"
                onClick={() => setSelectedTab('leads')}>
                Leads
              </span>
              <span
                className="flex px-2 py-1 ring-1 ring-gray-200 hover:text-gray-950 cursor-pointer text-gray-600 font-semibold rounded-r-md"
                onClick={() => setSelectedTab('customers')}>
                custom
              </span>
            </div>
            <Button variant="outline" className="rounded-md" size="sm">
              Filter
            </Button>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <div className="flex ring-1 ring-gray-200 items-center rounded-md">
              <Button size="sm" variant="ghost" onClick={() => setView('list')}>
                <TableOfContents />
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setView('grid')}>
                <LayoutGrid />
              </Button>
            </div>
            <Button size="sm" variant="outline">
              <SlidersHorizontal />
              Display
            </Button>
          </div>
        </section>
      </header>
      {/* The view */}
      <section className="flex flex-col w-full gap-4">
        <ScrollArea>
          {view === 'list' ? (
            <>
              <ContactsTable
                filteredContacts={filteredContacts}
                isMobile={isMobile}
              />
              <ContactsTablePagination />
            </>
          ) : (
            <ContactsGrid filteredContacts={filteredContacts} />
          )}
        </ScrollArea>
      </section>
    </main>
  );
};

export default ContactsPage;
