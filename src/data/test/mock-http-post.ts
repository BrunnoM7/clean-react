import { HttpPostParams } from '@/data/protocols/http'
import faker from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement({ test: 'test', test2: 'test2' })
})
