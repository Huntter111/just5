import clsx from 'clsx'
import styles from './BenefitsSection.module.scss'

import { benefits } from '@/constants/benefits'
import Marquee from '@/components/ui/Marquee/Marquee'

const BenefitsSection = () => {
	return (
		<section className={styles.benefits}>
			<div className={clsx('benefits__container', styles.container)}>
				<Marquee
					items={benefits}
					duration={20}
				/>
			</div>
		</section>
	)
}

export default BenefitsSection
