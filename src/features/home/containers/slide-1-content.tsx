// package imports
import { motion } from 'framer-motion';

// component types
type IProps = { slideNo: number };

const Slide1Content: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: slideNo === 0 ? 1 : 0 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  return (
    <motion.div
      {...animateProps}
      className="fixed top-[18%] w-2/4 text-center left-1/2 -translate-x-1/2 space-y-12"
    >
      <p className="text-6xl w-[500px] max-w-full mx-auto text-text-primary font-semibold">
        Are you ready to play the Game?
      </p>

      <p className="description-text">
        The next generation of players begins with play station 5
      </p>

      <p className="text-2xl text-primary font-semibold">DISCOVER</p>
    </motion.div>
  );
};

export default Slide1Content;
