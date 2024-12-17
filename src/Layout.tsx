import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main className="min-h-screen bg-gradient-conic from-sky-200 to-blue-300">
      <Outlet />
    </main>
  );
}

export default Layout;
