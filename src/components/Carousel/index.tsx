import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss'

type Images = {
    slug: string;
    image: string;
}

interface ImagesProps {
    images: Images[]
}

export function Carousel({ images }: ImagesProps) {
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
                autoHeight
                pagination={{ clickable: true }}
            >
                {images.map(image => 
                    <SwiperSlide key={image.image}>
                        <img
                            src={image.image}
                            alt={image.slug}
                        />
                    </SwiperSlide>
                )}

            </Swiper>
        </section>
    )
}