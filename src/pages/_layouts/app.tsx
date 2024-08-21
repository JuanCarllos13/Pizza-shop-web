import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1 className="flex min-h-screen flex-col antialiased">Autenticação</h1>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
