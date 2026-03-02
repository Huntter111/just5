import AssetsSlider from './AssetsSlider'
import './AssetsSection.scss'
type AssetsSectionProps = {
	anchorId?: string
}

const AssetsSection = ({ anchorId }: AssetsSectionProps) => {
	return (
		<section
			id={anchorId}
			className="assets">
			<div className="assets__container">
				<div className="assets__heading">
					<h2 className="assets__title">
						Explore <span>Our Assets</span>
					</h2>
					<p className="assets__description">High-quality, game-ready resources built to speed up your development.</p>
				</div>
				<AssetsSlider />
			</div>
		</section>
	)
}

export default AssetsSection
