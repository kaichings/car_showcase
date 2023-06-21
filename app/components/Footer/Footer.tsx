import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@constants";

import styles from "./Footer.module.scss";

const Footer = () => {
  const renderFooterLinks = () =>
    FOOTER_LINKS.map(({ title, links }) => {
      const itemElements = links.map(({ title: linkTitle, url }) => (
        <dd className={styles.Footer__Item} key={[title, linkTitle].join("-")}>
          <Link className={styles.Footer__Link} href={url}>
            {linkTitle}
          </Link>
        </dd>
      ));
      return (
        <dl className={styles.Footer__ItemList}>
          <dt className={styles.Footer__ItemTitle}>{title}</dt>
          {itemElements}
        </dl>
      );
    });
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Inner}>
        <div className={styles.Footer__Links}>
          <div className={styles.Footer__LinksMain}>
            <Image
              className={styles.Footer__Logo}
              src="/logo.svg"
              alt="Car Hub Logo"
              width={118}
              height={18}
            />
            <p className={styles.Footer__Text}>
              <small>Carhub 2023</small>
              <small>All Rights Reserved &copy;</small>
            </p>
          </div>
          <div className={styles.Footer__LinksSub}>{renderFooterLinks()}</div>
        </div>
        <div className={styles.Footer__Info}>
          <div className={styles.Footer__InfoMain}>
            <p>@2023 CarHub. All rights reserved</p>
          </div>
          <div className={styles.Footer__InfoSub}>
            <ul>
              <li>
                <Link className={styles.Footer__Link} href="/">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link className={styles.Footer__Link} href="/">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
