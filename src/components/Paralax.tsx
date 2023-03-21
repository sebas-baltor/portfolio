import {useScroll,useTransform,motion} from "framer-motion";
import { useRef } from "react";
export default function Paralax({id}:{id:number}){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress,[0,1],[-300,300])

  
    return (
      <section className="snap-center">
        <div ref={ref}>
          <img src={`https://www.history.com/.image/ar_233:100%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_1920/MTYyNDg1MjE3MTI1MjEzODYy/topic-london-gettyimages-760251843-feature.webp`} alt="A London skyscraper" />
        </div>
        <motion.h2 style={{ y }} className="text-6xl text-white">{`#00${id}`}</motion.h2>
      </section>
    );
}