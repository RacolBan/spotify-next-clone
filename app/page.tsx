import Center from 'components/Center';
import Sidebar from 'components/Sidebar';

export default function Home() {
  return (
   <div className='h-screen flex overflow-hidden'>
      <Sidebar /> 
      <Center />  
   </div>
  )
}
