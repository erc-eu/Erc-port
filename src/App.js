import CardUser from './Components/CardUser';
import Description from './Components/Description';
import GitProjetos from './Components/GitProjetos';
import MenuHeader from './Components/MenuHeader';
import React from 'react';
function App() {
  return (
    <div>
        <div className='flex flex-col w-full justify-center items-center bg-slate-950 '>
          <MenuHeader />
        </div>
          <div className='flex flex-col sm:flex-row w-full justify-center overflow-y-auto'>
            <div className='flex justify-center items-center'>
              <CardUser />
            </div>
            <div className='flex justify-center items-center'>
              <Description />
            </div>
          </div>
          <div className='flex flex-col w-full h-96 justify-center items-center bg-slate-950 '>
            <GitProjetos/>
          </div>
    </div>

  );
}

export default App;
