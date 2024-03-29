import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

export default function Modal({
  portfolioWork,
  showModal,
  setShowModal,
}: {
  portfolioWork: {
    /**
     * projectTitle: string value for name of the project
     */
    projectTitle: string
    /**
     * details: string value for a brief description of the project
     */
    details: string
    /**
     * tech: array of strings for the technologies used for the project
     */
    tech: string[]
    /**
     * isClicked: Boolean value, used to determine which project should be displayed in the modal
     */
    isClicked: Boolean
  }[]
  /**
   * showModal: Hook boolean value displays or hides the modal
   */
  showModal: Boolean
  /**
   * setShowModal: function that updates hook boolean value
   */
  setShowModal: Function
}) {
  return (
    <Transition.Root show={showModal ? true : false} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setShowModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={() => setShowModal(false)}
                  >
                    {/* X icon to close modal window */}
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Project information */}
                <div className="mt-5 sm:mt-4 sm:flex">
                  {portfolioWork.map((item) => {
                    return (
                      <div
                        className={item.isClicked ? "" : "hidden"}
                        key={"modal-key"}
                      >
                        <h3 className="restorabold my-4 text-4xl">
                          {item.projectTitle}
                        </h3>
                        <p>{item.details}</p>
                      </div>
                    )
                  })}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
