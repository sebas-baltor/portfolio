import styles from "@/style";
import { Sacramento } from "next/font/google";
import { TypingText } from "./TypingText";

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
export default function Contact() {
  return (
    <section className={`bg-light h-[90vh] ${styles.flexCenter}`} id="contact">
      <div className={`${styles.paddings}`}>
        <div className={`${styles.innerWidth} ${styles.flexColCenter} gap-12 mx-auto`}>
          <TypingText title="I can help you!!" />
          <form className={`${styles.flexColCenter} gap-6 w-full md:w-[50vw]`}>
            <input
              type="text"
              className="px-2 py-3 bg-white max-w-xl outline-transparent w-full rounded-lg focus:shadow-lg focus:bg-[#ffbdc1] focus:placeholder:text-white placeholder:text-primary "
              placeholder="Tú nombre"
              required
            />

            <input
              type="email"
              className="px-2 py-3 bg-white max-w-xl outline-transparent w-full rounded-lg focus:shadow-lg focus:bg-[#ffbdc1] focus:placeholder:text-white placeholder:text-primary "
              placeholder="Tú correo"
              required

            />
            <textarea className="px-2 py-3 bg-white max-w-xl outline-transparent w-full rounded-lg focus:shadow-lg focus:bg-[#ffbdc1] focus:placeholder:text-white placeholder:text-primary " rows={10} placeholder="Platicame de tú proyecto" required/>
            <button
              type="submit"
              className={`${sacramento.className} text-white text-4xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast lg:text-5xl`}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
