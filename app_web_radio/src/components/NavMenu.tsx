/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Player from '../components/Player'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Equipe', href: '#', current: false },
  { name: 'Contact', href: '#Contact', current: false },
  { name: 'About', href: '#About', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavMenu() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png"
                    alt="Radio Web MCR"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://scontent.faqa3-1.fna.fbcdn.net/v/t1.6435-1/125338931_2734591376753450_4949835936158640363_n.png?_nc_cat=103&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=wSaDDtHpSQkAX8dgeQZ&_nc_ht=scontent.faqa3-1.fna&oh=a495e3f76e753c670b902abdc959620e&oe=615A968B"
                    alt="Radio Web MCR"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Player/>

                {/* Profile dropdown */}
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
