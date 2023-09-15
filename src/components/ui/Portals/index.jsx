import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, target }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		document.documentElement.style.overflow = "hidden";
		return () => {
			setMounted(false);
			// eliminar el overflow hidden
			document.documentElement.style.overflow = "auto";
		};
	}, []);

	return mounted
		? createPortal(children, document.getElementById(target))
		: null;
};

export default Portal;
