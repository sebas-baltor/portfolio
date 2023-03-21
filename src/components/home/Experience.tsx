import styles from "@/style";
import { TypingText } from "./TypingText";

export default function Experience() {
  return (
    <section className="bg-light" id="exp">
      <div className={`${styles.paddings} h-screen`}>
        <div className={`${styles.innerWidth} mx-auto`}>
          <TypingText title="Experience" />
        </div>
      </div>
    </section>
  );
}