import { ThemeProvider } from "next-themes";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider
			enableSystem={true}
			defaultTheme='light'
			attribute='class'
		>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
