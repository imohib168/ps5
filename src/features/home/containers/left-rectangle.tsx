// package imports
import clsx from 'clsx';
import { motion } from 'framer-motion';

// asset imports
import { ILLUSTRATIONS } from '@/assets';

// component types
type IProps = { slideNo: number };

const LeftRectangle: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { x: '-1000%' },
    animate: { x: slideNo === 0 ? 0 : '-1000%' },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className={clsx(
        'fixed top-0 left-0 h-screen w-[280px] rounded-ee-full drop-shadow-7xl',
        slideNo !== 0 ? 'bg-white' : 'bg-gradient-to-b from-white to-[#ececec]'
      )}
      initial={{ height: '100vh' }}
      animate={{ height: slideNo === 0 ? '100vh' : '25vh' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="relative">
        <motion.div {...animateProps} className="absolute top-24 right-24">
          <ILLUSTRATIONS.Ellipse />
        </motion.div>

        <motion.div
          {...animateProps}
          className="absolute top-56 -left-3"
          transition={{ ...animateProps.transition, delay: 0.1 }}
        >
          <ILLUSTRATIONS.Union />
        </motion.div>

        <motion.div
          {...animateProps}
          className="absolute top-56 right-0"
          transition={{ ...animateProps.transition, delay: 0.1 }}
        >
          <ILLUSTRATIONS.Union />
        </motion.div>

        <div className="absolute top-80 -left-16">
          <ILLUSTRATIONS.Dot />
        </div>

        <motion.div {...animateProps} className="absolute top-80 right-16">
          <ILLUSTRATIONS.Polygon />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeftRectangle;
