import DesktopMenu from './DesktopMenu';
import NavLogo from './NavLogo';
import PhoneMenu from './PhoneMenu';

const NavbarDark = ({
	user,
	navLinks,
	currentTheme,
	theme,
	setTheme,
	menu,
	close,
	mounted,
	view,
	windowHeight,
	roofer,
	rooferDark
}) => {
	return (
		<nav
			className={`flex fixed items-center justify-center w-screen tracking-wider px-2 z-[10] transition-all duration-1000 ease ${
				view ? 'translate-y-0' : '-translate-y-20'
			}
				${
					windowHeight > 50
						? '-top-1 bg-primary bg-opacity-70 shadow-sm my-0 sm:h-16'
						: `-top-3 md:top-0 bg-opacity-0`
				}
				 `}
		>
			<div className='flex items-center justify-between w-site'>
				<NavLogo
					{...{
						roofer,
						rooferDark,
						currentTheme,
						windowHeight
					}}
				/>

				<DesktopMenu
					{...{
						user,
						navLinks,
						mounted,
						currentTheme,
						theme,
						setTheme,
						windowHeight
					}}
				/>

				<PhoneMenu
					{...{
						user,
						navLinks,
						menu,
						close,
						mounted,
						currentTheme,
						theme,
						setTheme,
						windowHeight
					}}
				/>
			</div>
		</nav>
	);
};

export default NavbarDark;
