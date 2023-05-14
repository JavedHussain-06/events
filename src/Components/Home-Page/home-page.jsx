import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = ({data}) => {
    return (
        <>  <div className='home_page'>
            {data.map(event => <Link className='card' key={event.id} href={`/events/${event.id}`} passHref>
                <div className='image_card'>
                <Image className='image home-event-image' src={event.image}
                    alt={event.title}
                    width={300}
                    height={300}
                />
                </div>
                <div className='content'>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                </div>
            </Link>)}
        </div></>
    )
}

export default HomePage