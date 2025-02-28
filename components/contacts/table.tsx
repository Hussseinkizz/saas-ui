'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Contact } from '@/types/types';
import { ArrowDown, ArrowUp, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface Props {
  filteredContacts: Contact[];
  isMobile: boolean;
}

export const ContactsTable = ({ filteredContacts, isMobile }: Props) => {
  const [sortColumn, setSortColumn] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    const aValue = a[sortColumn as keyof Contact];
    const bValue = b[sortColumn as keyof Contact];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }

    return 0;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'text-blue-500 bg-blue-50';
      case 'Active':
        return 'text-green-500 bg-green-50';
      case 'Inactive':
        return 'text-amber-500 bg-amber-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lead':
        return 'text-cyan-500 fill-cyan-500';
      case 'Customer':
        return 'text-purple-500 fill-purple-500';
      default:
        return 'text-gray-500 fill-gray-500';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  const SortIndicator = ({ column }: { column: string }) => {
    if (sortColumn !== column) return null;

    return sortDirection === 'asc' ? (
      <ArrowUp className="ml-1 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4" />
    );
  };

  return (
    <Table className="relative z-0">
      <TableHeader className="sticky top-0 bg-white z-10">
        <TableRow>
          <TableHead
            className={`w-12 ${
              !isMobile ? 'sticky left-0 z-20 bg-white' : ''
            }`}>
            <Checkbox />
          </TableHead>
          <TableHead
            className={`${
              !isMobile ? 'sticky left-12 z-20 bg-white' : ''
            } cursor-pointer`}
            onClick={() => handleSort('name')}>
            <div className="flex items-center">
              Name
              <SortIndicator column="name" />
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => handleSort('email')}>
            <div className="flex items-center">
              Email
              <SortIndicator column="email" />
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => handleSort('createdAt')}>
            <div className="flex items-center">
              Created at
              <SortIndicator column="createdAt" />
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => handleSort('type')}>
            <div className="flex items-center">
              Type
              <SortIndicator column="type" />
            </div>
          </TableHead>
          <TableHead
            className="cursor-pointer"
            onClick={() => handleSort('status')}>
            <div className="flex items-center">
              Status
              <SortIndicator column="status" />
            </div>
          </TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedContacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell
              className={!isMobile ? 'sticky left-0 z-10 bg-white' : ''}>
              <Checkbox />
            </TableCell>
            <TableCell
              className={!isMobile ? 'sticky left-12 z-10 bg-white' : ''}>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{getInitials(contact.name)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{contact.name}</span>
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {contact.email}
            </TableCell>
            <TableCell>{contact.createdAt}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    contact.type === 'Lead' ? 'bg-cyan-500' : 'bg-purple-500'
                  }`}></span>
                <span
                  className={
                    contact.type === 'Lead'
                      ? 'text-cyan-500'
                      : 'text-purple-500'
                  }>
                  {contact.type}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={`${getStatusColor(contact.status)} border-0`}>
                {contact.status}
              </Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
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
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
