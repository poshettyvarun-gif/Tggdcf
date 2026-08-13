export type NavItem = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Introduction", href: "/about" },
      { label: "Objectives", href: "/about" },
      { label: "Functions", href: "/about" },
      { label: "Organogram", href: "/about" },
      { label: "Staff Pattern", href: "/about" },
    ],
  },
  {
    label: "Wings & Sections",
    href: "/about",
    submenu: [
      { label: "Acts & Rules", href: "/about" },
      { label: "Finance & Accounts Wing", href: "/about" },
      { label: "Administration Wing", href: "/about" },
      { label: "Works", href: "/about" },
      { label: "Procurement", href: "/about" },
      { label: "Quality Control", href: "/about" },
      { label: "Projects", href: "/about" },
      { label: "Milk Product Factory (MPF)", href: "/about" },
      { label: "Liquid Milk Market", href: "/about" },
      { label: "Vijaya Training Center (VTC)", href: "/about" },
      { label: "Feedback", href: "/about" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Marketing", href: "/marketing" },
  {
    label: "Key Contacts",
    href: "/contacts",
    submenu: [
      { label: "Honourable Minister", href: "/contacts" },
      { label: "State Officers", href: "/contacts" },
      { label: "Unit Officers", href: "/contacts" },
    ],
  },
  {
    label: "GOs & Circulars",
    href: "/gos",
    submenu: [
      { label: "GOs", href: "/gos" },
      { label: "Circulars", href: "/gos" },
    ],
  },
  { label: "Citizen Charter", href: "/charter" },
  { label: "Related Links", href: "/related" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "RTI", href: "/rti" },
  { label: "Contact Us", href: "/contact" },
];
