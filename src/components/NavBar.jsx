'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Dropdown, Label, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import NavLink from './NavLink';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
     const { 
        data: session, 
        isPending, 
        error,
        refetch 
    } = authClient.useSession() 
    const user = session?.user;
    const links = <>
      
          <li >
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href={'/tutors'} >
              Tutors
            </NavLink>
          </li>
           {
             user && <>
                <li>
                <NavLink href="/add-tutor">Add Tutors</NavLink>
              </li>
              <li>
                <NavLink href="/my-tutor">My Tutors</NavLink>
              </li>
              <li>
                <NavLink href="/my-session">My Sessions</NavLink>
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
          {user?  
          isPending ? <div className='flex justify-center items-center'>
              <Spinner size="xl" className='text-[#35858E]' />
          </div> : <Dropdown>
        <Button aria-label="Menu" variant="ghost" size="icon" className="p-0 rounded-full">
          <Avatar>
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name.charAt(0)||'S'}</Avatar.Fallback>
          </Avatar>
        </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" >
            <NavLink href={'/my-profile'}>Profile</NavLink>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link">
            <button onClick={async()=>{await authClient.signOut(); router.push('/')}}>Logout</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
        </Dropdown>
    :
          <><NavLink  href="/login">Login</NavLink>
          <Button onClick={()=>router.push('/register')} variant='ghost'>Sign Up</Button></>}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {!user?<>
                 <NavLink href="/login" className="block py-2">
                   Login
                </NavLink>
                 <Button className="w-full">Sign Up</Button>
              </> :<>
                  <NavLink href={'/my-profile'}>Profile</NavLink>
                  <button onClick={async()=>{await authClient.signOut(); router.push('/')}}>Logout</button>
              </>}
            </li>

          </ul>
        </div>
      )}
    </nav> 
    );
};

export default NavBar;