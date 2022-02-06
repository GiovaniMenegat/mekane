import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner1 from '../../../public/images/banners/1.jpg'
import banner2 from '../../../public/images/banners/2.jpg'

import styles from './styles.module.scss'

export function Carousel() {
    return (
        <section>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination]}
                navigation
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                loop
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Image 
                        src={banner1}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src={banner2}
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}