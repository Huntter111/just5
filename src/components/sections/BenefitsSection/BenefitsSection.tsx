import clsx from 'clsx'
import { benefits } from '../../../constants/benefits'
import Marquee from '../../ui/Marquee/Marquee'
import styles from './BenefitsSection.module.scss'

const BenefitsSection = () => {
	return (
		<section className={styles.benefits}>
			<div className={clsx('benefits__container', styles.container)}>
				<Marquee
					items={benefits}
					duration={15}
				/>
			</div>
		</section>
	)
}

export default BenefitsSection
