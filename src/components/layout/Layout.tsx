import React from 'react';
import Meta from '@/components/seo/Meta';
import Header from './Header';
import Footer from './Footer';
import ModalLoading from '../components/loading';

interface LayoutProps {
	children: React.ReactNode
	headerPosition?: 'fixed' | 'sticky'
};

const Layout: React.FC<LayoutProps> = ({ children, headerPosition }) => {

	return (
		<Meta>
			<div className="wrapper">
				<div className="wrapper-content">
					<Header typePosition={`${headerPosition === 'fixed' ? 'fixed' : 'sticky'}`} />
					<main className="wrapper-main">{children}</main>
				</div>
				<Footer />
			</div>
			<ModalLoading />
		</Meta>
	);
};

export default Layout;
