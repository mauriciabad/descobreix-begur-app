import type { Metadata } from 'next'
import { getTranslator, redirect } from 'next-intl/server'
import type { FC } from 'react'
import type { LocaleRouteParams } from '~/i18n'
import { getSession } from '~/server/get-server-thing'
import { UserPreview } from './_components/user-preview'
import { UserTabs } from './_components/user-tabs'

export async function generateMetadata({
  params,
}: LocaleRouteParams): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'profile')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

const ProfilePage: FC<LocaleRouteParams> = async () => {
  const session = await getSession()
  if (!session) {
    redirect('/profile/login')
  }

  return (
    <>
      <UserPreview user={session.user} className="bg-white p-4" />
      <UserTabs />
    </>
  )
}

export default ProfilePage
