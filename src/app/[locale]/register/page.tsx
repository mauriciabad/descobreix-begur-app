import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslator } from 'next-intl/server'
import type { FC } from 'react'
import { UnderConstruction } from '~/components/under-construction'
import type { LocaleRouteParams } from '~/i18n'

export async function generateMetadata({
  params,
}: LocaleRouteParams): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'register')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

const RegisterPage: FC<LocaleRouteParams> = () => {
  const t = useTranslations('register')
  return (
    <>
      <UnderConstruction />
      <p className="text-center">{t('content')}</p>
    </>
  )
}

export default RegisterPage