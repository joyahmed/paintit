import { postData } from '@/src/utils/myFetcher';
import { getSession, useSession } from 'next-auth/react';
import {  useState } from 'react';
import { toast } from 'react-toastify';
import GoogleLogin from '../../components/auth/GoogleLogin';

const Admin = () => {
	const { data: session, status } = useSession();
	const [secret, setSecret] = useState('');

	const [matched, setMatched] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			if (secret !== '') {
				const data = await postData('app-secret', secret);

				if (data.success) {
					toast.success(data.message);
					setTimeout(() => {
						setMatched(true);
					}, [2000]);
				} else {
					toast.error(data.message);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen w-screen'>
			{status === 'unauthenticated' && (
				<div className='flex flex-col items-center justify-center w-full sm:w-2/4 md:w-1/3'>
					{!matched ? (
						<div
							className={`${
								!matched
									? 'flex flex-col items-center justify-center w-full scale-100'
									: 'scale-0 opacity-0'
							} transition-all duration-300`}
						>
							<h1 className='font-bold text-[20px] leading-3 my-10'>
								Enter App Secret
							</h1>
							<form className='flex flex-col w-full px-10'>
								<input
									value={secret}
									onChange={e => setSecret(e.target.value)}
									className='w-full rounded-md bg-transparent border-2 border-gray-900 border-opacity-90 outline-none px-4 py-2'
								/>
								<button
									type='submit'
									className={`${
										!secret && 'cursor-not-allowed'
									} w-full rounded-md bg-transparent border-2 border-gray-900 border-opacity-90 outline-none px-4 py-2`}
									onClick={handleSubmit}
									disabled={!secret}
								>
									Submit
								</button>
							</form>
						</div>
					) : (
						<div
							className={`${
								matched
									? 'flex flex-col items-center justify-center w-full scale-100'
									: 'scale-0 opacity-0'
							} transition-all duration-300`}
						>
							<div className='flex flex-col items-center justify-center w-full '>
								<h1 className='font-bold text-[20px] leading-3 my-5'>
									Welcome Admin!
								</h1>
								<h1 className='font-bold text-[20px] leading-3 my-5'>
									Please, login to continue
								</h1>
							</div>
							<div className='flex items-center justify-center w-full my-5'>
								<GoogleLogin />
							</div>
						</div>
					)}
				</div>
			)}
			{status === 'loading' && (
				<>
					<div className='flex items-center justify-center h-screen w-screen '>
						Loading...
					</div>
				</>
			)}
		</div>
	);
};

export default Admin;

export const getServerSideProps = async context => {
	const session = await getSession(context);

	if (session?.user) {
		return {
			redirect: {
				destination: '/admin/dashboard',
				permanet: false
			}
		};
	}
	return {
		props: { session }
	};
};
