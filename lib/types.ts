export type $NavLink = {
  label: string;
  route: string;
};

export type $NavItem = {
  label: string;
  route: string;
  links: $NavLink[];
};