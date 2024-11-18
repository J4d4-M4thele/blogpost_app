import { Typography } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

  return (
    <div>
      <section style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
                            </div>
                            {/* Text  */}
                            <h1 className=' text-3xl text-white font-bold'>Big on Blogs</h1>
                        </div>
                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                                We are Big on Blogging... so feel free to share your thoughts and insights.
                        </p>
                    </div>
                </main>
            </div>
      </section>
    </div>
  )
}

export default HeroSection
