import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../../../../sanity/sanity';

import styles from './style.module.sass';

const BranchWeb = ({ item }: any) => {
    const { web_site_title, web_site_url, website_logo } = item;

    const urlForImage = urlFor(website_logo)
        .auto('format')
        .fit('max')
        .url();

    return (
        <Link href={web_site_url} aria-label={`${web_site_url}`} target="_blank">
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.logo}>
                            <Image
                                src={urlForImage}
                                alt={web_site_title}
                                priority
                                className={styles.img}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <p className={styles.title}>{web_site_title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BranchWeb;