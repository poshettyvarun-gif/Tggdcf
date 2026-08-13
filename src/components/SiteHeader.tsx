"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Sync from window.location.hash, which is unavailable during SSR and doesn't fire
    // "hashchange" on Next.js's pushState-based client navigation, so it must be read on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  const hashOf = (href: string) => (href.includes("#") ? `#${href.split("#")[1]}` : "");
  const activeIndex = (() => {
    const hashMatch = NAV_ITEMS.findIndex((i) => i.href.includes("#") && i.href === pathname + hash);
    if (hashMatch !== -1) return hashMatch;
    return NAV_ITEMS.findIndex((i) => !i.href.includes("#") && i.href === pathname);
  })();

  return (
    <header className="sticky top-0 z-50 border-b border-brass/35 bg-forest-deep">
      <div className="flex w-full items-center justify-between px-6 md:px-10 lg:px-16">
        <button
          className="my-2 rounded border border-brass px-3 py-2 text-xs text-brass min-[1450px]:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav className={`${open ? "flex" : "hidden"} w-full flex-col pb-2 min-[1450px]:flex min-[1450px]:w-auto min-[1450px]:flex-row min-[1450px]:flex-nowrap min-[1450px]:pb-0`}>
          {NAV_ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    setOpen(false);
                    setHash(hashOf(item.href));
                    e.currentTarget.blur();
                  }}
                  className={`block border-b-2 px-3 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors ${
                    isActive
                      ? "border-brass bg-brass/10 text-brass"
                      : "border-transparent text-[#d9e2dc] hover:border-brass hover:bg-brass/10 hover:text-brass"
                  }`}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div
                    className="block w-full bg-white/6 transition-opacity duration-150 min-[1450px]:invisible min-[1450px]:absolute min-[1450px]:top-full min-[1450px]:left-0 min-[1450px]:min-w-[200px] min-[1450px]:bg-white min-[1450px]:py-1.5 min-[1450px]:opacity-0 min-[1450px]:shadow-[0_10px_22px_rgba(0,0,0,0.16)] min-[1450px]:group-hover:visible min-[1450px]:group-hover:opacity-100 min-[1450px]:group-focus-within:visible min-[1450px]:group-focus-within:opacity-100"
                    aria-label={`${item.label} sections`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => {
                          setOpen(false);
                          setHash(hashOf(sub.href));
                          e.currentTarget.blur();
                        }}
                        className="block px-3.5 py-2.5 pl-6.5 text-xs font-semibold whitespace-nowrap text-[#d9e2dc] min-[1450px]:pl-3.5 min-[1450px]:text-ink min-[1450px]:hover:bg-paper min-[1450px]:hover:text-maroon"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
