import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const AllEvents = ({data}) => {
  return (
    <div className='events-page'>
        {data.map(event => <div className='event'> <Link href={`/events/${event.id}`} passHref>
            <Image 
            className='image'
            alt={event.title}
            src={event.image}
            width={250}
            height={250}
            />
            <h2 className='events-title'>{event.title}</h2>
        </Link> 
        </div>
        )}
       </div>
  )
}

export default AllEvents