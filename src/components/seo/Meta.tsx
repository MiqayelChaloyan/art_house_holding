import { FC, PropsWithChildren } from 'react';

import { DefaultSeo } from 'next-seo';

const seoTitle = 'ART House Holding';
const seoDescription = `Welcome to Art House, your premier destination for transformative learning experiences! At Art House, we pride ourselves on being a dynamic training center that offers a diverse array of courses to ignite your passion and elevate your skills. Our curated curriculum spans a wide spectrum of artistic disciplines, ensuring there's something for everyone seeking to explore and master the realms of creativity.`;
const seoUrl = 'https://art-house-holding.vercel.app/en';
const seoOGImage = 'data:image/png;base64,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';
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