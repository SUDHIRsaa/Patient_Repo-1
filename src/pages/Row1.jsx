import React, { useRef } from 'react'
import Patient from './Patient'
import { FiArrowDown } from 'react-icons/fi'
import { useReactToPrint } from 'react-to-print'

import { Link } from 'react-router-dom'
import { FaPrint, FaSearch } from 'react-icons/fa'
import { AiFillPrinter } from 'react-icons/ai'

const Row1 = () => {
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Patient',
    onAfterPrint: () => alert('Patient')
  });
  return (
 <>
 
    <Patient/>
     <div className='flex'>
      <div className='inline-flex md:inline-flex mt-[20px] md:mt-[50px]
      pl-[9px] md:pl-[100px]
      ml-[9px] md:ml-[129px]
      pr-[9px] md:pr-[59px]
      rounded-[10px]    
      w-[600px] sm:w-[1550px]  
      pt-[10px]   pb-30 text-center bg-white shadow-2xl  hover:shadow-inner   ' >
      <h2 className='text-center pb-3'>Existing Patient Name</h2>
      
      </div>
      <div className='flex mt-[17px] md:mt-[17px] ml-[29px] md:ml-[300px]
      border-[1px] border-[transparent] rounded-[10px]
      bg-[#E1E1E1]
      pt-[10px] pb-[10px] pl-[10px] pr-[10px]
      w-[93px]
      h-[45px] md:h-[50px]
      cursor-pointer
      shadow-2xl hover:shadow-inner

      
      '>
        <h2 className='pl-3 pr-3' >All</h2>
       <FiArrowDown  className='pt-1'size={20} />

      </div>
      <Link to='/Register'>
      <div
      
      
      className="bg-[#135A95]
      cursor-pointer
      h-[45px]
      text-white
      w-[181px]
      rounded-[5px]
      pl-[10px]
      pt-[10px]
      gap-13
      mt-[20px] md:mt-[15px]
      ml-[59px] md:ml-[490px]
      flex-shrink-0
      ">
       <h2>
        Register New Patient
       </h2>
      </div>
      </Link>
      </div>
     <div className='flex'>
         <div className='flex bg-white h-[45px]  pt-[10px] pr-[72px]
          ml-[9px] md:ml-[109px]
          mt-[20px] md:mt-[40px]
         pb-[11px]
         pl-[45px]
         flex-shrink-0
         rounded-[10px] shadow-2xl hover:shadow-inner
         
      
     
         '>
          <input placeholder='search...'
          
           
          className='outline-none'
          
          ></input>
          <FaSearch className='pt-1 t'size={22}/>
         </div>
         <div 
         
         onClick={handleprint}
         className='flex bg-[#135A95]
         h-[35px]
         w-[105px]
         ml-[19px] md:ml-[339px]
         mt-[20px] md:mt-[10px]
         rounded-[5px]
         cursor-pointer
         shadow-2xl hover:shadow-inner
         
         
         '>
        
         
          <AiFillPrinter color='white' size={20} className='ml-2 mt-1'/>
          <h2 className='text-center pl-5
          font-bold
          text-white
          pt-[5px]
          '>Print</h2>
       

          
        
             

         </div>
         

     </div>

     <div  ref={componentRef}  className="mx-1 md:mx-[160px] mt-20 md:mt-[10px] 
     ml-[10px] md:ml-[200px]
     ">
  <table
   cellPadding='140px'
  cellSpacing='40px'
  className="border-separate w-[2200px] table-row-group text-center
  mt-[10px] md:mt-[50px]
  ml-[10px] md:ml-[10px]
  
  table-auto
   ">
    <thead 
    
    >
      <tr 
      
       
      >
        <th  className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner  ml-[30px]  
        px-[222px]
        
        
        ">Patient Number</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner w-[140px] ml-[30px]
       
        border-transparent">Patient Name</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Age/Gender</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Visit date/time</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Actions</th>
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td class="p-4 ">
            <div className='w-[160px]'> Data 1</div>
            </td>
          <td class="p-4"><div className='w-[160px]'> Data 2</div></td>
          <td class="p-4"><div className='w-[160px]'> Data 3</div></td>
          <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
          <td class="p-4">
            <div className='flex justify-between'>
            <Link to='/Register'>
            <div
            
            className='w-[60px] h-[20px] 
            cursor-pointer
            font-semibold
            text-xs
            border-[1px] border-[transparent] rounded-[5px]
            bg-[white] border-blue-800'>Edit</div>
            </Link>
            <div className='w-[90px] h-[20px] 
            cursor-pointer
          text-xs ml-1
          font-semibold
            border-[1px] border-[transparent] rounded-[5px]
            bg-[white] border-blue-800'>View History</div>
            <div className='w-[60px] h-[20px] 
            cursor-pointer flex justify-evenly
             ml-1
             text-center
             font-semibold
            
            border-[1px] border-[transparent] rounded-[5px]
            bg-[white] border-blue-800'><text className='mb-5'>...</text><FiArrowDown size={12}className='mt-1'/></div>
          
            </div>
          </td>
        </tr>
    
    </tbody>
  </table>
</div>

     
    </>
  )
}

export default Row1