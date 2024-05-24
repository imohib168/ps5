import { LCFeatureLabel } from '@/features/home';

const ControllerFeatures = () => {
  return (
    <div className="absolute top-12 left-0 w-full items-center flex justify-between h-full">
      <div className="flex flex-col justify-center space-y-36 w-full -ml-52">
        <LCFeatureLabel label="Ergonomic Design" className="ml-8" />
        <LCFeatureLabel label="Longer Battery life" className="-ml-12" />
        <LCFeatureLabel label="Wireless Charging" />
      </div>

      <div className="flex flex-col justify-center space-y-36 -mr-72">
        <LCFeatureLabel label="Two-tone design" className="-ml-20" />
        <LCFeatureLabel label="3D Audio" className="mr-12" />
        <LCFeatureLabel label="Additional triggers" className="-ml-12" />
      </div>
    </div>
  );
};

export default ControllerFeatures;
