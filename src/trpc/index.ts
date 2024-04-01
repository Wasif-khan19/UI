
import { authRouter } from './auth-router'
import { publicProcedure, router } from './trpc'

const appRouter = router({
    auth: authRouter,
})

export default appRouter

export type AppRouter = typeof appRouter