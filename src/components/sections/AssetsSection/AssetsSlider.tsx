// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import types from Swiper
// import type { Swiper as SwiperType } from 'swiper'

import Button from '@/components/ui/Button/Button'
import IconUnity from '@/components/ui/IconUnity/IconUnity'
import DecorEllipse from '@/components/ui/DecorEllipse/DecorEllipse'
import { sliderItems, type SliderAssetsItems } from '@/constants/assets'
import './AssetsSlider.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const AssetsSlider = () => {
	return (
		<div className="assets-slider-wrapper">
			<Swiper
				className="assets-swiper"
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView="auto"
				breakpoints={{
					1250: { slidesPerView: 2.95 },
					1297: { slidesPerView: 3 },
				}}
				centeredSlides={true}
				speed={800}
				// watchSlidesProgress={true}
				grabCursor={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					el: '.assets-swiper-pagination',
					clickable: true,
				}}
				navigation={{
					nextEl: '.assets-swiper-button-next',
					prevEl: '.assets-swiper-button-prev',
				}}
				// onSlideChange={(swiper) => {
				// 	console.log('slide change')

				// }}
				// onSwiper={(swiper) => {}}
			>
				{sliderItems.map((item: SliderAssetsItems, index: number) => (
					<SwiperSlide key={index}>
						<div className="card">
							<div className="card__custom-shape">
								{' '}
								<svg
									width="411"
									height="74"
									viewBox="0 0 411 74"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M390.827 74H200.763C194.505 74 188.608 71.0708 184.827 66.0844L171.049 47.9156C167.268 42.9292 161.371 40 155.113 40H20.0163C11.5174 40 3.94672 34.6287 1.13911 26.607C-3.41211 13.6035 6.23929 0 20.0163 0H390.827C401.872 0 410.827 8.95431 410.827 20V54C410.827 65.0457 401.872 74 390.827 74Z"
										fill="#262626"
									/>
								</svg>
							</div>
							<div className="card__decors">
								<DecorEllipse
									className="card__decor--ellipse"
									color={item.decorEllipseColor}
									count={9}
								/>
								<div
									className="card__label"
									style={{ backgroundColor: item.label.bgColor }}>
									<span style={{ color: item.label.color }}>{item.label.text}</span>
								</div>
							</div>
							<div className="card__media">
								<div className="card__image">
									<img src={item.imageSrc} />
								</div>
							</div>
							<div className="card__content">
								<h3 className="card__title">{item.title}</h3>
								<div className="card__button-wrapper">
									<Button
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										variant="primary"
										className="card__button">
										<IconUnity />
										<span>Get Assets</span>
									</Button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="assets-slider-wrapper__controls">
				<div className="assets-swiper-pagination"></div>
				<div className="assets-custom-nav">
					<button className="swiper-button-prev assets-swiper-button-prev">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M17 19.5289L15.5127 21L7.41204 12.9826C7.28147 12.8541 7.17784 12.7013 7.10712 12.5331C7.03641 12.3648 7 12.1843 7 12.0021C7 11.8198 7.03641 11.6394 7.10712 11.4711C7.17784 11.3028 7.28147 11.1501 7.41204 11.0216L15.5127 3L16.9986 4.47109L9.39552 12L17 19.5289Z"
								fill="#C4FF00"
							/>
						</svg>
					</button>
					<button className="swiper-button-next assets-swiper-button-next">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7 4.47109L8.48725 3L16.588 11.0174C16.7185 11.1459 16.8222 11.2987 16.8929 11.4669C16.9636 11.6352 17 11.8157 17 11.9979C17 12.1802 16.9636 12.3606 16.8929 12.5289C16.8222 12.6972 16.7185 12.8499 16.588 12.9784L8.48725 21L7.0014 19.5289L14.6045 12L7 4.47109Z"
								fill="#C4FF00"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default AssetsSlider
