
import AllEvents from '../../src/Components/Events/events-page'

export async function getStaticProps(){
    const {events_categories} = await import ('/data/data.json')

    return{
        props:{
            data: events_categories
        }
    }
}

export default function EventsPage({data}){
    return(
       <AllEvents data={data} />
    )
}