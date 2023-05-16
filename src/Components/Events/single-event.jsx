import Image from 'next/image';
import React, { useRef , useState } from 'react'
import { useRouter } from 'next/router'

const SingleEvent = ({ data }) => {
  const emailInput = useRef()
  const router = useRouter();
  const [message , setMessage ] = useState('')
  async function onSubmit(e) {
    e.preventDefault();
    const emailValue = emailInput.current.value
    const eventId = router?.query.id
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
        setMessage('Please introduce a correct email address')
    }

    try {
      const response = await fetch(`/api/email-registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message)
      emailInput.current.value = ''
    } catch (e) {
      console.log('Error:', e)
    }

  }

  return (
    <div className='event_single_page'>
      <Image
        className='image single-image'
        alt={data.title}
        src={data.image}
        width={500}
        height={300}
      />
      <div className='single-page-event-content-wraper'>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label htmlFor='email'> Get Registered for this event!</label>
        <input
          ref={emailInput}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button className='button' type="submit"> Submit</button>
      </form>
      { message ?  <p className="message">{message}</p> : ''} 
      </div>
    </div>
  )
}

export default SingleEvent
