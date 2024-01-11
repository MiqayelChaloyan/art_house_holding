import { urlFor } from '../../../../sanity/sanity';

import styles from './style.module.sass';

const Partner = ({ item }: any) => {
    const { alt } = item;

    const urlForSvg = urlFor(item)
        .auto('format')
        .fit('max')
        .url();

    return (
        <div className={styles.co_worker}>
            <div className={styles.logo}>
                <img src={urlForSvg} alt={alt} className={styles.svg_icon} />
            </div>
        </div>
    );
};

export default Partner;