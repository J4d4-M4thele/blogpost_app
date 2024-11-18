import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                    ? 'shadow-gray-700'
                    : 'shadow-xl'
                  } 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" 
                src={'https://ca-times.brightspotcdn.com/dims4/default/9efb1db/2147483647/strip/true/crop/4000x5000+0+0/resize/1200x1500!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcf%2F13%2F2e692cee45e8ba9e5ab04f38b630%2Fthing-1-lede.jpg'} alt="blog" />
                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'18 Nov 2024'}
                  </h2>
                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'Flower Fields'}
                  </h1>
                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos etiam phasellus venenatis congue aenean quisque sollicitudin augue.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                    ? 'shadow-gray-700'
                    : 'shadow-xl'
                  } 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" 
                src={'https://ca-times.brightspotcdn.com/dims4/default/9efb1db/2147483647/strip/true/crop/4000x5000+0+0/resize/1200x1500!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcf%2F13%2F2e692cee45e8ba9e5ab04f38b630%2Fthing-1-lede.jpg'} alt="blog" />
                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'18 Nov 2024'}
                  </h2>
                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'Flower Fields'}
                  </h1>
                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos etiam phasellus venenatis congue aenean quisque sollicitudin augue.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                    ? 'shadow-gray-700'
                    : 'shadow-xl'
                  } 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" 
                src={'https://ca-times.brightspotcdn.com/dims4/default/9efb1db/2147483647/strip/true/crop/4000x5000+0+0/resize/1200x1500!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcf%2F13%2F2e692cee45e8ba9e5ab04f38b630%2Fthing-1-lede.jpg'} alt="blog" />
                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'18 Nov 2024'}
                  </h2>
                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'Flower Fields'}
                  </h1>
                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos etiam phasellus venenatis congue aenean quisque sollicitudin augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ?
                  'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}>
                See more
            </Button>
          </div>
        </div>
      </section >
    </div>
  )
}

export default BlogPostCard
