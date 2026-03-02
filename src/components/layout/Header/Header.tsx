import { useEffect, useState } from 'react'
import Logo from '../../ui/Logo/Logo'
import Button from '../../ui/Button/Button'
import styles from './Header.module.scss'
import NavMenu from './NavMenu'
import clsx from 'clsx'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const closeMenu = () => setIsMenuOpen(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add('lock')
		} else {
			document.body.classList.remove('lock')
		}
	}, [isMenuOpen])
	return (
		<header className={clsx(styles.header, isMenuOpen && styles.menuOpen)}>
			<div className="header__container">
				<div className={styles.headerWrapper}>
					<div className={styles.logoWrapper}>
						<Logo />
					</div>
					<div className={clsx(styles.navigation, isMenuOpen && styles.navOpen)}>
						<NavMenu
							closeMenu={closeMenu}
							isOpen={isMenuOpen}
						/>
						<Button
							href="#assets"
							variant="primary"
							onClick={closeMenu}>
							Get Started
						</Button>
					</div>
					<button
						type="button"
						className={styles.iconMenu}
						onClick={toggleMenu}
						aria-label="Toggle menu">
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
