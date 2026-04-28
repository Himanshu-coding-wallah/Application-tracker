import React, { useState } from 'react'
const Home = () => {
    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)
  return (
    <>
        
        <div className='h-screen w-full bg-indigo-900 flex items-center justify-center'>
            <div>
                <h1 className='text-5xl font-bold text-white mb-0.5'>Application tracker</h1>
                <p className='text-center mb-2'>track your applications with ease</p>
                <div className='text-center mb-2'>
                    <p>easy to use</p>
                    <p>Add easily</p>
                    <p>Modify easily</p>
                </div>
                <div className='flex items-center justify-center gap-2.5'>
                    <button className='bg-white pl-3 pr-3 p-2 rounded-4xl' onClick={()=>(setSignup(!signup))}>Create account</button>
                    <button className='bg-green-400 pl-4 pr-4 p-2 rounded-4xl' onClick={()=>(setLogin(!login))} >Login</button>
                </div>
            </div>
            {signup && (
                <> 
                    <div className='min-h-screen w-full fixed z-50 backdrop-blur-sm flex items-center justify-center'>
                        <div className="bg-amber-50 p-6">
                            <form action="" className='flex items-center justify-center flex-col gap-2.5'>
                                <input className='w-2xs' type="text" placeholder='Enter name' />
                                <input className='w-2xs'  type="text" placeholder='Enter Username' />
                                <input className='w-2xs' type="text" placeholder='Enter Email' />
                                <input className='w-2xs' type="text" placeholder='Set password' />
                                <div>
                                    <button className='bg-blue-400 pl-3 pr-3 p-2 rounded-4xl' type=''>Signup</button>
                                    <button className='bg-blue-900 pl-3 pr-3 p-2 rounded-4xl' onClick={()=>(setSignup(!signup))}>Back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
            {login && (
                <> 
                    <div className='min-h-screen w-full fixed z-50 backdrop-blur-sm flex items-center justify-center'>
                        <div className="bg-amber-50 p-6">
                            <form action="" className='flex items-center justify-center flex-col gap-2.5'>
                                <input className='w-2xs' type="text" placeholder='Enter Email' />
                                <input className='w-2xs' type="text" placeholder='Enter password' />
                                <input className='w-2xs' type="text" placeholder='Confirm password' />
                                <div>
                                    <button className='bg-blue-400 pl-3 pr-3 p-2 rounded-4xl' type=''>Login</button>
                                    <button className='bg-blue-900 pl-3 pr-3 p-2 rounded-4xl' onClick={()=>(setLogin(!login))}>Back</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>

        
    </>
  )
}

export default Home