import Image from 'next/image';
import imgs from '../../../asset/home.png'
const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={imgs} alt='' width={1000} height={400} />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Your Everyday Essentials!</h1>
            <p className="py-6">Discover a world of delightful treasures and everyday essentials all in one place. Our mission is to provide you with a seamless shopping experience thats as easy as 1-2-3. From fashion and accessories to home decor and gadgets, weve handpicked a curated selection that suits your lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;