import { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import types from Swiper
import type { Swiper as SwiperType } from 'swiper'

import Button from '../../ui/Button/Button'
import IconUnity from '../../ui/IconUnity/IconUnity'
import DecorEllipse from '../../ui/DecorEllipse/DecorEllipse'
import { sliderItems, type SliderAssetsItems } from '../../../constants/assets'
import './AssetsSlider.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const AssetsSlider = () => {
	const swiperRef = useRef<SwiperType | null>(null)
	const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(true)
	const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false)

	const updateButtons = (swiper: SwiperType) => {
		setIsPrevDisabled(swiper.isBeginning)
		setIsNextDisabled(swiper.isEnd)
	}
	return (
		<div className="assets-slider-wrapper">
			<Swiper
				className="assets-swiper"
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView="auto"
				centeredSlides={true}
				speed={800}
				autoplay={{ delay: 2000 }}
				// loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				initialSlide={2}
				onSlideChange={(swiper) => {
					console.log('slide change')
					updateButtons(swiper)
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper
					updateButtons(swiper) // Ініціалізація станів
				}}>
				{sliderItems.map((item: SliderAssetsItems, index: number) => (
					<SwiperSlide key={index}>
						<div className="card">
							<div className="custom-shape"></div>
							<div className="card__decors">
								<DecorEllipse
									color={item.decorEllipseColor}
									count={9}
								/>
								<div
									className="card__label"
									style={{ backgroundColor: item.label.color }}>
									{item.label.text}
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
				<div className="swiper-custom-nav">
					<button
						className={`swiper-button-prev assets-swiper-button-prev ${isPrevDisabled ? 'disabled' : ''}`}
						onClick={() => swiperRef.current?.slidePrev()}>
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
					<button
						className={`swiper-button-next assets-swiper-button-next ${isNextDisabled ? 'disabled' : ''}`}
						onClick={() => swiperRef.current?.slideNext()}>
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
			</Swiper>
		</div>
	)
}

export default AssetsSlider
