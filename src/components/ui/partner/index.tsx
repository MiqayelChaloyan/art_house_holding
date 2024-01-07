import Image from 'next/image';

import { urlFor } from '../../../../sanity/sanity';

import styles from './style.module.sass';

const Partner = ({ item }: any) => {
    const { alt } = item;

    const urlForImage = urlFor(item)
        .auto('format')
        .fit('max')
        .url();

    return (
        <div className={styles.co_worker}>
            <div className={styles.logo}>
                <Image
                    src={urlForImage}
                    alt={alt}
                    priority
                    className={styles.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

export default Partner;