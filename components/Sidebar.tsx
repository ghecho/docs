import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { SidebarSection } from "../data/types";
import SidebarSectionList from "./Sidebar/SidebarSectionList";

type Props = {
  content: SidebarSection[];
};

const Sidebar: React.FC<Props> = ({ content, children }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".selected-sidebar-content")?.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }, 50);
  }, []);

  return (
    <section className="w-72 border-r dark:border-r-gray-800 hidden lg:block">
      <nav className="overflow-y-auto h-full pl-7 pr-4 py-5">
        {children && <div className="mb-4">{children}</div>}

        {content.map((section) => (
          <div key={section.title} className="mb-7">
            {section.title && (
              <span className="uppercase text-xs font-semibold tracking-wider text-gray-800 dark:text-gray-500">
                {section.title}
              </span>
            )}

            <SidebarSectionList section={section} router={router} />
          </div>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
