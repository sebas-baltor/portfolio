import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import {Inter} from "next/font/google"
const inter = Inter({subsets:["latin"]});


interface RollProps {
  text: string;
  baseVelocity: number;
}

export default function RollText({ text, baseVelocity = 100 }: RollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const directionFactor = useRef<number>(1);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = (directionFactor.current * baseVelocity * delta) / 3000;
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap line-[0.8] -rotate-6">
      <motion.div
        className={`${inter.className} text-8xl flex whitespace-nowrap flex-nowrap text-primary-contrast uppercase font-semibold lg:text-9xl`}
        style={{ x }}
      >
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
        <span className="block mr-10">{text} </span>
      </motion.div>
    </div>
  );
}
