import clsx from 'clsx'
import styles from './IconEllipse.module.scss'

type IconEllipseProps = {
	color?: string
	width?: number
	height?: number
	className?: string
}

const IconEllipse: React.FC<IconEllipseProps> = ({
	color = '#ffffff', // default color
	width = 15,
	height = 28,
	className,
}) => {
	return (
		<svg
			className={clsx(styles.iconEllipse, className)}
			width={width}
			height={height}
			viewBox="0 0 20 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_n_455_802)">
				<path
					d="M0.427332 4.13322C-0.715879 2.3452 0.568249 0 2.6905 0C3.60688 0 4.46004 0.467152 4.95367 1.23921L19.1229 23.4004C20.2661 25.1884 18.982 27.5336 16.8597 27.5336C15.9434 27.5336 15.0902 27.0665 14.5966 26.2944L0.427332 4.13322Z"
					fill={color}
				/>
			</g>
			<defs>
				<filter
					id="filter0_n_455_802"
					x="0"
					y="0"
					width="19.5503"
					height="27.5332"
					filterUnits="userSpaceOnUse"
					// color-interpolation-filters="sRGB">
					colorInterpolationFilters="sRGB">
					<feFlood
						// flood-opacity="0"
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="2.5019905567169189 2.5019905567169189"
						stitchTiles="stitch"
						numOctaves="3"
						result="noise"
						seed="9545"
					/>
					<feColorMatrix
						in="noise"
						type="luminanceToAlpha"
						result="alphaNoise"
					/>
					<feComponentTransfer
						in="alphaNoise"
						result="coloredNoise1">
						<feFuncA
							type="discrete"
							tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
						/>
					</feComponentTransfer>
					<feComposite
						operator="in"
						in2="shape"
						in="coloredNoise1"
						result="noise1Clipped"
					/>
					<feFlood
						// flood-color="rgba(0, 0, 0, 0.45)"
						floodColor="rgba(0, 0, 0, 0.45)"
						result="color1Flood"
					/>
					<feComposite
						operator="in"
						in2="noise1Clipped"
						in="color1Flood"
						result="color1"
					/>
					<feMerge result="effect1_noise_455_802">
						<feMergeNode in="shape" />
						<feMergeNode in="color1" />
					</feMerge>
				</filter>
			</defs>
		</svg>
	)
}

export default IconEllipse
