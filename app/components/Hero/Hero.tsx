"use client";
import Image from "next/image";
import { Button } from "@components";

import styles from "./Hero.module.scss";

const Hero = () => {
  const handleButtonOnClick = () => {};
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__Inner}>
        <h1 className={styles.Hero__Title}>
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className={styles.Hero__Subtitle}>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <div className={styles.Hero__Action}>
          <Button variant="primary" onClick={handleButtonOnClick} round>
            Explore Cars
          </Button>
        </div>
      </div>
      <div className={styles.Hero__ImageContainer}>
        <div className={styles.Hero__ImageWrapper}>
          <Image
            className={styles.Hero__Image}
            src="/hero.png"
            alt="hero"
            fill
          />
        </div>
        <div className={styles.Hero__ImageOverlay} />
      </div>
    </div>
  );
};

export default Hero;
