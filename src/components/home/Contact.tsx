import styles from "@/style";
import { Sacramento } from "next/font/google";
import { TypingText } from "./TypingText";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
export default function Contact() {
  return (
    <section className={`bg-light h-[90vh]`} id="contact">
      <div className={`${styles.paddings}`}>
        <div
          className={`${styles.innerWidth} ${styles.flexColCenter} gap-12 mx-auto`}
        >
          <TypingText title="Any proyect?" />
          <form className={`${styles.flexColCenter} gap-6 w-full md:w-[50vw]`}>
            <input
              type="text"
              className="px-2 py-3 max-w-xl outline-0 w-full focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary"
              placeholder="Name"
              name="name"
              required
            />

            <input
              type="email"
              className="px-2 py-3 max-w-xl outline-0 w-full focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary"
              placeholder="Email"
              name="email"
              required
            />
            <select
              className="px-2 py-3 max-w-xl outline-0 w-full focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary"
              required
              name="budget"
            >
              <option value="budget" disabled>budget</option>
              <option value="10,000 -  15,000" >10 - 15</option>
              <option value="10,000 -  15,000" >15 - 20</option>
              <option value="10,000 -  15,000" >25 - 30</option>
            </select>
            <textarea
              className="px-2 py-3 max-w-xl outline-0 w-full focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary"
              rows={10}
              placeholder="Tell me about"
              required
            />
            <button
              type="submit"
              className={`text-white text-lg md:text-2xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast `}
            >
              enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
