import 'server-only'

import { router } from '~/server/trpc'
import { authRouter } from './auth'
import { missionsRouter } from './missions'
import { placeListsRouter } from './placeLists'
import { placesRouter } from './places'
import { profileRouter } from './profile'
import { verificationsRouter } from './verifications'

export const apiRouter = router({
  places: placesRouter,
  auth: authRouter,
  profile: profileRouter,
  missions: missionsRouter,
  placeLists: placeListsRouter,
  verifications: verificationsRouter,
})

export type ApiRouter = typeof apiRouter
