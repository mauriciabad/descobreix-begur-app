import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { AxiomRequest, withAxiom } from 'next-axiom'
import 'server-only'

import { apiRouter } from '~/server/api/router'
import { createContext } from '~/server/trpc'

const handler = withAxiom((req: AxiomRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: apiRouter,
    createContext: () => createContext(req),
  })
)

export { handler as GET, handler as POST }
