export const staggeredAnimation = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export const heroText = {
  hidden: {
    x: -5,
    y: 5,
    scale: 0.8,
  },

  show: {
    x: 0,
    y: [5, 0],
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export const reveal = {
  hidden: { x: "100vw" },
  show: { x: [100, 0, 50, 0] },
};

export const revealRight = {
  hidden: { x: 0 },
  show: { x: [-200, -200, 0, 0] },
  transition: {
    type: "spring",
    stiffness: 20,
    duration: 1,
    delay: 2,
  },
};

export const lineLeft = {
  hidden: { scale: 0, opacity: 0, width: 0 },
  show: { scale: 1, opacity: 100, width: "90%" },
};

export const footerTop = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      duration: 1,
    },
  },
};
export const footerBottom = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1.5,
    },
  },
};

export const grow = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: [0, 0, 1, 1],
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 20,
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const quote = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      duration: 0.5,
    },
  },
};

export const statsAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      duration: Math.random() * 3,
    },
  },
};

export const svgVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    default: { duration: 4, ease: "easeInOut" },
    fill: { duration: 5, ease: [1, 0, 0.8, 1] },
  },
};

export const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const movePaintit = {
  hidden: {
    x: 0,
    y: 0,
  },
  visible: {
    x: [0, 0, -50, -50, -300, -300],

    y: [0, 0, -100, -100, -150, -150],
    transition: {
      duration: 10,
      ease: "ease",
      delay: 5,
    },
  },
};

export const servicesHeading = {
  hidden: {
    opacity: 0.9,
    y: "50px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: 1.3,
    },
  },
};

export const servicesImages = {
  hidden: {
    opacity: 0.9,
    y: "-50px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: 1.3,
    },
  },
};

export const servicesFlatImage = {
  hidden: {
    rotate: 5,
  },
  show: {
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay: 1.3,
    },
  },
};

export const servicesItemsAnimation = {
  hidden: {
    scale: 0.8,
    y: 100,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.7,
      delay: 1.3,
    },
  },
};

export const testimonials = {
  hidden: {
    opacity: 0.5,
    scale: 0.9,
    x: -50,
    y: 50,
    rotateZ: "-5deg",
    color: "text-blue-800",
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotateZ: "10deg",
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const growAndUp = {
  hidden: {
    y: 100,
    scale: 0.5,
  },
  show: {
    y: 10,
    scale: [1, 1, 0.9, 0.9, 1, 1],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export const rightLeftRotate = {
  hidden: {
    rotate: -5,
  },
  show: {
    rotate: [0, 5, 0, -5, 0],

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export const staggeredClients = {
  hidden: {
    scale: 0,
    x: -100,
  },
  show: {
    scale: 1,
    x: 0,
  },
};

export const ctaAnimation = {
  hidden: {
    scale: [0.9, 1, 1.1, 1],
    x: [-100, 50, 20, 0],
  },
  show: {
    scale: [0.9, 1, 1.1, 1],
    x: [-100, 50, 0],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export const sectionRight = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: "0vw",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const sectionRightHalf = {
  hidden: {
    x: "50vw",
  },
  show: {
    x: "0vw",
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const sectionLeft = {
  hidden: {
    x: "-100vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const phoneCall = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: [0, 1, 0, 1],
    y: [1, 0, 1, 0],
    rotate: [0, 5, 0, 5],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export const contactImageDance = {
  hidden: {
    rotateZ: -2,
    scale: 0.5,
  },
  show: {
    rotateZ: [0, 2, 0, -2, 0],
    scale: [1, 0.9, 1],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
    },
  },
};

export const contactFormAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: [0.5, 0.5, 0.7, 0.7, 1, 1],
    opacity: [0, 0, 0.5, 0, 5, 1, 1],
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
      delay: 3,
    },
  },
};

export const pageInfo = {
  hidden: {
    y: [10, 10],
    // z: 0,
    // scale: [0.9, 0.9],
    opacity: 0,
  },
  show: {
    // scale: [ 1, 1 ],
    y: [10, 10, 1, 1, 0, 0],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 2,
    },
  },
};

export const videoPlayer = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export const heroImage = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    },
  },
};

export const scrollAnimation = {
  hidden: {
    y: "100vh",
    scale: 0,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      duration: 1,
    },
  },
};

export const aboutLeft = {
  hidden: {
    rotate: 190,
  },
  show: {
    rotate: [190, 150, 100, 50, 0],

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export const slideFromTop = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOut",
      duration: 1.5,
    },
  },
};

export const slideFromBottom = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOut",
      duration: 1.5,
    },
  },
};
