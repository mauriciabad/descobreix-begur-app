import { z } from 'zod'
import { translatableLocales } from '~/i18n'

export const listPlacesSchema = z.object({
  locale: z.enum(translatableLocales).nullable(),
})

export const getPlacesSchema = z.object({
  locale: z.enum(translatableLocales).nullable(),
  id: z.number().min(1).int(),
})

export type ListPlacesInputData = z.infer<typeof listPlacesSchema>

export type GetPlacesInputData = z.infer<typeof getPlacesSchema>
