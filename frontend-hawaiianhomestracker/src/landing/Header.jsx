import { useContext, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
//   ArrowPathIcon,
  Bars3Icon,
  BookOpenIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
  XMarkIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon,  } from '@heroicons/react/20/solid'
import { Context } from '../Context'
import { useNavigate, Link } from 'react-router-dom'


const products = [
  { name: 'Area Code', description: 'Enter desired area code to see rank by area', href: '/areacode', icon: MapPinIcon },
  { name: 'Last Name', description: 'Search for an application through last name lookup', href: '/lastName', icon: BookOpenIcon },
  { name: 'Rank', description: 'Search through applications by rankings per zipcode', href: '/ranks', icon: BoltIcon },
  { name: 'Zipcode', description: 'Enter a zipcode to get all applications within that county', href: '/zipcode', icon: DocumentMagnifyingGlassIcon },
]

export default function Header() {
  const {login}=useContext(Context)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const {setUsername,setPassword,setLogin}=useContext(Context)
    const navigate = useNavigate()

        function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setLogin(false)
        setUsername("")
        setPassword("")
        navigate('/')
    }


  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
            <span className="sr-only">Hawaiian Homes Tracker</span>
             <Link to="/" className="text-sm/6 font-semibold text-gray-900">
            Hawaiian Homes Tracker
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            data-cy = "burger-button"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Search Applications
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-green-600" />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="https://dhhl.hawaii.gov/applications/applying-for-hawaiian-home-lands/"  target= "_blank" className="text-sm/6 font-semibold text-gray-900">
            Apply 
          </a>
          <Link to="/resources" className="text-sm/6 font-semibold text-gray-900">
            Resources
          </Link>
          <Link to="/profile" className="text-sm/6 font-semibold text-gray-900">
            Profile
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!login? (
          <a href="/login" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          ):(
             <a href='/home' onClick={handleLogout} className="text-sm/6 font-semibold text-gray-900">
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
          )}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
             <span className="font-bold"> Hawaiian Homes Tracker</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Search
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <a
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="https://dhhl.hawaii.gov/applications/applying-for-hawaiian-home-lands/"
                  target='_blank'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Apply
                </a>
                <Link 
                  to="/resources"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/profile"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </div>
              <div className="py-6">
                {!login?(<Link
                  id='#loginBtn'
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>):(
                  <a
                  onClick={handleLogout}
                  navigate="/home"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                
                >
                  Log out
                </a>
                )}
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
