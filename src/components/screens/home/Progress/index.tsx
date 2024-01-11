import { FC, memo } from 'react';

import Container from '@/components/components//container/Container';
import ProgressBar from '../../../ui/progressBar';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import ArianAMU from '@/constants/font';

import styles from './style.module.sass';

type Props = {
    data: HomeContent
};

const Progress: FC<Props> = ({ data }) => {
    const uploadProgress = data.progress_section.slice(0, 4);

    const items = uploadProgress.map((item: any) => (
        <div key={item.slug} className={styles.column}>
            <ProgressBar value={0} quantity={item.quantity} />
            <p className={`${styles.title} ${ArianAMU.className}`}>{item.title}</p>
        </div>
    ));

    return (
        <div id='circle-progress' className={styles.container}>
            <Container>
                <div className={styles.row}>
                    {items}
                </div>
            </Container>
        </div>
    );
};

export default memo(Progress);
