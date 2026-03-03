import iconMedal from '@/assets/icons/trust/medal.svg'
import iconPuzzle from '@/assets/icons/trust/puzzle.svg'
import iconSupport from '@/assets/icons/trust/support.svg'
import './TrustSection.scss'

type TrustSectionProps = {
	anchorId?: string
}

const TrustSection = ({ anchorId }: TrustSectionProps) => {
	return (
		<section
			id={anchorId}
			className="trust">
			<div className="trust__container">
				<div className="trust__body">
					<div className="trust__heading">
						<h2 className="trust__title">
							Built for <span className="trust--green">Developers</span>
							<span className="trust--dot">.</span> Trusted in
							<span className="trust--green"> Production</span>
							<span className="trust--dot">.</span>
						</h2>
						<p className="trust__description">High-quality, game-ready resources built to speed up your development.</p>
					</div>
					<div className="trust__items">
						<div className="trust-item">
							<img
								src={iconMedal}
								alt="icon: medal"
							/>
							<p className="trust-item__text">
								4<span>+</span> Years <br />
								Experience
							</p>
						</div>
						<div className="trust-item">
							<img
								src={iconPuzzle}
								alt="icon: medal"
							/>
							<p className="trust-item__text">
								100<span>%</span> Unity <br /> Compatible
							</p>
						</div>
						<div className="trust-item">
							<img
								src={iconSupport}
								alt="icon: medal"
							/>
							<p className="trust-item__text">
								Support within <br /> 2 hours
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrustSection
