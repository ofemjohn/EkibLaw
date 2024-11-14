
import { Outlet } from 'react-router-dom';
import ScrollUpButton from './components/ScrollUpButton';


export default function App() {
  return (
    <div>
      <main>
        {/* <ScrollUpButton /> */}
        <Outlet />
        <ScrollUpButton /> 
      </main>
    </div>
  );
}
 