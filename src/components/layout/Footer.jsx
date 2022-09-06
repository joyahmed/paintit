import { useScroll } from "@/src/components/useScroll";
import { footerLinks } from "@/src/constants";
import { m } from "framer-motion";
import Image from "next/image";
import styles from "../../styles";
import { footerBottom, footerTop } from "../../utils/Animations";
import PaintAnimation from "../PaintAnimation";
import SocialMedia from "./nav/SocialMedia";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <section
      ref={element}
      className={`flex w-screen flex-col items-center justify-end px-4 pb-10 md:min-h-screen md:snap-center`}
    >
      <m.div
        ref={element}
        initial="hidden"
        variants={footerTop}
        animate={controls}
        className={`${styles.flexStart} w-site mb-8 flex-col md:flex-row`}
      >
        <div className="mr-10 flex flex-[1] flex-col justify-start">
          <div
            ref={element}
            className="relative flex h-32 items-start justify-start "
          >
            <PaintAnimation path="footer" />
          </div>

          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem hic
            molestiae animi inventore alias debitis repellendus obcaecati.
            Saepe, perferendis expedita!
          </p>
        </div>

        <div className="mt-4 flex w-full flex-[1.5] flex-row flex-wrap justify-between">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`my-4 flex min-w-[150px] flex-col ss:my-0`}
            >
              <h4 className="font-poppins text-[18px] font-medium leading-[27px] dark:text-white">
                {footerlink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`cursor-pointer font-poppins text-[16px] font-normal leading-[24px] hover:text-themeDarker dark:text-dimWhite dark:hover:text-secondary ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </m.div>

      <m.div
        ref={element}
        initial="hidden"
        variants={footerBottom}
        animate={controls}
        transition={{ duration: 1, delay: 2 }}
        className="w-site flex flex-col items-center justify-between border-t-[1px] border-t-blue-400 pt-6 md:flex-row"
      >
        <p className="text-center text-[18px] font-semibold leading-[27px] text-themeDarkest dark:text-white tracking-wider">
          Copyright Ⓒ 2022 PaintIt. All Rights Reserved.
        </p>
        <SocialMedia />
      </m.div>
    </section>
  );
};

export default Footer;
