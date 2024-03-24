import { handlers as userHandlers } from './user'
import { handlers as todoHandlers } from './todo'

export const handlers = [
  ...userHandlers,
  ...todoHandlers,
]