/** @format */

// Docs: https://www.instantdb.com/docs/permissions

import type { InstantRules } from '@instantdb/core'

const dataBind = [
  // Authenticated user
  'isAuthenticated',
  'auth.id != null',
  // User is the owner of the data
  'isOwner',
  "auth.id in data.ref('owner.id') || auth.id == data.id",
  // User is still the owner of the data
  'isStillOwner',
  "auth.id in newData.ref('owner.id') || auth.id == newData.id",
  // User's email is in the allowed test users list
  // NOTE: Update this to match ALLOWED_TEST_USERS in .env file
  // Format: "auth.email != null && (auth.email == 'email1@example.com' || auth.email == 'email2@example.com' || ...)"
  'isAllowedTestUser',
  "auth.email != null && (auth.email == 'michael.fitzgerald.1406@gmail.com')",
]

const rules = {
  attrs: {
    allow: {
      $default: 'false',
    },
  },
  $files: {
    allow: {
      create: 'isAuthenticated && isAllowedTestUser',
      view: 'isAuthenticated && isOwner && isAllowedTestUser',
      update: 'isAuthenticated && isOwner && isStillOwner && isAllowedTestUser', // Allow update if: no owner yet (new file) OR you are the owner and remain the owner
      delete: 'isAuthenticated && isOwner && isAllowedTestUser',
    },
    bind: dataBind,
  },
  $users: {
    allow: {
      view: 'isAuthenticated && isAllowedTestUser',
      create: 'false',
      update: 'isAuthenticated && isOwner && isStillOwner && isAllowedTestUser',
      delete: 'false',
    },
    bind: dataBind,
  },
  exercises: {
    allow: {
      view: 'isAuthenticated && isAllowedTestUser',
      create: 'isAuthenticated && isAllowedTestUser',
      update: 'isAuthenticated && isAllowedTestUser',
      delete: 'isAuthenticated && isAllowedTestUser',
    },
    bind: dataBind,
  },
  program: {
    allow: {
      view: 'isAuthenticated && isAllowedTestUser',
      create: 'isAuthenticated && isAllowedTestUser',
      update: 'isAuthenticated && isAllowedTestUser',
      delete: 'isAuthenticated && isAllowedTestUser',
    },
    bind: dataBind,
  },
} satisfies InstantRules

export default rules
