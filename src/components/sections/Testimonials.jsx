import { useScroll } from "@/src/components/useScroll";
import { feedback } from "@/src/constants";
import styles from "@/src/styles";
import { grow, growAndUp, testimonials } from "@/src/utils/Animations";
import { m } from "framer-motion";
import { sectionLeft, sectionRight } from "../../utils/Animations";

const Testimonials = () => {
  const [element, controls] = useScroll();

  return (
    <section
      ref={element}
      id="clients"
      className={`${styles.flexCenter} relative mt-24 w-screen flex-col overflow-hidden sm:mt-16 md:min-h-screen md:snap-center`}
    >
      <div className="blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full" />

      <m.div
        ref={element}
        initial="hidden"
        variants={sectionRight}
        animate={controls}
        transition={{ duration: 1 }}
        className="relative z-[1] mb-6 flex w-full flex-col items-center justify-center sm:mb-16"
      >
        <div className="flex w-full flex-col px-4 sm:px-32 md:flex-row">
          <m.div
            ref={element}
            initial="hidden"
            variants={testimonials}
            animate={controls}
            transition={{ duration: 2 }}
            className="flex w-full items-center justify-center md:w-1/2"
          >
            <h2 className={`${styles.heading2} sm:mt-9`}>
              What People are <br className="hidden sm:block" /> saying about us
            </h2>
          </m.div>
          <m.div
            ref={element}
            initial="hidden"
            variants={growAndUp}
            animate={controls}
            transition={{ duration: 2 }}
            className="mt-6 flex w-full items-center justify-center md:mt-0 md:w-1/2"
          >
            <p className={`${styles.paragraph} text-justify`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque id
              consectetur eum nobis, placeat quos cum reiciendis? Possimus vero
              ea non ipsa cupiditate magni in, ut, debitis id asperiores dicta
              aperiam eius pariatur adipisci natus a nostrum veritatis. Quidem
              repudiandae culpa recusandae perferendis deleniti dolorem,
              voluptate itaque facere maiores consequatur?
            </p>
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default Testimonials;
