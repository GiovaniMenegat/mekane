import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="/images/banners/1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/banners/2.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}