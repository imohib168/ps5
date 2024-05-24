// package imports
import { motion } from 'framer-motion';

// component types
type IProps = { slideNo: number };

const Slide3Content: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: slideNo === 2 ? 1 : 0 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  return (
    <motion.div {...animateProps} className="content-container">
      <p className="description-text">Evolve your Experience around</p>

      <motion.p {...animateProps} className="label-text">
        Latest Technologies
      </motion.p>
    </motion.div>
  );
};

export default Slide3Content;
