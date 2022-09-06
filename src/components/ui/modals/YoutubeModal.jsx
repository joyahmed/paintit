import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";
const DynamicVideoPlayer = dynamic(
  () => import("@/src/components/VideoSection"),
  {
    suspense: true,
  }
);

const YoutubeModal = ({ path, isOpen, setIsOpen, setAutoScroll }) => {
  const closeModal = () => {
    setIsOpen(false);
    path === "hero" && setAutoScroll(true);
  };
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[14] min-h-screen overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex min-h-screen items-center justify-center px-4 text-center sm:block sm:min-h-screen sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-70 transition-opacity dark:bg-gray-900 dark:bg-opacity-50" />
            </Transition.Child>
            <span
              className="hidden sm:mt-5 sm:inline-block sm:h-screen sm:align-middle md:mt-1"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={`relative inline-block w-full transform items-center justify-center overflow-hidden rounded-xl bg-themeDarkest bg-opacity-60  pb-[200px] text-left align-bottom shadow-xl drop-shadow-xl transition-all dark:bg-black dark:bg-opacity-60 sm:w-1/2 sm:align-middle xl:w-2/5`}
              >
                <div
                  className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center rounded-full bg-[ghostwhite] bg-opacity-30 px-2 hover:bg-opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:bg-opacity-40"
                  onClick={closeModal}
                >
                  <XIcon className="h-[22px] text-blue-700 dark:text-white " />
                </div>
                <div className="flex h-[400px] items-center justify-center">
                  <Suspense fallback={`Loading...`}>
                    <DynamicVideoPlayer path="hero" />
                  </Suspense>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default YoutubeModal;
