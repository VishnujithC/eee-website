import styles from "@styles/footer.module.scss";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <main className={styles.main_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo />
          <p>
            Government Engineering College. <br /> Sreekrishnapuram, Palakkad
          </p>
        </div>
        <div className={styles.links}>
          <p>Links</p>
          <div className={styles.line}></div>
          <Link href="/achievements">Achievements</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/faculty">Faculty</Link>
          <Link href="/association">Association</Link>
          {/* <Link href="/placements">Placements</Link> */}
          {/* <Link href="/events">Events</Link> */}
          <Link href="/facilities">Facilities</Link>
        </div>
      </div>
      <div className={styles.line}></div>
    </main>
  );
};

export default Footer;
