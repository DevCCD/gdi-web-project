import { useRouter } from "next/router";
import { useEffect } from "react";

const Nosotros = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace("/nosotros/quienes-somos");
	}, []);

	return null;
};

export default Nosotros;
