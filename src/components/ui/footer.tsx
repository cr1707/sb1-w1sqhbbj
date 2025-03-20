"use client";

import { DIcons } from "./mock-dicons";
import { useTheme } from "./theme-provider";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <DIcons.Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop}>
          <DIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white"
        >
          <DIcons.Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;

const Underline = `hover:-translate-y-1 border rounded-xl p-2.5 transition-transform `;

export function Footer() {
  // Sample navigation data structure
  const navigation = {
    categories: [
      {
        id: "hackathon",
        name: "Hackathon",
        sections: [
          {
            id: "about",
            name: "About",
            items: [
              { name: "About", href: "/about" },
              { name: "Schedule", href: "/schedule" },
              { name: "Rules", href: "/rules" },
            ],
          },
          {
            id: "resources",
            name: "Resources",
            items: [
              { name: "Starter Kits", href: "/resources" },
              { name: "API Access", href: "/api" },
              { name: "Documentation", href: "/docs" },
            ],
          },
          {
            id: "prizes",
            name: "Prizes",
            items: [
              { name: "Grand Prize", href: "/prizes/grand" },
              { name: "Category Prizes", href: "/prizes/categories" },
              { name: "Special Awards", href: "/prizes/special" },
            ],
          },
          {
            id: "community",
            name: "Community",
            items: [
              { name: "Discord", href: "/community/discord" },
              { name: "Forums", href: "/community/forums" },
              { name: "Past Events", href: "/community/events" },
            ],
          },
          {
            id: "support",
            name: "Support",
            items: [
              { name: "FAQ", href: "/support/faq" },
              { name: "Contact", href: "/support/contact" },
              { name: "Help Desk", href: "/support/helpdesk" },
            ],
          },
          {
            id: "legal",
            name: "Legal",
            items: [
              { name: "Terms", href: "/terms" },
              { name: "Privacy", href: "/privacy" },
              { name: "Code of Conduct", href: "/code-of-conduct" },
            ],
          },
        ],
      },
    ],
  };

  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t px-2">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
        <a href="/">
          <p className="flex items-center justify-center rounded-full">
            <DIcons.Designali className="w-8 text-red-600" />
          </p>
        </a>
        <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          Welcome to the World's Largest Hackathon, where innovation meets opportunity to solve global challenges. 
          Our mission is to bring together the brightest minds and most creative problem-solvers from around the world to compete for the largest prize pool in hackathon history - over $1 million in prizes. 
          We believe in the power of collaboration and technology to drive meaningful change. Our hackathon focuses on real-world applications that can transform industries and improve lives. 
          Join us as we break records and set new standards for what's possible when passionate creators unite with a common purpose.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b"> </div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <a
                          href={item.href}
                          className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white md:text-xs"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b"> </div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a
            aria-label="Email"
            href="mailto:contact@worldshackathon.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </a>
          <a
            aria-label="Twitter/X"
            href="https://x.com/worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/worldshackathon/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </a>
          <a
            aria-label="Threads"
            href="https://www.threads.net/worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Threads className="h-5 w-5" />
          </a>
          <a
            aria-label="WhatsApp"
            href="https://chat.whatsapp.com/hackathoncommunity"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </a>
          <a
            aria-label="Behance"
            href="https://www.behance.net/worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Behance className="h-5 w-5" />
          </a>
          <a
            aria-label="Facebook"
            href="https://www.facebook.com/worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </a>
          <a
            aria-label="YouTube"
            href="https://www.youtube.com/@worldshackathon"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </a>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
} 