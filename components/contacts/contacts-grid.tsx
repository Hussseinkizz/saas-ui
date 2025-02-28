'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Contact } from '@/types/types';
import { MoreVertical } from 'lucide-react';
interface ContactsGridProps {
  filteredContacts: Contact[];
}

export const ContactsGrid = ({ filteredContacts }: ContactsGridProps) => {
  // Group contacts by status
  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    if (!acc[contact.status]) {
      acc[contact.status] = [];
    }
    acc[contact.status].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  const statusColumns = [
    {
      status: 'Active',
      color: 'text-green-500',
      dotColor: 'bg-green-500',
    },
    {
      status: 'New',
      color: 'text-blue-500',
      dotColor: 'bg-blue-500',
    },
    {
      status: 'Inactive',
      color: 'text-amber-500',
      dotColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
      {statusColumns.map(({ status, color, dotColor }) => (
        <div key={status} className="flex flex-col h-full">
          <div className="flex items-center justify-between px-1 mb-4">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dotColor}`} />
              <span className={`font-medium ${color}`}>{status}</span>
              <span className="text-sm text-muted-foreground">
                {groupedContacts[status]?.length || 0}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-14rem)] rounded-md border">
            <div className="p-4 space-y-4">
              {groupedContacts[status]?.map((contact) => (
                <Card key={contact.id}>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {getInitials(contact.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {contact.email}
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit contact</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="text-sm text-purple-500">
                        {contact.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      ))}
    </div>
  );
};
