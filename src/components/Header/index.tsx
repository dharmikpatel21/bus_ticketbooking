"use client";
import Link from "next/link";
import React from "react";
import style from "./header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
type Props = {};
const links = [
  { id: 1, title: "Dashboard", url: "/dashboard" },
  { id: 2, title: "Book Tickets", url: "/ticket-reservation" },
];
const Header = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className="flex items-center gap-8 py-2 bg-gray-300 sticky top-0 left-0 z-10">
      {links &&
        links.map((item) => {
          return (
            <Link
              href={item.url}
              key={item.id}
              className={clsx(`w-max p-2`, {
                "bg-gray-600 text-white rounded-lg": pathname === item.url,
              })}
            >
              {item.title}
            </Link>
          );
        })}
    </section>
  );
};

export default Header;
