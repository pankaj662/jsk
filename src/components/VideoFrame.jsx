import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import styles from "./VideoFrame.module.css";
import JSK2 from "../assets/JSK2.mp4"

export default function FarmingVideoFrame() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section className={styles.videoContainer} ref={ref}>
      <div className={styles.headingWrapper}>
        <motion.h2 
          className={styles.heading}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          See Our <span>Farm</span> in Action
        </motion.h2>
      </div>

      <motion.div 
        className={`${styles.leafDecoration} ${styles.leaf1}`}
        animate={{ rotate: [-20, 10, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf size={80} />
      </motion.div>
      
      <motion.div 
        className={`${styles.leafDecoration} ${styles.leaf2}`}
        animate={{ rotate: [30, -10, 30] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaLeaf size={100} />
      </motion.div>

      <motion.div 
        className={styles.organicFrame}
        style={{ scale, opacity }}
      >
        <video
          className={styles.videoElement}
          autoPlay
          loop
          muted
          playsInline
          src={JSK2}
        />
      </motion.div>
    </section>
  );
}
