import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import HireForm from '../forms/HireForm';

const HireModal = ({ isOpen, setIsOpen }) => {
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Transition.Root show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='fixed z-50 inset-0 overflow-y-auto min-h-screen'
					onClose={closeModal}
				>
					<div className='flex items-center justify-center min-h-screen sm:min-h-screen px-4 text-center sm:block sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity' />
						</Transition.Child>
						<span
							className='hidden sm:inline-block sm:align-middle sm:h-screen sm:mt-5 md:mt-1'
							aria-hidden='true'
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<div
								className={`inline-block align-bottom bg-primary rounded-xl text-left overflow-hidden shadow-xl drop-shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:w-3/5 xl:w-2/5 pb-4`}
							>
								<div className='flex items-center justify-end px-4 mt-5'>
									<div
										className='w-9 h-9 flex items-center px-2 bg-gray-900 dark:hover:bg-gray-800 cursor-pointer rounded-full'
										onClick={closeModal}
									>
										<XIcon className='h-[22px]' />
									</div>
								</div>
								<div className='flex flex-col w-full px-4 pt-2 pb-2.5 sm:px-6'>
									<HireForm isOpen={isOpen} setIsOpen={setIsOpen} />
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default HireModal;
