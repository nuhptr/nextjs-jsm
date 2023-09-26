import { groq } from 'next-sanity'

import { readClient } from './lib/client'
import { buildQuery } from './utils'

interface IGetResourcesParams {
  query: string
  category: string
  page: string
}

export const getResources = async (params: IGetResourcesParams) => {
  const { query, category, page } = params

  try {
    const resource = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{ _id, title, downloadLink, "image": poster.asset->url, views, slug, category }`
    )

    return resource
  } catch (error: any) {
    console.error(error)
  }
}
