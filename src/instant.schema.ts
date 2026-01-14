/** @format */

// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from '@instantdb/core'

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.string(),
      created: i.date().indexed().optional(),
      updated: i.date().indexed().optional(),
    }),
    $users: i.entity({
      // System Columns
      email: i.string().unique().indexed().optional(),
      imageURL: i.string().optional(),
      type: i.string().optional(),
      // Custom Columns
      avatarURL: i.string().optional(),
      plan: i.string().optional(),
      firstName: i.string().optional(),
      lastName: i.string().optional(),
      created: i.date().optional(),
      updated: i.date().optional(),
      lastLogon: i.date().optional(),
    }),
    exercises: i.entity({
      name: i.string().unique().indexed(),
      videoURLs: i.json().optional(),
      imageURLs: i.json().optional(),
      note: i.string().optional(),
      created: i.date().indexed().optional(),
      updated: i.date().indexed().optional(),
    }),
  },
  links: {
    // ------------------------
    //        User Links
    // ------------------------
    userFiles: {
      forward: {
        on: '$files',
        has: 'one',
        label: 'owner',
        onDelete: 'cascade',
      }, // Each file has one owner, which is a user id
      reverse: {
        on: '$users',
        has: 'many',
        label: 'files',
      }, // Each user can have many files
    },
    exerciseSubstitutions: {
      forward: {
        on: 'exercises',
        has: 'many',
        label: 'substitutions',
      },
      reverse: {
        on: 'exercises',
        has: 'many',
        label: 'es',
      },
    },
  },
})

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema

export type { AppSchema }
export default schema
