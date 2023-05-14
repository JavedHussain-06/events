import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CatEvents = ({data , pageName}) => {
  return (
    <div className='cat-event-page'> 
      <h1 className='cat-title'>Events in {pageName}</h1>
       <div className='cat-content'>
         {data.map(events => <Link className='cat-event-card' href={`/events/${events.city}/${events.id}`} passHref>
            <div>
            <Image 
              className='image'
              alt={events.title}
              src={events.image}
              width={300}
              height={300}
            />
            </div>
           <h2>{events.title}</h2>
           <p>{events.description}</p>
                </Link>)}
        </div> 
    </div>
  )
}

export default CatEvents