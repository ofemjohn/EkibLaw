
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <main>
        {/* All routes are rendered here */}
        <Outlet />
      </main>
    </div>
  );
}
