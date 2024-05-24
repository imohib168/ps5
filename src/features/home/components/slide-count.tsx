import { motion } from 'framer-motion';

type IProps = { slideNo: number };

const SlideCount: React.FC<IProps> = ({ slideNo = 0 }) => {
  const animateProps = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
    transition: { duration: 1.5, ease: 'easeInOut' },
  };

  return (
    <motion.p
      className="text-3xl font-semibold text-primary"
      key={slideNo}
      {...animateProps}
    >
      {`0${slideNo + 1}`} / 03
    </motion.p>
  );
};

export default SlideCount;
