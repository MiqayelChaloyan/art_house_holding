import { FC, memo } from 'react';

import Container from '@/components/components/container/Container';

import BranchWeb from '@/components/ui/card';
import Carousel from '@/components/ui/swiper';

import { HomeContent } from '../../../../../sanity/sanity-queries/home-queries';

import styles from './style.module.sass';

type Props = {
    data: HomeContent
};

const Branches: FC<Props> = ({ data }) => {
    const cards = data.our_websites.map((item: any) => <BranchWeb key={item.slug} item={item} />);

    return (
        <div id='branches' className={styles.container}>
            <Container>
                <div className={styles.cards}>
                    {cards}
                </div>
                <div className={styles.slider}>
                    <Carousel cards={cards} />
                </div>
            </Container>
        </div>
    );
};

export default memo(Branches);