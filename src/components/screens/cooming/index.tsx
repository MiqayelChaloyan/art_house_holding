// import { useEffect, useState } from 'react';

// import styles from './style.module.sass';
// import Container from '@/components/components/container/Container';

// const targetTime = new Date("2024-04-30").getTime();

// const ComingSoon = () => {
//     const [currentTime, setCurrentTime] = useState(Date.now());

//     const timeBetween = targetTime - currentTime;
//     const seconds = Math.floor((timeBetween / 1000) % 60);
//     const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
//     const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTime(Date.now());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className={styles.contain}>
//            {/* <Container> */}
//    <h3>Website is Under Maintenance</h3>
//     <h1 className={styles.title}>We're <span>Launching</span> Soon</h1>


//             <div className={styles.counter}>
//                 <div className={styles.timer}>
//                     <p className={styles.number}> {days} </p>
//                     <span className={styles.text}> Days </span>
//                 </div>

//                 <div className={styles.timer}>
//                     <p className={styles.number}> {hours} </p>
//                     <span className={styles.text}> Hours </span>
//                 </div>

//                 <div className={styles.timer}>
//                     <p className={styles.number}> {minutes} </p>
//                     <span className={styles.text}> Minutes </span>

//                 </div>

//                 <div className={styles.timer}>
//                     <p className={styles.number}> {seconds} </p>
//                     <span className={styles.text}> Seconds</span>
//                 </div>
//             </div>

//             <button>
//                 Go back
//             </button>
//            {/* </Container> */}
//         </div>
//     )
// };

// export default ComingSoon;


import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from 'next/image'

import Container from "@/components/components/container/Container";

import rocket from '../../../../public/images/rocket.png';

import styles from './style.module.sass';

const ComingSoon: NextPage = () => {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("04/30/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setPartyTime(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <Container>
                <div className={styles.row}>
                    <h3 className={styles.context}>Website is Under Maintenance</h3>
                    <h1 className={styles.title}>We&rsquo;re <span>Launching</span> Soon</h1>
                    <div className={styles.timer_wrapper}>
                        <div className={styles.timer_inner}>
                            <div className={styles.timer_segment}>
                                <span className={styles.time}>{days < 10 ? `0` + days : days}</span>
                                <span className={styles.label}>Days</span>
                            </div>
                            <div className={styles.timer_segment}>
                                <span className={styles.time}>{hours < 10 ? `0` + hours : hours}</span>
                                <span className={styles.label}>Hours</span>
                            </div>
                            <div className={styles.timer_segment}>
                                <span className={styles.time}>{minutes < 10 ? `0` + minutes : minutes}</span>
                                <span className={styles.label}>Minutes</span>
                            </div>
                            <div className={styles.timer_segment}>
                                <span className={styles.time}>{seconds < 10 ? `0` + seconds : seconds}</span>
                                <span className={styles.label}>Seconds</span>
                            </div>
                        </div>
                    </div>

                    <Link href='/' className={styles.button}>Go back</Link>
                </div>

                <Image
                    src={rocket}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={styles.rocket}
                />
            </Container>
        </div>
    );
};

export default ComingSoon;