'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
  const {data: session} = useSession()
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const hi = async () => {
      const response = await getProviders();
      setProviders(response)
    }
    hi()
  }, [])
  return (
    <nav className='flex-between pt-3 w-full mb-16'>
      <Link href="/" className='flex flex-center gap-2'>
        <Image
          src="/assets/images/logo.svg"
          alt="promptopia logo"
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create_post" className='black_btn'>
              Create Post
            </Link>

            <button className='outline_btn' onClick={signOut}>
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                className='rounded-full'
                alt='Profile image'
                height={37}
                width={37}
              />
            </Link>
          </div>
        ) :
          (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.id}
                    className='black_btn'
                    onClick={() => { signIn(provider.id) }}
                  >
                    Sign In
                  </button>
                ))
              }
            </>
          )}
      </div>

      {/* Mobile navigation */}

      <div className='max-sm:flex hidden'>
        {session?.user ? (
          <div>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              alt='Profile Image'
              onClick={() => { setToggleDropdown((prev) => !prev) }}
            />
            {toggleDropdown && (
              <div className='absolute right-0 mt-2 bg-white min-w-[200px] flex flex-col gap-3 items-end rounded-lg p-4 font-inte font-mediumr'>
                <Link
                  href='/create_post'
                  className='block '
                  onClick={()=>setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <Link
                  href='/profile'
                  className='block'
                  onClick={()=>{setToggleDropdown(false)}}
                >
                  Profile
                </Link>
                <button
                  className='block black_btn w-full'
                  onClick={()=>{
                    setToggleDropdown(false);
                    signOut()
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )
          :
          (
            <>
              
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.id}
                    className='black_btn'
                    onClick={() => { signIn(provider.id) }}
                  >
                    Sign In
                  </button>
                ))
              }
            </>
          )
        }
      </div>

    </nav>
  )
}

export default Nav