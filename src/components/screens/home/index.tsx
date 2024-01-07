import { FC } from 'react';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import MainScreen from './MainScreen';
import Branches from './Branches';
import Progress from './Progress';
import Partners from './Partners';

import { HomeContent } from '../../../../sanity/sanity-queries/home-queries';

type HomeProps = {
	data: HomeContent
	isError: boolean
};

const Home: FC<HomeProps> = ({ data }) => {
	return (
		<Layout headerPosition='fixed'>
			<Head>
				<title>ART House Holding</title>
				<meta name='description' content='Training Center' />
			</Head>
			<MainScreen />
			<Branches data={data} />
			<Progress data={data} />
			<Partners data={data} />
		</Layout>
	);
};

export default Home;