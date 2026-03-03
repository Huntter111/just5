import './AboutSection.scss'
import sprayGreenBlack from '@/assets/images/about/spray-green-black.svg'
import logoBlack from '@/assets/images/about/logo.svg'

type AboutSectionProps = {
	anchorId?: string
}

const AboutSection = ({ anchorId }: AboutSectionProps) => {
	return (
		<section
			id={anchorId}
			className="about">
			<div className="about__container">
				<div className="about__body">
					<div className="about__images">
						<img
							className="about__spray"
							src={sprayGreenBlack}
							alt="spray green black"
						/>
						<div className="about__image--logo">
							<img
								className="about__logo"
								src={logoBlack}
								alt="Logo "
							/>
						</div>
					</div>
					<div className="about__info">
						<h2 className="about__title">
							ABOUT <span className="about--green">JUSTS</span>
						</h2>
						<p className="about__description">
							JUST5 was created with one idea in mind — development should feel creative, not exhausting. <br /> We build assets that remove
							friction from your workflow and let you focus on what really matters: making great games.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
