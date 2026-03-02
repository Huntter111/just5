import clsx from 'clsx'
import styles from './Button.module.scss'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

interface BaseProps {
	children: ReactNode
	variant?: 'primary' | 'outline'
	className?: string
}
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type Props = AnchorProps | NativeButtonProps

const Button = (props: Props) => {
	const { children, variant = 'primary', className, ...rest } = props

	const classes = clsx(styles.button, styles[variant], className)

	if ('href' in props) {
		return (
			<a
				className={classes}
				{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
				{children}
			</a>
		)
	}

	return (
		<button
			type="button"
			className={classes}
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
			{children}
		</button>
	)
}

export default Button
