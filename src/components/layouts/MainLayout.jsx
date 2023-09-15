import Head from "next/head";
import Navbar from "../ui/Navbar";
import SocialFloat from "../ui/SocialFloat";
import Footer from "../ui/Footer";
import { useTheme } from "next-themes";
import { useAtom } from "jotai";
import { idiomaAtom } from "@/atoms/themes";

const MainLayout = ({ title, children, ...rest }) => {
	const { theme, setTheme } = useTheme();

	return (
		<div id='__almeyda' {...rest}>
			<Head>
				<title>{`CAFAE | ${title}`}</title>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='description' content='CAFAE PODER JUDICIAL' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar {...{ theme, setTheme }} />
			<SocialFloat />
			<main id='app'>{children}</main>
			<Footer {...{ theme, setTheme }} />
		</div>
	);
};

MainLayout.defaultProps = {
	title: "Poder Judicial",
};

export default MainLayout;
