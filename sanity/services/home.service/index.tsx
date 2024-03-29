import { groq } from 'next-sanity';
import { client } from '../../schemas/client';
import { HomeContent } from '../../sanity-queries/home-queries';

export const getHomeData = async (language: string): Promise<HomeContent[]> => {
    const query = groq`*[_type == "home"] {
        "_id": _id,
        "our_websites": our_websites[] {
            "company_name": company_name,
            "words": words[$language],
            "website_logo_front": website_logo_front,
            "website_logo_back": website_logo_back,
            "slug": slug.current,
            "web_site_url": web_site_url
        },
        "progress_section": progress_section[] {
            "title": title[$language],
            "slug": slug.current,
            "quantity": quantity
        },
        "co_workers": co_workers,
    }`;

    try {
        const data = await client.fetch(query, { language: language || 'am'  });
        return data;
    } catch (err) {
        throw err;
    }
};