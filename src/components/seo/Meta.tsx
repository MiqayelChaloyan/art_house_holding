import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'ART House Holding';
const seoDescription = `Welcome to Art House, your premier destination for transformative learning experiences! At Art House, we pride ourselves on being a dynamic training center that offers a diverse array of courses to ignite your passion and elevate your skills. Our curated curriculum spans a wide spectrum of artistic disciplines, ensuring there's something for everyone seeking to explore and master the realms of creativity.`;
const seoUrl = 'https://art-house-holding.vercel.app/en';
const seoOGImage = 'https://arthouse.am/wp-content/uploads/2022/05/2.png';
const seoOGImageAlt = 'ART House Holding';
const seoSiteName = 'ART House Holding';
const seoLocale = 'en';

const Meta: FC<PropsWithChildren> = ({ children }) => {
	return <>
		<DefaultSeo
			title={seoTitle}
			description={seoDescription}
			canonical={seoUrl}
			openGraph={{
				url: seoUrl,
				title: seoTitle,
				description: seoDescription,
				images: [
					{
						url: seoOGImage,
						width: 500,
						height: 500,
						alt: seoOGImageAlt,
					},
				],
				siteName: seoSiteName,
				type: 'website',
				locale: seoLocale
			}}
		/>
		{children}
	</>;
};

export default Meta;