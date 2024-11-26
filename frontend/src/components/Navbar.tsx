import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  PhoneIcon,
  NewspaperIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Properties', href: '/properties', icon: BuildingOfficeIcon },
  { name: 'Blog', href: '/blog', icon: NewspaperIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  { name: 'Contact', href: '/contact', icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      <nav className="relative h-full flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link 
            to="/" 
            className="-m-1.5 p-1.5 group"
          >
            <span className="text-2xl font-bold text-white group-hover:text-primary transition duration-150">
              Jeff<span className="text-primary group-hover:text-white transition duration-150">-Realty</span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-primary transition duration-150"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center gap-1.5 text-sm font-semibold leading-6 text-white hover:text-primary transition duration-150 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link 
            to="/login" 
            className="text-sm font-semibold leading-6 text-white hover:text-primary transition duration-150 px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition duration-150"
          >
            Register
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 group" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-white group-hover:text-primary transition duration-150">
                Jeff<span className="text-primary group-hover:text-white transition duration-150">-Realty</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-primary transition duration-150"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-2 -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10 hover:text-primary transition duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-6 w-6" />
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10 hover:text-primary transition duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center rounded-lg bg-primary px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-primary-400 transition duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
