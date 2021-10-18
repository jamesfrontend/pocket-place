import React from 'react';
import styles from './header.module.scss';

/**
 * Create Wrapper
 * Create Left/Right Side
 * Create action button for email
 * create amazon button (official)
 * import logo
 * add logo to left
 * sync to go home on logo click
 */

const TopHeader = () => {
	return (
		<>
			<header className={styles['header']}>
				hello <span>yo</span>
			</header>
		</>
	);
};

export default TopHeader;
