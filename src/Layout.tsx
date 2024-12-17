import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-sky-400">
      <Outlet />
    </div>
  );
}

export default Layout;
