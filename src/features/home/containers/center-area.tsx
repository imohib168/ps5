// package imports
import { motion } from 'framer-motion';

// asset imports
import { ILLUSTRATIONS } from '@/assets';

// component types
type IProps = { slideNo: number };

const CenterArea: React.FC<IProps> = ({ slideNo }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: slideNo === 0 ? 1 : 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <>
      <div className="fixed top-24 left-96">
        <ILLUSTRATIONS.Dot />
      </div>

      <div className="fixed bottom-52 right-80">
        <motion.div
          initial={{ x: '70%', y: '60%' }}
          animate={{
            x: slideNo === 0 ? 0 : '70%',
            y: slideNo === 0 ? 0 : '60%',
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ILLUSTRATIONS.Dot />
        </motion.div>
      </div>

      <motion.div {...animateProps} className="fixed -bottom-2 right-32">
        <ILLUSTRATIONS.Ellipse />
      </motion.div>

      <motion.div {...animateProps} className="fixed bottom-24 right-56">
        <ILLUSTRATIONS.Union />
      </motion.div>
    </>
  );
};

export default CenterArea;
