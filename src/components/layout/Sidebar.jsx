import { LogoutIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import {
	AiOutlineFileImage,
	AiOutlineHome,
	AiOutlineSetting
} from 'react-icons/ai';
import { RooferContext } from '../../store/RooferContext';
import ThemeChanger from './ThemeChanger';

const Sidebar = () => {
	const { user, signOut } = useContext(RooferContext);

	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const currentTheme = theme === 'system' ? systemTheme : theme;

	useEffect(() => {
		setMounted(true);
	}, []);

	const UserImage = () => (
		<>
			{user && (
				<Image
					src={user.image}
					width={40}
					height={40}
					alt={user.name}
					className='rounded-full hover:rounded-md transition-all duration-150 ease-in'
				/>
			)}
		</>
	);

	const navigation = [
		{
			name: 'Home',
			href: '/',
			text: 'Home',
			icon: <AiOutlineHome size='25' />
		},
		{
			name: 'Site Settings',
			href: '',
			text: 'Site Settings',
			icon: <AiOutlineSetting size='25' />
		},
		{
			name: 'Image Album',
			href: '',
			text: 'Image Album',
			icon: <AiOutlineFileImage size='25' />
		},
		{
			name: 'Theme',
			href: '',
			text: `${
				mounted === true && currentTheme === 'dark'
					? 'Switch to Light'
					: 'Switch to Dark'
			}`,
			icon: (
				<ThemeChanger
					mounted={mounted}
					theme={theme}
					setTheme={setTheme}
					currentTheme={currentTheme}
					path='Sidebar'
				/>
			)
		},
		{
			name: 'User',
			href: '',
			text: user?.name,
			icon: <UserImage />
		}
	];

	return (
		<div
			className={`flex flex-col items-center justify-center w-[16%] sm:w-[6%] max-w-[4rem] h-screen bg-gray-900 bg-opacity-10 text-gray-50`}
		>
			{navigation.map(item => (
				<Link href={item.href} key={item.name}>
					<a className={`flex items-center py-2`}>
						<SideBarIcon
							{...{
								icon: item.icon,
								text: item.text,
								item: item,
								signOut
							}}
						/>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Sidebar;

const SideBarIcon = ({
	item,
	icon,
	text = 'tooltip 💡',
	signOut
}) => {
	return (
		<div className={`relative sidebar-icon group`}>
			{icon ? icon : <image />}
			<span className='sidebar-tooltip group-hover:scale-100'>
				{text}
				{item.name === 'User' && (
					<span onClick={() => signOut()}>
						<LogoutIcon className='h-5 w-5 mt-2' />
					</span>
				)}
			</span>
		</div>
	);
};
