import CatEvents from '../../../src/Components/Events/catEvents'

export async function getStaticPaths() {
  // fetch categories from your data source
  const categories = await import('/data/data.json'); // assuming this returns an array of category objects

  // create an array of paths based on the categories
  const paths = categories.events_categories.map(category => ({
    params: { cat: category.id }
  }));

  // return the paths to Next.js
  return { paths, fallback: false };
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