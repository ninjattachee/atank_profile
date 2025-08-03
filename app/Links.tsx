import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail, MdOutlineRssFeed } from "react-icons/md";

export interface Link {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const linkStyle =
  "text-stone-100 rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all duration-300";

const links: Link[] = [
  {
    name: "X",
    url: "https://x.com/atankee",
    icon: <BsTwitterX size={42} className={`${linkStyle} bg-cyan-300`} />,
  },
  {
    name: "Feed",
    url: "https://progress.atank.org",
    icon: <MdOutlineRssFeed size={42} className={`${linkStyle} bg-sky-300`} />,
  },
  {
    name: "Email",
    url: "mailto:atank@atank.org",
    icon: <MdEmail size={42} className={`${linkStyle} bg-blue-300`} />,
  },
];

const LinksPage = () => {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <div key={link.name}>
          <Link href={link.url}>{link.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export default LinksPage;
