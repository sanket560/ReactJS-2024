import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='mx-auto w-[800px]'>
        <div className='mx-auto fixed left-[25%] top-[20%] w-[100%] md:py-10'>
          <div className='grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2'>
            <div className='flex items-center justify-center'>
              <div className='px-2 md:px-12'>
                <p className='text-2xl font-bold text-gray-900 md:text-4xl'>
                  Get in touch
                </p>
                <p className='mt-4 text-lg text-gray-600'>
                  Our friendly team would love to hear from you.
                </p>
                <form action='' className='mt-8 space-y-4'>
                  <div className='grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2'>
                    <div className='grid w-full  items-center gap-1.5'>
                      <label
                        className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        htmlFor='first_name'
                      >
                        First Name
                      </label>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                        type='text'
                        id='first_name'
                        placeholder='First Name'
                      />
                    </div>
                    <div className='grid w-full  items-center gap-1.5'>
                      <label
                        className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        htmlFor='last_name'
                      >
                        Last Name
                      </label>
                      <input
                        className='flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
                        type='text'
                        id='last_name'
                        placeholder='Last Name'
                      />
                    </div>
                  </div>
                  <button
                    type='button'
                    className='w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact