import { Session } from 'next-auth'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { UserAvatar } from '~/components/generic/user-avatar'

export const UserPreview: FC<{ user: Session['user']; className?: string }> = ({
  user,
  className,
}) => {
  const t = useTranslations('profile.preview')

  return (
    <div className={className}>
      <UserAvatar user={user} className="mx-auto mb-2 block h-24 w-24" />
      <h2 className="text-center  text-lg font-bold">
        {user.name ?? t('anonymous')}
      </h2>
    </div>
  )
}
