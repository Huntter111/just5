import styles from './Marquee.module.scss'

type Benefit = {
	title: string
}
type MarqueeProps = {
	items: Benefit[]
	duration?: number //seconds
}
const Marquee: React.FC<MarqueeProps> = ({ items, duration = 10 }) => {
	const durationInSeconds = `${duration}s`
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.marquee}
				style={{ '--marquee-duration': durationInSeconds } as React.CSSProperties}>
				<div className={styles.group}>
					{items.map((item, index) => (
						<div
							className={styles.item}
							key={index}>
							<span className={styles.text}>{item.title}</span>
						</div>
					))}
				</div>
				<div
					className={styles.group}
					aria-hidden="true">
					{items.map((item, index) => (
						<div
							className={styles.item}
							key={`duplicate-${index}`}>
							<span className={styles.text}>{item.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Marquee
