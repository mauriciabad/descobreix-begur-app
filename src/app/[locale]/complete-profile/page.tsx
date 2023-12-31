import type { Metadata } from 'next'
import { getTranslator, redirect } from 'next-intl/server'
import type { FC } from 'react'
import type { LocaleRouteParams } from '~/i18n'
import { getSession } from '~/server/get-server-thing'
import { CompleteProfileForm } from './_components/complete-profile-form'

export async function generateMetadata({
  params,
}: LocaleRouteParams): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'profile.completeProfile')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

const CompleteProfilePage: FC<LocaleRouteParams> = async () => {
  const session = await getSession()
  if (!session) redirect('/profile')

  const profile = {
    name: session.user.name ?? undefined,
  }

  return (
    <>
      <CompleteProfileForm defaultValues={profile} />
    </>
  )
}

export default CompleteProfilePage
