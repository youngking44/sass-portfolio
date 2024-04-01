import styles from "./page.module.scss";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Works from "@/components/works/Works";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </main>
  );
}
