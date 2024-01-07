import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/hooks/useStore';
import { closeModalLoading } from '@/store/stateLoadingLanguage';

import cn from 'classnames';

import styles from './ModalLoading.module.sass';


const ModalLoading = () => {
    const isOpen = useAppSelector((state) => state.stateModalLoadingLanguage.isOpen);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => dispatch(closeModalLoading()), 1000);
        }
    }, [isOpen]);    

    return (
        <div className={cn(styles.box, `${isOpen ? styles.boxOpen : ''}`)}>
            <div className={styles.wrap}>
                <div className={styles.loader}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    );
};

export default ModalLoading;