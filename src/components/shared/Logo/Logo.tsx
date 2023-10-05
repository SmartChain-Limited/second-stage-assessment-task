import LogoImg from "../../../assets/hlogo.svg";

const Logo = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:w-[1200px] ">
        <div className="lg:ml-[1350px]">
          <img src={LogoImg} alt="" className="ml-[80px]" />
          <p className="text-[#3C6AAC] font-normal text-[30px]">healthXP</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
