export default function Footer() {
  return (
    <footer className="w-[1530px] h-[440px] mt-[10px] relative">
      <div className="w-[170px] h-[236px] mt-[0px] ml-[220px] gap-[87px] flex">
        {/* Exclusive */}
        <div className="w-[217px] h-[188px]  gap-[16px] mt-10">
          <h2 className="w-[118px] h-[24px] font-inter font-[700] text-[24px] tracking-wider text-black leading-6 my-4">
            Funira.
          </h2>
          <h2 className="w-[206px] h-[24px] font-sans font-[400] text-[16px] mt-6 leading-6 text-gray-400 my-3">
            400 University Drive Suite 200 Coral Gables,
            <p>FL 33134 USA</p>
          </h2>
        </div>

        {/* Support */}
        <div className="w-[175px] h-[180px] gap-[24px] mt-10">
          <p className="w-[175px] h-[48px] font-sans font-[400] text-[16px] leading-6 text-gray-400 mt-5">
            Links
          </p>
          <p className="w-[175px] h-[48px] font-sans font-[400] text-[16px] leading-6 text-black ">
            Home
          </p>
          <p className="w-[175px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black ">
            Shop
          </p>
          <p className="w-[15px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black mt-6">
            About
          </p>
          <p className="w-[165px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black mt-6">
            Contact
          </p>
        </div>

        {/* Account */}
        <div className="w-[223px] h-[236px] gap-[24px] mt-10">
          <p className="w-[194px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-gray-400 my-5">
            Help
          </p>
          <p className="w-[194px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black my-6">
            Payment Options
          </p>
          <p className="w-[123px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black my-6">
            Returns
          </p>
          <p className="w-[135px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-black my-3">
            Privacy Policies
          </p>
        </div>

        {/* Quick Link  */}
        <div className="w-[109px] h-[196px] gap-[24px] mt-10">
          <p className="w-[109px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-gray-400 mt-5">
            Newsletter
          </p>
          <p className="w-[309px] h-[24px] font-sans font-[400] text-[16px] leading-6 text-gray-400 mt-5 underline underline-offset-8">
            Enter Your Email Address
          </p>
        </div>

        {/* Download App  */}
        <div className="w-[198px] h-[210px] gap-[24px] mt-[85px]">
          <h2 className="w-[148px] h-[28px] font-sans font-[500] text-[16px] leading-7 text-black my-4 underline underline-offset-8">
            SUBCRIBE
          </h2>
        </div>
      </div>

      <div className="text-black text-center py-4 mr-[850px] mt-28">
        © 2023 Funira. All rights reserved.
      </div>
    </footer>
  );
}
