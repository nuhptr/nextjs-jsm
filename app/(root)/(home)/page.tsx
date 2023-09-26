import SearchForm from '@/components/search-form'
import Filters from '@/components/filters'
import { getResources } from '@/sanity/actions'

export default async function Page() {
  const resources = await getResources({ query: '', category: '', page: '1' })
  console.log(resources)

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
    </main>
  )
}
