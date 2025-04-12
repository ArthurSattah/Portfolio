import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import "./mouse-shadow.css";
const MouseShadow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="mouse-shadow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        pointerEvents: "none",
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 0,
      }}
    />
  );
};

export default MouseShadow;
