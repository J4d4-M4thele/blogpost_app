import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="logo"
                    />
                    {/* logo text  */}
                    <span className="ml-3 text-xl text-white">
                        Devknus
                    </span>
                </div>

                {/* items  */}
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2024 Jada Mathele
                </p>
            </div>
        </footer>

    )
}

export default Footer