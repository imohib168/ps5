// package imports
import { motion } from 'framer-motion';

// component types
type IProps = { slideNo: number };

const Slide2Content: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: slideNo === 1 ? 1 : 0 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  return (
    <motion.div {...animateProps} className="content-container">
      <p className="description-text">The future of gaming in your palm</p>

      <motion.p {...animateProps} className="label-text">
        Playstation 5 DualShock
      </motion.p>
    </motion.div>
  );
};

export default Slide2Content;
