import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import TopHeader from '../src/header';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Perfect Pocket</title>
				<meta
					name='description'
					content='PPPO'
				/>
			</Head>
			<TopHeader />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
