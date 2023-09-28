import { getResources, getResourcesPlaylist } from '@/sanity/actions'

import SearchForm from '@/components/search-form'
import Filters from '@/components/filters'
import ResourceCard from '@/components/resource-card'
import Header from '@/components/header'

// like ctrl+shift+r in chrome
export const revalidate = 900

interface IPageProps {
  searchParams: { [key: string]: string | undefined }
}

export default async function Page({ searchParams }: IPageProps) {
  console.log(searchParams)

  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  })

  const resourcesPlaylist = await getResourcesPlaylist()
  console.log(resourcesPlaylist)

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-no-repeat bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>
            Typescript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Header query={searchParams?.query || ''} category={searchParams?.category || ''} />

        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                id={resource._id}
                title={resource.title}
                image={resource.image}
                downloadLink={resource.downloadLink}
                downloadNumber={resource.views}
              />
            ))
          ) : (
            <p className='body-regular text-white-400'>
              No resources found. Try a different search.
            </p>
          )}
        </div>
      </section>

      {resourcesPlaylist.map((item: any) => (
        <section key={item._id} className='flex-center mt-6 w-full flex-col sm:mt-20'>
          <h1 className='heading3 self-start text-white-800'>{item.title}</h1>
          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {item.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                downloadLink={resource.downloadLink || ''}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
