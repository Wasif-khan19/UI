import { publicProcedure, router } from './trpc'

const appRouter = router({
    anyApiRoute: publicProcedure.query(()=>{
        return 'hello'
    })
})

export default appRouter

export type AppRouter = typeof appRouter