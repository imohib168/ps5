// package imports
import { motion } from 'framer-motion';

// util imports
import { cn } from '@/shared/utils';

// component types
type IProps = {
  label: string;
  className?: string;
};

const FeatureLabel: React.FC<IProps> = ({ label, className }) => {
  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.6 },
  };

  return (
    <motion.p
      {...animateProps}
      className={cn(
        'text-center text-primary w-[220px] font-bold bg-gradient-to-b from-[#0429AD]/[10%] to-[#AD04A6]/[10%] py-2 px-8 custom-border-radius border border-primary',
        className
      )}
    >
      {label}
    </motion.p>
  );
};

export default FeatureLabel;
