import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import HireForm from "../forms/HireForm";
import QuoteForm from "../forms/QuoteForm";

const QuoteModal = ({ path, isOpen, setIsOpen, action, setAutoScroll }) => {
  const closeModal = () => {
    setIsOpen(false);
    path === "hero" && setAutoScroll(true);
  };
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 min-h-screen overflow-y-auto"
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
                className={`inline-block w-full transform overflow-hidden rounded-xl bg-themeDarkest bg-opacity-60 pb-4 text-left align-bottom shadow-xl drop-shadow-xl transition-all dark:bg-black dark:bg-opacity-60 sm:my-8 sm:w-3/5 sm:align-middle xl:w-2/5`}
              >
                <div className="mt-5 flex items-center justify-end px-4">
                  <div
                    className="flex h-9 w-9 cursor-pointer items-center rounded-full bg-opacity-0 px-2 shadow-xl hover:bg-gray-100 hover:bg-opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                    onClick={closeModal}
                  >
                    <XIcon className="h-[22px] text-white" />
                  </div>
                </div>
                <div className="flex w-full flex-col px-4 pt-2 pb-2.5 sm:px-6">
                  {action === "quote" ? (
                    <QuoteForm isOpen={isOpen} setIsOpen={setIsOpen} />
                  ) : (
                    <HireForm isOpen={isOpen} setIsOpen={setIsOpen} />
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default QuoteModal;
