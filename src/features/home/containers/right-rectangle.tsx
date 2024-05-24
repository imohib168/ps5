// package imports
import clsx from 'clsx';
import { motion } from 'framer-motion';

// asset imports
import { ILLUSTRATIONS } from '@/assets';

// component types
type IProps = { slideNo: number };

const RightRectangle: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: slideNo === 0 ? 1 : 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <motion.div
      className={clsx(
        'fixed top-0 right-0 h-screen w-[250px] rounded-es-full drop-shadow-7xl',
        slideNo !== 0 ? 'bg-white' : 'bg-gradient-to-b from-white to-[#ececec]'
      )}
      initial={{ height: '100vh' }}
      animate={{ height: slideNo === 0 ? '100vh' : '20vh' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="relative">
        <div className="z-10 absolute top-40 -right-24">
          <ILLUSTRATIONS.Dot />
        </div>

        <motion.div {...animateProps} className="z-10 absolute top-44 left-3">
          <ILLUSTRATIONS.Rectangle />
        </motion.div>

        <motion.div
          {...animateProps}
          className="z-10 absolute top-80 left-1 rotate-180"
        >
          <ILLUSTRATIONS.Polygon />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RightRectangle;
