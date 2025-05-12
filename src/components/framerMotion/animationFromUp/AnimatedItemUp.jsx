
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedItemRight = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50,scale: 0.5 }}
      animate={inView ? { opacity: 1, x: 0 ,scale: 1} : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItemRight;