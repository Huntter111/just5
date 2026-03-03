import clsx from 'clsx'
import IconEllipse from '../IconEllipse/IconEllipse'
import styles from './DecorEllipse.module.scss'

type DecorEllipseProps = {
	count: number
	color: string
	className: string
}
const DecorEllipse: React.FC<DecorEllipseProps> = ({ count = 9, color = '#fff', className }) => {
	return (
		<div className={clsx(styles.decor, className)}>
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
