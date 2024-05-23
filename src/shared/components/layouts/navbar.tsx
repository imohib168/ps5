import { LOGOS } from '@/assets';
import { Button } from '@/shared/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white h-[90px] w-full fixed shadow-2xl custom-shadow-1 inset-0 z-[99]">
      <div className="w-[1200px] mx-auto h-full flex justify-between items-center">
        <div>
          <LOGOS.PS5 />
        </div>

        <div className="flex-1">
          <ul className="flex justify-center items-center space-x-24">
            <li className="link-text active">Home</li>
            <li className="link-text">About</li>
            <li className="link-text">Community</li>
            <li className="link-text">Store</li>
          </ul>
        </div>

        <div className="space-x-3">
          <Button variant="ghost" className="text-primary text-lg font-bold">
            Login
          </Button>

          <button className="rounded-full border-2 border-primary px-8 py-1 text-primary font-bold">
            Play
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
