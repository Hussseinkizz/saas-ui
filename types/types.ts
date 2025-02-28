export type Contact = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  type: 'Lead' | 'Customer';
  status: 'New' | 'Active' | 'Inactive';
  avatarUrl: string;
};
