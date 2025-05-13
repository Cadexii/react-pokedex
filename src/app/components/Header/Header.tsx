"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

type LinkProps = {
  name: string;
  path: string;
};

const links: LinkProps[] = [
  { name: "Pokédex", path: "/" },
  { name: "My Pokémon", path: "/my-pokemon" },
];

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return `${styles.item} ${pathname === path && styles.isActive}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={getLinkClass(link.path)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
