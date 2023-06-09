import Head from 'next/head'
import HomePage from '../src/Components/Home-Page/home-page'

export async function getServerSideProps(){
    const {events_categories} = await import ('/data/data.json')
  return{
    props:{ 
      data : events_categories || null,
    }
  }
}
 
export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage  data={data} />
    </div>
  )
}

