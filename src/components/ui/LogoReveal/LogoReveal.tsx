import { useEffect, useRef } from 'react'
import styles from './LogoReveal.module.scss'

import imageSrc from '@/assets/images/about/logo_bg.svg'
import maskImage from '@/assets/images/about/mask-sprite.png'

const LogoReveal = () => {
	const ref = useRef<HTMLImageElement | null>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					el.classList.add(styles.isAnimated)
					observer.disconnect()
				}
			},
			{ threshold: 0.35 },
		)

		observer.observe(el)

		return () => observer.disconnect()
	}, [])

	return (
		<div className={styles.wrapper}>
			<img
				ref={ref}
				src={imageSrc}
				alt="Logo"
				className={styles.reveal}
				style={
					{
						'--mask-image': `url(${maskImage})`,
					} as React.CSSProperties
				}
			/>
		</div>
	)
}
export default LogoReveal
