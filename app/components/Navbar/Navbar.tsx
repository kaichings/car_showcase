import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@components";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <nav className={styles.Navbar__Inner}>
        <Link className={styles.Navbar__Link} href="/">
          <Image
            className={styles.Navbar__Logo}
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
          />
        </Link>
        <Button className={styles.Navbar__Button} variant="text-primary" round>
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
