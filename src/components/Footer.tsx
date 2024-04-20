import x_icon from "@/assets/svgs/twitter-icon.svg";
import facebook_icon from "@/assets/svgs/facebook-icon.svg";
import instagram_icon from "@/assets/svgs/instagram-icon.svg";
import Image from "next/image";

const styles = {
  main: "bg-[#fff] w-full text-[#444444] text-lg px-10 xl:px-32 py-7",
  wrapper: "w-full flex flex-col lg:flex-row justify-between mt-2",
  optionsWrapper: "flex flex-col mb-12 lg:mb-0  gap-3",
  options:
    "cursor-pointer text-xs lg:text-sm text-[#012970] hover:text-[#4154f1]",
  helpWrapper: "flex flex-col mb-12 lg:mb-0 gap-3",
  getConnectedWrapper: "flex flex-col mb-12 lg:mb-0 gap-3",
  socialIcons: "ml-0 lg:ml-10 mt-3 flex gap-4 items-center",
  informedWrapper:
    "flex flex-col items-center lg:mb-0 gap-3 w-full md:w-[30rem] mx-auto",
  subscribe:
    "font-semibold text-white bg-[#4154f1] h-full px-4 outline-none border-none text-sm rounded-tr-md rounded-br-md",
  anchor: "hover:text-[#4154f1] text-[#012970]",
};

const Footer = () => {
  return (
    <div className="md:py-[5rem] flex flex-col gap-[3rem] bg-[#fafbff]">
      <form className={styles?.informedWrapper}>
        <p className="text-center text-xl lg:text-2xl font-semibold text-[#012970]">
          Our Newsletter
        </p>
        <p className="text-center">
          Subscribe to our notification to receive updates of new products and
          services.
        </p>
        <div className="w-full md:w-[35rem] flex justify-between items-center border h-[3rem] rounded-md bg-white">
          <input
            type={"email"}
            placeholder={"Enter email"}
            className="px-2 py-2 w-full outline-none border-none text-sm rounded-tl-md rounded-bl-md"
          />
          <button type="submit" className={styles?.subscribe}>
            Subscribe
          </button>
        </div>
      </form>

      <div className={styles?.main}>
        <div>
          <div className="cursor-pointer">
            {/* <img src={onics_logo} alt="" className="h-16" /> */}
          </div>
          <div className={styles?.wrapper}>
            <div className={styles?.getConnectedWrapper}>
              <p className="font-semibold text-xl text-[#012970]">
                Get connected
              </p>
              <p className="max-w-[22rem] text-xs lg:text-sm">
                Join the conversations on social media to stay connected with
                our latest products and services.
              </p>
              <div className={styles?.socialIcons}>
                <Image
                  className="h-[33px] w-[33px] cursor-pointer"
                  src={facebook_icon}
                  alt=""
                />
                <Image
                  className="h-[27px] w-[27px] cursor-pointer"
                  src={instagram_icon}
                  alt=""
                />
                <Image
                  className="h-[33px] w-[33px] cursor-pointer"
                  src={x_icon}
                  alt=""
                />
              </div>
            </div>
            <div className={styles?.optionsWrapper}>
              <p className="text-[#012970] uppercase font-semibold">
                useful links
              </p>
              <p className={styles?.options}>About</p>
              <p className={styles?.options}>Services</p>
              <p className={styles?.options}>Contact</p>
            </div>

            <div className={styles?.helpWrapper}>
              <p className="font-semibold text-[#012970] uppercase">Help</p>
              <p className={styles?.options}>Customer Support</p>
              <p className={styles?.options}>Delivery Details</p>
            </div>
          </div>
        </div>
        <div className="mt-0 lg:mt-12 text-xs lg:text-sm">
          <div>
            <p className="text-center">
              <a href="/#" className={styles?.anchor}>
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/#" className={styles?.anchor}>
                Terms of Use
              </a>{" "}
              |{" "}
              <a href="/#" className={styles?.anchor}>
                Refund Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
