import Button from '../../ui/Button/Button'
import imageLeft from '../../../assets/images/contact/image-left.png'
import imageCenter from '../../../assets/images/contact/image-center.png'
import imageRight from '../../../assets/images/contact/image-right.png'
import styles from './ContactSection.module.scss'
import clsx from 'clsx'

type ContactSectionProps = {
	anchorId: string
}

const ContactSection = ({ anchorId }: ContactSectionProps) => {
	return (
		<section
			id={anchorId}
			className={styles.contact}>
			<div className={clsx('contact__container', styles.container)}>
				<div className={styles.body}>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Have <span className={styles.green}>Questions</span>
							<span className={styles.sign}>?</span>
						</h2>
						<p className={styles.description}>Get in touch via email or join our Discord for fast support and updates.</p>
						<div className={styles.buttons}>
							<Button
								variant="primary"
								href="mailto:someone@example.com">
								Email Us
							</Button>
							<Button
								variant="outline"
								href="https://discord.com"
								target="_blank"
								rel="noopener noreferrer">
								Join Discord
							</Button>
						</div>
					</div>
					<div className={styles.images}>
						<div className={styles.image}>
							<img
								src={imageLeft}
								alt="Image one"
							/>
						</div>
						<div className={styles.image}>
							<img
								src={imageCenter}
								alt="Image two"
							/>
						</div>
						<div className={styles.image}>
							<img
								src={imageRight}
								alt="Image three"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
