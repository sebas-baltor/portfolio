import { IloadingModalState } from "@/utils/interfaces";
import { BsCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import styles from "@/style";
import { motion,useScroll } from "framer-motion";

export default function LoadingModal({
  isLoading,
  status,
}: IloadingModalState) {
    const {scrollY} = useScroll();
  return (
    <motion.div
      className={`absolute z-40 w-full h-screen bg-background  top-0 right-0 ${
        isLoading ? `${styles.flexCenter} overflow-hidden` : "hidden"
      } gap-12`}
      style={{y:scrollY}}
    >
      {status == null ? (
        <div className="absolute w-40 h-40 border-[1rem] border-primary border-l-secondary rounded-full animate-spin"></div>
      ) : (
        <span className="absolute text-9xl text-secondary">
          {status < 300 ? (
            <BsCheck />
          ) : (
            <div className={`${styles.flexColCenter} text-primary`}>
              <RxCross2 className="text-9xl" />
              <span className="text-xs  text-center">
                algo salio mal, reenvia el formulario o trata mas tarde
              </span>
            </div>
          )}
        </span>
      )}
    </motion.div>
  );
}
