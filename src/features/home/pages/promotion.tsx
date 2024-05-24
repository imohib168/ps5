// package imports
import { useState } from 'react';

// component imports
import { GCNavbar } from '@/shared/components';

// feature imports
import {
  LCController,
  LCSlideCount,
  LCToggleButtons,
  CenterAreaContainer,
  Slide1ContentContainer,
  Slide2ContentContainer,
  LeftRectangleContainer,
  Slide3ContentContainer,
  RightRectangleContainer,
} from '@/features/home';

const Promotion = () => {
  const [slideNo, setSlideNo] = useState<number>(0);

  const handleToggle = (number: number) => setSlideNo(number);

  return (
    <>
      <GCNavbar />

      <div className="relative">
        <LCController slideNo={slideNo} />

        <LeftRectangleContainer slideNo={slideNo} />
        <CenterAreaContainer slideNo={slideNo} />
        <RightRectangleContainer slideNo={slideNo} />

        <Slide1ContentContainer slideNo={slideNo} />
        <Slide2ContentContainer slideNo={slideNo} />
        <Slide3ContentContainer slideNo={slideNo} />
      </div>

      <div className="absolute top-96 left-48">
        <LCToggleButtons handleToggle={handleToggle} slideNo={slideNo} />
      </div>

      <div className="absolute bottom-32 right-20">
        <LCSlideCount slideNo={slideNo} />
      </div>
    </>
  );
};

export default Promotion;
