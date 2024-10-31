
import { routes } from "@/constants/routes";
import Link from "next/link";
// import { useRouter } from "next/router";
import styles from './Navbar.module.scss';
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.linkContainer}>
        {routes.map((route) => {
          const isActive = pathname === route.path;
          return (
            <Link key={route.path} href={route.path} className={`${styles.link} ${isActive ? styles.active : ''}`}>
              {route.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
