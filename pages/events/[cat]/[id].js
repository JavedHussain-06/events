import SingleEvent from '../../../src/Components/Events/single-event'
export async function getStaticPaths(){

    const {allEvents} = await import ('/data/data.json')
    const path = allEvents.map(event => {
        return{
            params: {
                cat: event.city,
                id: event.id
             } 
        }
    })

    return {
        paths: path,
        fallback: false,
      }
}

export async function getStaticProps(context){
    const id = context.params.id
    const {allEvents} = await import ('/data/data.json')
    
    const data = allEvents.find( event => event.id === id)
    return{
        props:{data}
    }
}

const Event = ({data}) =>  <SingleEvent data={data}/>

export default Event