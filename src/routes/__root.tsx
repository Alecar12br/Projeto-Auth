// src/routes/__root.tsx
import { createRootRoute, Outlet,  } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({
  component: () => {
    
    return(
    <>
      
      <main className="min-h-screen bg-zinc-950 text-zinc-50 antialiased selection:bg-indigo-500/30">
        
        <Outlet />

      </main>

      
      <TanStackRouterDevtools />
    </>)
  },
})