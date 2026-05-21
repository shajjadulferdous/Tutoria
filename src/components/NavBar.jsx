'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 
    const user = session?.user;
    const links = <>
      
          <li >
            <Link className='' href="/">Home</Link>
          </li>
          <li>
            <Link href="/tutors"  aria-current="page">
              Tutors
            </Link>
          </li>
           {
             user && <>
                <li>
                <Link href="/add-tutor">Add Tutors</Link>
              </li>
              <li>
                <Link href="/my-tutor">My Tutors</Link>
              </li>
              <li>
                <Link href="/my-session">My Sessions</Link>
              </li>
             </>
           }
         

    </>
    return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#F8F9FA] backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            
            <p className="font-bold">
                <Image src={'/assests/tutoria.png' }  alt="tutoria.png" width={200} height={200}></Image>
            </p>
          </div>
        </div>
        <ul className="hidden items-center gap-6 md:flex text-black ">
            {links}
        </ul>
        
        <div className="hidden items-center gap-4 md:flex">
          {user?  <Dropdown>
        <Button aria-label="Menu" variant="ghost" size="icon" className="p-0 rounded-full">
          <Avatar>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name.charAt(0)||'S'}</Avatar.Fallback>
          </Avatar>
        </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" >
            <Link href={'/my-profile'}>Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link">
            <button onClick={async()=>{await authClient.signOut(); redirect('/')}}>Logout</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>:
          <><Link className='text-black' href="/login">Login</Link>
          <Button variant='ghost'>Sign Up</Button></>}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="/login" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
            </li>
          </ul>
        </div>
      )}
    </nav> 
    );
};

export default NavBar;