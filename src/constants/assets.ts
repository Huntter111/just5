import assetImage1 from '@/assets/images/assets/asset-1.png'
import assetImage2 from '@/assets/images/assets/asset-2.png'
import assetImage3 from '@/assets/images/assets/asset-3.png'
import assetImage4 from '@/assets/images/assets/asset-4.png'
import assetImage5 from '@/assets/images/assets/asset-5.png'

export type SliderAssetsItems = {
	decorEllipseColor: string
	label: {
		color: string
		bgColor: string
		text: string
	}
	imageSrc: string
	title: string
	link?: string
}

export const sliderItems: SliderAssetsItems[] = [
	{
		decorEllipseColor: '#FF710B',
		label: {
			color: '#fff',
			bgColor: '#FF710B',
			text: 'Game Core',
		},
		imageSrc: assetImage1,
		title: 'SoundCore Toolkit Complete Audio Solution',
		link: 'https://www.google.com/',
	},
	{
		decorEllipseColor: '#3C5CFF',
		label: {
			color: '#fff',
			bgColor: '#3C5CFF',
			text: '2D Packs',
		},
		imageSrc: assetImage2,
		title: 'SoundCore Toolkit Complete Audio Solution',
		link: 'https://www.google.com/',
	},
	{
		decorEllipseColor: '#BFF700',
		label: {
			color: '#262626',
			bgColor: '#BFF700',
			text: 'System',
		},
		imageSrc: assetImage3,
		title: 'SoundCore Toolkit Complete Audio Solution',
		link: 'https://www.google.com/',
	},
	{
		decorEllipseColor: '#ffffff',
		label: {
			color: '#262626',
			bgColor: '#fff',
			text: 'Tools',
		},
		imageSrc: assetImage4,
		title: 'SoundCore Toolkit Complete Audio Solution',
		link: 'https://www.google.com/',
	},
	{
		decorEllipseColor: '#FF710B',
		label: {
			color: '#fff',
			bgColor: '#FF710B',
			text: 'Game Core',
		},
		imageSrc: assetImage5,
		title: 'SoundCore Toolkit Complete Audio Solution',
		link: 'https://www.google.com/',
	},
]
