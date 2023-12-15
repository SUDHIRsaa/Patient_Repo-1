import React from 'react'
import Patient from './Patient'
import { FaSearch } from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Row2 = () => {
  return (
    <>
    <Patient/>
    <div className='flex'>
         <div className='flex bg-white h-[45px]  pt-[10px] pr-[72px]
          ml-[9px] md:ml-[109px]
          mt-[20px] md:mt-[40px]
         pb-[11px]
         pl-[45px]
         w-[355px]
         top-[146px]
          left-[89px]
          
         flex-shrink-0
         rounded-[10px] shadow-2xl hover:shadow-inner
         
      
     
         '>
          <input placeholder='search...' className='w-[244px] outline-none' ></input>
          <FaSearch className='pt-1'size={22}/>
         </div>
         <div className='flex mt-[17px] md:mt-[17px] ml-[29px] md:ml-[300px]
      border-[1px] border-[transparent] rounded-[10px]
      bg-[#E1E1E1]
      pt-[10px] pb-[10px] pl-[10px] pr-[10px]
      w-[275px]
      h-[45px] md:h-[50px]
      top-[146px]
      left-[791px]
      cursor-pointer
      shadow-2xl hover:shadow-inner

      
      '>
        <select className='pl-3 pr-3  bg-[#E1E1E1] border-none border-transparent
         outline-none
        '>
          <option className='text-center'>All</option>
          <option className='text-center'>General</option>
          <option className='text-center'>Snake Bite</option>
          <option className='text-center'>Animal Bite</option>
          <option className='text-center'>Emergency Labour</option>
          <option className='text-center'>Medico-Legal</option>
            </select>
       

      </div>
        </div>
        <div className="
     ">
        <table
   
  cellSpacing='50px'
  className="border-separate w-full table-row-group text-center
  
  ml-[10px] md:ml-[10px]
  
  table-auto
   ">
    <thead 
    >
      <tr className='ml-[11px]'
      
       
      >
        
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner w-[140px] ml-[30px]  <!-- Updated left margin value -->
        border-transparent">SrN</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Triage Status</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Hospital Number</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Age/Gender</th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Visit Date/Time </th>
        <th className="p-4 rounded-[5px] bg-white pt-[8px] pr-[2px] pb-[1px] pl-[4px]
        shadow-2xl hover:shadow-inner
        w-[140px] ml-20
        border-transparent">Actions</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td class="p-4"><div className='w-[160px]'> Data 1</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 2</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 3</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 5</div></td>
        <td class="p-4">
          <div className='flex justify-between'>
          <Link to='/Register'>
          <div className='w-[60px] h-[20px] 
          cursor-pointer
          text-xs
          font-semibold
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

export default Row2