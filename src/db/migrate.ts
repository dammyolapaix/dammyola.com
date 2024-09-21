import { migrate } from 'drizzle-orm/postgres-js/migrator'
import config from '../../drizzle.config'
import db, { connection } from '.'
import env from '@/env'

if (!env.DB_MIGRATING)
  throw new Error('You must set DB_MIGRATING to "true" when running migrations')

const migrateDB = async () => {
  console.log('Migrating...')
  await migrate(db, { migrationsFolder: config.out! })
  await connection.end()
  console.log('Migration ended')
}

migrateDB()
