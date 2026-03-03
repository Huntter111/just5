import { menuItems } from '@/constants/navigation'
import styles from './Footer.module.scss'
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="footer__container">
				<div className={styles.body}>
					<div className={styles.info}>
						<div className={styles.logo}>
							<img
								src="/images/logo-white.svg"
								alt="logo"
							/>
						</div>
						<p className={styles.text}>High-quality, game-ready resources built to speed up your development.</p>
					</div>
					<div className={styles.navigation}>
						<nav>
							<ul className={styles.list}>
								{menuItems.map((item) => (
									<li
										key={item.to}
										className={styles.item}>
										<a
											href={`#${item.to}`}
											className={styles.link}>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<span className={styles.reserved}>© Just 5. All rights reserved.</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
