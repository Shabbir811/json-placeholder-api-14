import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function DynamicImage({params}:{params:{id:number}}) {
  const url = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
  const data = await url.json()
  return (
    <div className='bg-yellow-300/35'>
      < div className="flex items-center justify-center py-28 px-20 gap-5 flex-wrap" >
      {
            <div className="max-w-sm w-[345px] bg-white rounded-lg flex-grow shadow-md overflow-hidden">

              <Image
                src={data.url}
                alt={data.title}
                className="w-full h-48 object-cover"
                width={345}
                height={192}
                loading="lazy"
              
              />
              <div className="p-4">
                {/* . Title . */}
                <Link href={`/${data.id}`}>
                  <h2 className="text-lg font-semibold text-gray-800 overflow-hidden text-nowrap">{data.title}</h2>
                  <p className="text-sm text-gray-500">by GHULAM SHABBIR</p>
                  <p className="text-sm text-gray-700">albumId: {data.albumId}</p>
                </Link >

                <div className="mt-3 flex flex-col items-center justify-between">
                  {/* . Button . */}
                  <button
                    className={
                      `px-4 py-2 text-sm font-semibold text-white bg-blue-500`
                    }
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>  
      }
      <div className=' rounded-lg flex-grow bg-purple-700/50 text-white flex flex-col gap-5 pl-20 p-10  overflow-hidden'>
        <h1 className='text-5xl'><span className='text-black/35'>TITLE: </span>{data.title}</h1>
        <h1 className='text-5xl'><span className='text-black/35'>ALBUM ID: </span>{data.albumId}</h1>
        <h1 className='text-5xl'><span className='text-black/35'>ID: </span>{data.id}</h1>
        <h1 className='text-5xl'><span className='text-black/35'>CREATE BY: </span>GHULAM SHABBIR</h1>
      </div>

    </div>
    </div>
  )
}

export default DynamicImage