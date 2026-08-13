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
      { label: "Introduction", href: "/about#introduction" },
      { label: "Objectives", href: "/about#objectives" },
      { label: "Functions", href: "/about#functions" },
      { label: "Organogram", href: "/about#organogram" },
      { label: "Staff Pattern", href: "/about#organogram" },
    ],
  },
  {
    label: "Wings & Sections",
    href: "/about#wings",
    submenu: [
      { label: "Acts & Rules", href: "/about#wings" },
      { label: "Finance & Accounts Wing", href: "/about#wings" },
      { label: "Administration Wing", href: "/about#wings" },
      { label: "Works", href: "/about#wings" },
      { label: "Procurement", href: "/about#wings" },
      { label: "Quality Control", href: "/about#wings" },
      { label: "Projects", href: "/about#wings" },
      { label: "Milk Product Factory (MPF)", href: "/about#wings" },
      { label: "Liquid Milk Market", href: "/about#wings" },
      { label: "Vijaya Training Center (VTC)", href: "/about#wings" },
      { label: "Feedback", href: "/about#wings" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Marketing", href: "/marketing" },
  {
    label: "Key Contacts",
    href: "/contacts",
    submenu: [
      { label: "Honourable Minister", href: "/contacts#minister" },
      { label: "State Officers", href: "/contacts#state-officers" },
      { label: "Unit Officers", href: "/contacts#unit-officers" },
    ],
  },
  {
    label: "GOs & Circulars",
    href: "/gos",
    submenu: [
      { label: "GOs", href: "/gos#gos" },
      { label: "Circulars", href: "/gos#circulars" },
    ],
  },
  { label: "Citizen Charter", href: "/charter" },
  { label: "Related Links", href: "/related" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "RTI", href: "/rti" },
  { label: "Contact Us", href: "/contact" },
];
