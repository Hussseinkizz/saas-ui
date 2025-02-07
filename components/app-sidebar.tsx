'use client';

import { ChevronDown, Home, Inbox, Users } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { InviteButton } from './invite-button';
import { HelpAndSupport } from './help-and-support';
import { OrganizationDropdown } from './organisation-dropdown';
import { ProfileDropdown } from './profile-dropdown';
import { SidebarSearch } from './sidebar-search';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '/inbox',
    icon: Inbox,
    count: 2,
  },
  {
    title: 'Contacts',
    url: '/contacts',
    icon: Users,
  },
];

const tags = [
  {
    tag: 'developer',
    color: 'purple',
    count: 210,
  },
  {
    tag: 'designer',
    color: 'green',
    count: 83,
  },
  {
    tag: 'partner',
    color: 'blue',
    count: 12,
  },
  {
    tag: 'prospect',
    color: 'amber',
    count: 23,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [isTagsOpen, setIsTagsOpen] = useState(true);

  const toggleTags = () => {
    setIsTagsOpen(!isTagsOpen);
  };

  return (
    <Sidebar className="bg-white text-gray-800">
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          <OrganizationDropdown />
          <ProfileDropdown />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarSearch />
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="text-gray-800">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url ? true : false}>
                    <a
                      href={item.url}
                      className="flex justify-between items-center gap-2 w-full">
                      <div className="flex items-center gap-2">
                        <item.icon size={20} />
                        <span>{item.title}</span>
                      </div>
                      {item.count && <span className="ml-2">{item.count}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Tags Section */}
        <SidebarGroup>
          <div className="w-full">
            <div
              onClick={toggleTags}
              className="flex items-center w-full justify-between cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md transition-colors">
              <SidebarGroupLabel>Tags</SidebarGroupLabel>
              <ChevronDown
                size={20}
                className={`text-gray-400 transition-transform duration-200 ${
                  isTagsOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
            {isTagsOpen && (
              <SidebarGroupContent className="mt-4">
                <SidebarMenu>
                  {tags.map((tag) => (
                    <SidebarMenuItem key={tag.tag}>
                      <SidebarMenuButton asChild>
                        <div className="flex gap-4 items-center justify-between w-full">
                          <div className="flex gap-2 items-center capitalize">
                            <span
                              className={`bg-gray-500 flex size-2 rounded-full bg-${tag.color}-500`}></span>
                            <span>{tag.tag}</span>
                          </div>
                          {tag.count}
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <InviteButton />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <HelpAndSupport />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
