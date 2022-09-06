// import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
	const { data: session } = useSession();
	const router = useRouter();

	if (typeof window === 'undefined') return null;

	if (session) {
		console.log(`session from :`, session);
		return (
			<div className='flex flex-grow items-center justify-center w-full'>
				<div className='fixed right-0 top-0 w-[85%] sm:w-[94%] px-4 pt-20 py-4 h-screen'>
					<div className='flex items-start justify-center w-full h-screen font-bold text-xl text-gray-300'>
						Welcome to Roofer
					</div>
				</div>
			</div>
		);
	} else {
		router.push('/');
	}
};

export default Dashboard;

// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			session: await unstable_getServerSession(
// 				context.req,
// 				context.res
// 			)
// 		}
// 	};
// }
