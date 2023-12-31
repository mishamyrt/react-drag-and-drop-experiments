import { Card } from '@ozen-ui/kit/Card'
import { Link } from '@ozen-ui/kit/Link'
import { Stack } from '@ozen-ui/kit/Stack'
import { Typography } from '@ozen-ui/kit/Typography'

import type { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { libraries } from '../../libraries'

import styles from './LibrariesList.module.scss'

const repoLink: string = import.meta.env.VITE_REPO_URL

export const LibrariesList: FC = () => {
  return (
    <Stack direction="column" gap="m">
      <Card className={styles.card}>
        <Stack direction="column" gap="l">
          {libraries.map(({ name, Example }) =>
            Example
              ? (
              <Link
                variant="heading-2xl"
                as={RouterLink}
                key={name}
                to={`/lib/${name}`}
              >
                {name}
              </Link>
                )
              : (
              <Typography key={name} color="secondary" variant="heading-2xl">
                {name}
              </Typography>
                ),
          )}
        </Stack>
      </Card>
      <Stack fullWidth className={styles.footer}>
        <Link className={styles.repoLink} href={repoLink}>
          GitHub
        </Link>
      </Stack>
    </Stack>
  )
}
