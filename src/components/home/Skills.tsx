import styles from "@/style";
import { TypingText } from "./TypingText";

export default function Skills() {
  return (
    <section className="bg-light" id="skills">
      <div className={`${styles.paddings} h-screen`}>
        <div className={`${styles.innerWidth} mx-auto`}>
          <TypingText title="Skills" />
        </div>
      </div>
    </section>
  );
}
