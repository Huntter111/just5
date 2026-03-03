import { menuItems } from '@/constants/navigation'
import styles from './NavMenu.module.scss'
import clsx from 'clsx'

interface NavMenuProps {
	isOpen: boolean
	closeMenu: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ isOpen, closeMenu }) => {
	return (
		<nav className={clsx(styles.menu, isOpen && styles.active)}>
			<ul className={styles.list}>
				{menuItems.map((item) => (
					<li
						key={item.to}
						className={styles.item}>
						<a
							href={`#${item.to}`}
							className={styles.link}
							onClick={closeMenu}>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavMenu
