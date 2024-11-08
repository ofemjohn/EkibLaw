
import { Outlet } from 'react-router-dom';
import ScrollUpButton from './components/ScrollUpButton';


export default function App() {
  return (
    <div>
      <main>
        {/* <ScrollUpButton /> */}
        {/* All routes are rendered here */}
        <Outlet />
        <ScrollUpButton /> 
      </main>
    </div>
  );
}
 