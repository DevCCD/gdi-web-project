import { motion } from "framer-motion";

const Button = ({ children, className, ...rest }) => {
	return (
		<motion.button
			className={`relative leading-7 text-base text-white bg-[rgb(66,152,239)] rounded px-6 py-3 capitalize w-fit font-bold cursor-pointer hover:bg-[rgb(44,118,191)] ${className}`}
			whileTap={{ scale: 0.94 }}
			{...rest}
		>
			{children}
		</motion.button>
	);
};

export default Button;
