import IconEllipse from '../IconEllipse/IconEllipse'
import styles from './DecorEllipse.module.scss'

type DecorEllipseProps = {
	count: number
	color: string
}
const DecorEllipse: React.FC<DecorEllipseProps> = ({ count = 9, color = '#fff' }) => {
	return (
		<div className={styles.decor}>
			{Array.from({ length: count }).map((_, index) => (
				<IconEllipse
					className={styles.decorElement}
					key={index}
					color={color}
				/>
			))}
		</div>
	)
}

export default DecorEllipse
