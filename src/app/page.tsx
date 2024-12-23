import Image from "next/image";
import Link from "next/link"
async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/photos")
  const data = await url.json()

  return (
    < div className="wraper flex flex-col sm:flex-row justify-center py-28  gap-12 flex-wrap" >
      {
        data.map(
          (
            photo: {
              albumId: number,
              id: number,
              title: string,
              url: string,
              thumbnailUrl: string
            },
            index:number

          ) => (
            <div className="max-w-sm w-[345px] bg-white rounded-lg shadow-md overflow-hidden" key={index}>

              <Image
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover"
                width={345}
                height={192}
                loading="lazy"
                
              />
              <div className="p-4 " >
                {/* . Title . */}
                <Link href={`/${photo.id}`}>
                  <h2 className="text-lg font-semibold text-gray-800 overflow-hidden text-nowrap">{photo.title}</h2>
                  <p className="text-sm text-gray-500">by GHULAM SHABBIR</p>
                  <p className="text-sm text-gray-700">albumId: {photo.albumId}</p>
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


          )
        )
      }

    </div>
  );
}

export default Home


