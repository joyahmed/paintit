const PageHeading = ({
  element,
	motion,
	variants,
	animate,
	controls,
	text1,
	text2
}) => {
	return (
    <motion.h1
      ref={element}
      variants={variants}
      animate={controls}
			className={`text-[50px] font-bold tracking-wider mb-5`}
		>
			<span className='text-gradient'>{text1}</span> {text2}
		</motion.h1>
	);
};

export default PageHeading;
