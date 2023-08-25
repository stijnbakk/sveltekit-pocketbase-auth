# Sveltekit + Pocketbase + Authentication (SSR)

Simple implementation of sveltekit in SSR with pocketbase and authentication.

It works simply like this:

1. in `hooks.server.ts` a pocketbase client is initiated for the user, to be passed with `locals` to server side
2. cookies are retrieved if available
3. server-side, it uses `locals.pocketbase` created in hooks for authentication (`routes/auth/+page.server.ts`)
4. upon succesful authorization, serverside sets the cookies
5. hooks, in turn, set the `locals.user`
6. at top level, `+layout.server.ts` checks if `locals.user` exists, and if it does, passes it as `user` for `$page.data` use

## To setup

1. Download / clone repo
2. Add or start [Pocketbase](https://pocketbase.io/docs/)
3. Edit `.env.example` to match with your pocketbase url
4. Install dependencies `yarn`
5. Create user in pocketbase dashboard
6. Run and use `yarn dev`
