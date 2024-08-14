"use client";
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Header() {
    const { user, isSignedIn } = useUser();
    const path = usePathname();
    const router = useRouter();

    useEffect(() => {
        console.log(path);
    }, [path]);

    function getRouteLink(path) {
        router.push(path);
    }

    return !path.includes('ai-form') && (
        <header className='flex p-4 items-center justify-between bg-purple-800 border-b border-purple-700 shadow-sm'>
            <Image
                src={'/darkform-logo-icon.svg'}
                width={120}
                height={50}
                alt='logo'
                className='hover:opacity-90 transition-opacity cursor-pointer'
                onClick={() => getRouteLink('/')}
            />
            <nav>
                <ul className='hidden md:flex gap-8 text-white'>
                    <li
                        onClick={() => getRouteLink('/dashboard')}
                        className={`hover:text-purple-400 hover:font-semibold transition-all cursor-pointer ${path === '/dashboard' && 'text-purple-400 font-bold'}`}
                    >
                        Dashboard
                    </li>
                    <li
                        onClick={() => getRouteLink('/dashboard/questions')}
                        className={`hover:text-purple-400 hover:font-semibold transition-all cursor-pointer ${path === '/dashboard/questions' && 'text-purple-400 font-bold'}`}
                    >
                        Questions
                    </li>
                    <li
                        onClick={() => getRouteLink('/dashboard/upgrade')}
                        className={`hover:text-purple-400 hover:font-semibold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-purple-400 font-bold'}`}
                    >
                        Upgrade
                    </li>
                    <li
                        onClick={() => getRouteLink('/dashboard/how')}
                        className={`hover:text-purple-400 hover:font-semibold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-purple-400 font-bold'}`}
                    >
                        How it works?
                    </li>
                </ul>
            </nav>
            {isSignedIn ?
                <div className='flex items-center gap-5'>
                    <UserButton />
                </div> :
                <SignInButton>
                    <Button className='text-white bg-purple-600 border-2 border-purple-600 hover:bg-purple-500 hover:border-purple-500'>
                        Get Started
                    </Button>
                </SignInButton>
            }
        </header>
    );
}

export default Header;
