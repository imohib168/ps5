// package imports
import clsx from 'clsx';

// component imports
import { Button } from '@/shared/components/ui/button';

type IProps = {
  slideNo: number;
  // eslint-disable-next-line no-unused-vars
  handleToggle: (number: number) => void;
};

const ToggleButtons: React.FC<IProps> = ({ slideNo, handleToggle }) => {
  const buttonClasses = 'p-0 m-0 h-4 w-4 bg-white shadow-md rounded-full';
  const dotClasses = 'h-3 w-3 rounded-full';

  return (
    <div className="flex flex-col space-y-4">
      {['0', '1', '2'].map((index) => (
        <Button
          key={index}
          onClick={() => handleToggle(Number(index))}
          className={buttonClasses}
        >
          <div
            className={clsx(
              dotClasses,
              slideNo == Number(index) && 'border-2 border-primary'
            )}
          />
        </Button>
      ))}
    </div>
  );
};

export default ToggleButtons;
