import React from 'react'
import Patient from './Patient'

const Row4 = () => {
  return (
    <>
    <Patient/>
    
<div className="mx-1 md:mx-[160px] mt-10 md:mt-[50px] 
     ml-[10px] md:ml-[400px] flex
     ">
  
        <div rowSpan='2'className="p-4 text-center font-semibold rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner w-[140px] ml-[30px]  
        
        
        ">Ward Name</div>
        <div className="p-4 rounded-[5px] text-center font-semibold bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner w-[140px] ml-[99px]  <!-- Updated left margin value -->
        border-transparent">Occupied</div>
        <div className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner text-center font-semibold
        w-[140px] ml-[99px]
        border-transparent">Vacant</div>
        <div className="p-4 rounded-[5px] text-center font-semibold bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-[99px]
        border-transparent">Total</div>
        
      
    
</div>
</>
    
  )
}

export default Row4