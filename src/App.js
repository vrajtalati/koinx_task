
import './App.css';
import Graph from './components/Graph';
import Team from './components/Team';
function App() {
  return (
    <>
    <div className='bg-blue-900 w-100 h-12'></div>
    <div className='grid m-7 gap-9 sm:grid-cols-12'>
      <div className='  sm:col-span-8'>
      <div><Graph/></div>
      <div><Team/></div>
      </div>
      <div className='bg-blue-200 h-44 w-100 sm:col-span-4'>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
