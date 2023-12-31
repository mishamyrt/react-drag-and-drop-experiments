import { Typography } from '@ozen-ui/kit/Typography'

import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import styles from './KanbanColumn.module.scss'

export type KanbanColumnProps = PropsWithChildren<{
  title: string
  ready?: boolean
  active?: boolean
}>

export const KanbanColumn: FC<KanbanColumnProps> = ({
  title,
  children,
  active,
  ready,
}) => {
  return (
    <div
      className={clsx(styles.column, {
        [styles.active]: active,
        [styles.ready]: ready,
      })}
    >
      <div className={styles.header}>
        <Typography color="secondary" variant="heading-xl">
          {title}
        </Typography>
      </div>
      <div className={styles.items}>{children}</div>
    </div>
  )
}
