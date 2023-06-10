import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './comicsSlider.module.scss';
import Slide1 from '../../assets/img/comics_slider1.jpg';
import Slide2 from '../../assets/img/comics_slider2.jpg';
import Slide3 from '../../assets/img/comics_slider3.jpg';
import Slide4 from '../../assets/img/comics_slider4.jpg';
import Slide5 from '../../assets/img/comics_slider5.jpg';
import Slide6 from '../../assets/img/comics_slider6.jpg';
import Slide7 from '../../assets/img/comics_slider7.jpg';



SwiperCore.use([Autoplay, Pagination, Navigation]);

function MySlider() {
    return (
        <div className={styles['com-slider']}>
                <div className={styles['com-slider__body']}>
                    <Swiper
                        className={styles['slider']}
                        slidesPerView={1.5}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation
                        loop
                    >
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide1} alt={Slide1} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide2} alt={Slide2} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide3} alt={Slide3} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide4} alt={Slide4} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide5} alt={Slide5} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide6} alt={Slide6} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img className={styles['com-slider__img']} src={Slide7} alt={Slide7} />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
    );
}

export default MySlider;
