"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Dashboard from "../../containers/Dashboard";
import BookTickets from "../../containers/BookTickets";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Dashboard: [
      {
        id: 1,
        component: <Dashboard />,
      },
    ],
    "Book Ticket": [
      {
        id: 1,
        component: <BookTickets />,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-black/60 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2",
                  selected
                    ? "bg-black text-white shadow"
                    : "text-black-100 hover:bg-black/40"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 h-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white p-3 h-full min-h-screen",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div key={post.id} className="text-black">
                    {post.component}
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
