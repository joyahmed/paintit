import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import Image from "next/image";
import { paintBrush, girlPainter } from "../../assets";
import styles, { layout } from "../../styles";
import {
  sectionRight,
  servicesFlatImage,
  servicesHeading,
  servicesImages,
} from "../../utils/Animations";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <section
      ref={element}
      id="services"
      className={`relative my-10 flex min-h-screen w-screen flex-col items-center justify-between space-y-10 overflow-hidden sm:mt-32 sm:px-14 md:snap-center xl:mt-40`}
    >
      {/* <div className='absolutez-[0] w-[50%] h-[50%] -left-[50%] rounded-full blue__gradient top-10' /> */}
      <m.div
        ref={element}
        initial="hidden"
        variants={sectionRight}
        animate={controls}
        transition={{ duration: 1 }}
        className="w-site z-[1] flex flex-col items-center justify-center sm:min-h-screen sm:flex-row"
      >
        <m.div
          ref={element}
          initial="hidden"
          variants={servicesFlatImage}
          animate={controls}
          transition={{ duration: 2 }}
          className={`${layout.sectionImgReverse} relative mt-[10rem] sm:mt-0 sm:min-h-screen`}
        >
          <div className="ease group absolute -top-36 right-20 z-[5] rotate-12 opacity-70 transition-all duration-200 hover:rotate-0 sm:top-20 xl:top-48 xl:right-60 ">
            <Image
              src={paintBrush}
              alt="paint-brush"
              width={200}
              height={300}
              className="rounded-md opacity-50 group-hover:opacity-100"
            />
          </div>
          <m.span
            ref={element}
            initial="hidden"
            variants={servicesImages}
            animate={controls}
            transition={{ duration: 1 }}
            className="relative h-[22rem] w-[22rem] sm:h-[20rem] sm:w-[25rem]"
          >
            <Image
              src={girlPainter}
              alt="girl-painter"
              // width={350}
              // height={250}
              layout="fill"
              priority
              className="rounded-md"
            />
          </m.span>

          {/* gradient start */}
          <div className="white__gradient rouonded-full absolute -left-1/2 top-0 z-[3] h-[50%] w-[20%] rounded-full" />
          <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
          <div className="blue__gradient__light absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full" />
          {/* gradient end */}
        </m.div>

        <m.div
          ref={element}
          initial="hidden"
          variants={servicesHeading}
          animate={controls}
          transition={{ duration: 1 }}
          className={`${layout.sectionInfo} mt-[5rem] px-4 sm:mt-0 sm:px-0`}
        >
          <h2 className={`${styles.heading2}`}>
            Looking to get <br className="hidden sm:block" /> your home repainted
          </h2>
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </m.div>
      </m.div>
    </section>
  );
};

export default ServicesSection;
