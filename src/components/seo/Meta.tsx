import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'ART House Holding';
const seoDescription = `Welcome to Art House, your premier destination for transformative learning experiences! At Art House, we pride ourselves on being a dynamic training center that offers a diverse array of courses to ignite your passion and elevate your skills. Our curated curriculum spans a wide spectrum of artistic disciplines, ensuring there's something for everyone seeking to explore and master the realms of creativity.`;
const seoUrl = 'https://art-house-holding.vercel.app/en';
const seoOGImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farthouse.am%2F&psig=AOvVaw3n6R7tQ7ZWi9fGrELo3xXY&ust=1704893199096000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCeosa00IMDFQAAAAAdAAAAABAI';
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