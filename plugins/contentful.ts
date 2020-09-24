import * as contentful from 'contentful'
import { CreateClientParams } from 'contentful/index'

const config: CreateClientParams = {
  space: process.env.CTF_SPACE_ID as string,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN as string
}

export const createClient = () => contentful.createClient(config)
