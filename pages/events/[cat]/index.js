import CatEvents from '../../../src/Components/Events/catEvents'

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context){
    const id = context.params.cat
    const {allEvents} = await import ('/data/data.json')
    const data = allEvents.filter(event => id === event.city)
    return{
        props:{data , pageName: id}
    }
}

export default function EventsCatPage({data , pageName}){
    return(
          <CatEvents data={data} pageName={pageName} />
    )
}