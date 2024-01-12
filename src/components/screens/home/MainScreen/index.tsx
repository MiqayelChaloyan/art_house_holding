import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import Container from '@/components/components//container/Container';

import { inter } from '@/constants/font';

import styles from './style.module.sass';

const MainScreen = () => {
    const { t } = useTranslation();

    return (
        <div id="about" className={styles.main}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <Image
                            src={require('../../../../../public/images/watch.png')}
                            alt='watch'
                            priority
                            className={styles.watch}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.text_column}>
                        <Image
                            src={require('../../../../../public/images/ArtHouse.png')}
                            alt='art_house_logo'
                            priority
                            className={styles.art_house_logo}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <p className={`${styles.text} ${inter.className}`}>{t('texts.main-title')}</p>
                    </div>
                    <div className={styles.flash_light_column}>
                        <Image
                            src={require('../../../../../public/images/flashLight.png')}
                            alt='flash_light'
                            priority
                            className={styles.flash_light}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default MainScreen;