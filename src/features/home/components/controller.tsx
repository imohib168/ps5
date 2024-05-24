// package imports
import { motion } from 'framer-motion';

// feature imports
import { LCControllerFeatures } from '@/features/home';

// asset imports
import { ILLUSTRATIONS } from '@/assets';

// component types
type IProps = { slideNo: number };

const Controller: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0, scale: 0.7, y: 0 },
    animate: {
      opacity: 1,
      scale: slideNo === 0 ? 0.9 : slideNo === 1 ? 0.85 : 0.7,
      y: slideNo === 0 ? '40%' : slideNo === 1 ? '5%' : 0,
    },
    transition: { duration: 1 },
  };

  return (
    <div className="fixed -bottom-72 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <motion.div {...animateProps}>
        <div className="relative">
          <ILLUSTRATIONS.Controller />

          {slideNo === 2 && <LCControllerFeatures />}
        </div>
      </motion.div>
    </div>
  );
};

export default Controller;
