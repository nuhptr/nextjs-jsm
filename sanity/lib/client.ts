import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn, token } from "../env"

// for read data from sanity
export const readClient = createClient({ apiVersion, dataset, projectId, useCdn })

// for write data to sanity
export const writeClient = createClient({ apiVersion, dataset, projectId, useCdn, token })
