import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

import styles from './MainSlider.module.scss'
import clsx from 'clsx'

import mockupPhone1_1 from '@/assets/images/main-slider/mockup-phone-1-1.png'
import mockupPhone1_2 from '@/assets/images/main-slider/mockup-phone-1-2.png'
import mockupPhone2 from '@/assets/images/main-slider/mockup-phone-2.png'
import mockupMacbook3 from '@/assets/images/main-slider/mockup-mackbook-for-three-slide.png'
import mockupMacbook4 from '@/assets/images/main-slider/mockup-mackbook-for-four-slide.png'
import mockupMacbook5 from '@/assets/images/main-slider/mockup-mackbook-for-five-slide.png'

const MainSlider = () => {
	return (
		<div className={styles.mainSliderWrapper}>
			<Swiper
				// install Swiper modules
				className={styles.mainSwiper}
				modules={[Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={false}
				loop={true}
				speed={2000}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide className={clsx(styles.slide, styles.slideOne)}>
					<div className={styles.wrapper}>
						<div className={styles.images}>
							<div className={styles.image}>
								<img
									src={mockupPhone1_1}
									alt="mockup phone one"
								/>
							</div>
							<div className={styles.image}>
								<img
									src={mockupPhone1_2}
									alt="mockup phone two"
								/>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={clsx(styles.slide, styles.slideTwo)}>
					<div className={styles.wrapper}>
						<div className={clsx(styles.imageTwo)}>
							<img
								src={mockupPhone2}
								alt="mockup phone two"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={clsx(styles.slide, styles.slideThree)}>
					<div className={styles.wrapper}>
						<div className={clsx(styles.imageThree)}>
							<img
								src={mockupMacbook3}
								alt="mockup mackbook"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={clsx(styles.slide, styles.slideFour)}>
					<div className={styles.wrapper}>
						<div className={clsx(styles.imageFour)}>
							<img
								src={mockupMacbook4}
								alt="mockup mackbook"
							/>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={clsx(styles.slide, styles.slideFive)}>
					<div className={styles.wrapper}>
						<div className={clsx(styles.imageFive)}>
							<img
								src={mockupMacbook5}
								alt="mockup mackbook"
							/>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default MainSlider
