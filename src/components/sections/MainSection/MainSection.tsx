import MainSlider from './MainSlider'
import Button from '@/components/ui/Button/Button'
import './MainSection.scss'
const MainSection = () => {
	return (
		<section className="main-block">
			<div className="main-block__container">
				<div className="main-block__body">
					<div className="main-block__text-action">
						<div className="main-block__heading">
							<h1 className="main-block__title">
								High Quality <span>Game Assets</span> for&nbsp;Fast Development
							</h1>
							<h2 className="main-block__sub-title">Premium 2D assets, UI kits and game-ready packs for indie developers.</h2>
						</div>
						<div className="main-block__buttons">
							<Button
								href="#assets"
								variant="primary">
								Get Assets
							</Button>
							<Button
								href="#contact"
								variant="outline">
								Contact us
							</Button>
						</div>
					</div>
					<div className="main-block__slider">
						<MainSlider />
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainSection
