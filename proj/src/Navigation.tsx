import {  useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import HomeImg from "./assets/Home.png"


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function toggleNavBar(){
    const navBarEl: HTMLElement | null = document.getElementById("navbar")
    navBarEl.classList.toggle("hidden")
  }

  return (
    <div className='flex justify-center sticky top-0 z-50 w-screen'>
      <header id='navbar' className=" m-2  w-[70%] max-w-7xl bg-[#BBE1FA] rounded-lg drop-shadow-md  ">
        <nav className="flex justify-between items-center py-5 pl-5 pr-5 md:px-10 lg:px-20 " aria-label="Global">
          
          <div className='h-8 w-8'>
            <a href="#" className=" border-gray-500">
              <img className="h-full w-full" src={HomeImg} alt="" />
            </a>
          </div>

          <div className='hidden md:flex'> 
            <a href="#pastPROJECTS" className="text-sm font-semibold leading-6 text-gray-900 p-2 mx-4 border border-transparent
            hover:border-blue-400 hover:border hover:rounded-md hover:bg-[#0B2447] hover:text-white ">
              Past Projects
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 p-2 mx-4 border border-transparent 
            hover:border-blue-400 hover:border hover:rounded-md	hover:bg-[#0B2447] hover:text-white">
              Current Work
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 p-2 mx-4 border border-transparent 
            hover:border-blue-400 hover:border hover:rounded-md	hover:bg-[#0B2447] hover:text-white">
              Blog
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 p-2 mx-4 border border-transparent 
            hover:border-blue-400 hover:border hover:rounded-md	hover:bg-[#0B2447] hover:text-white">
              Hobbies
            </a>
          </div>

          <div className='hidden md:flex'>
              <a href="#" className="flex-1 text-sm font-semibold leading-6 text-gray-900">
                Contact Me  
              </a>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => {
                setMobileMenuOpen(true);
                toggleNavBar();
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

        </nav>

        <Dialog as="div" className="md:hidden" 
        open={
          mobileMenuOpen
        }
        onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10 " />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#BBE1FA] px-6 py-6 md:max-w-sm md:ring-1 md:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={
                  () => {
                    setMobileMenuOpen(false);
                    toggleNavBar();    
                  }
                }
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#pastPROJECTS"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      toggleNavBar();
                      }
                    }
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Current Work
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Hobbies
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Me 
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      </div>
  )
}
