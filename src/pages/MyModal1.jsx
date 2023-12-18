import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
const MyModal1 = ({open,onclose}) => {
    if(!open) return null
  return (
    <>
    <div className='h-[650px] fixed  w-[1200px]
    
     
    top-[20px] bg-white hover:shadow-inner shadow-4xl  left-[260px] '>
       <div className='bg-blue-400 h-[43px] flex'>
         <h2 className='pt-2 pl-[80px] font-bold'>Sample Collection</h2>
         <MdClose onClick={()=>{onclose()}} className='bg-red-400  cursor-pointer ml-[892px] mt-2' color='white' size={26}/>
        </div>
        <div className='flex pl-[200px]'>
        <div className='flex-co ml-8 mt-5'>
      
        <p className=" font-bold mb-10">Expected Date :Patholgy1</p>
        <p className=" font-bold mb-10">Date of Collection : Patholgy1 </p>
        <p className=" font-bold mb-10">Pathology center :Patholgy1 </p>
        <div className='flex-none md:ml-[1px] '>
        <label className="block flex-col text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
          Approved By*
        </label> 
        <input  required className="shadow appearance-none border ml border-blue-300 rounded w-[222px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="testName" name="testName" type="text" 
        
        />

        
        </div>
        </div>
        <div className='flex-co pl-[111px] mt-5 ml-[5]'>
       <p className=" font-bold mb-10 ml-[200px]">Test Name *</p>
        <p className=" font-bold mb-10 ml-[200px]">Approved Date : </p>
        <p className=" font-bold mb-10 ml-[200px]">Collection By: </p>
        <div className='flex'>
        <div className='flex-none md:ml-[1px] '>
        <label className="block flex-col text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
          Approved Date*
        </label> 
        <input  required className="shadow appearance-none border border-blue-300 rounded w-[222px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="testName" name="testName" type="text" 
        
        />

        
        </div>
        <div className='flex-none md:ml-[20px] mt-7 '>
     
        <input placeholder='Drop a file here' required className="shadow appearance-none border border-blue-300 rounded w-[222px] py-2 px-3 text-gray-700 leading-tight focus:outline-none ml-11 focus:shadow-outline" id="testName" name="testName" type="text" 
        
        />

        
        </div>
        </div>
        </div>
        </div>
        <label className="block pl-[231px] flex-col text-gray-700   mt-10 text-sm font-bold mb-2" htmlFor="testName">
         Result*
        </label>
        <input required className="shadow appearance-none border border-blue-300  ml-[236px] mt-4 rounded w-[800px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="testName" name="testName" type="text" 
        
        />
        
        <table className="min-w-[1200px] border-1 mt-10 ">
     
     <thead >
       <tr>
         {['Sr No', 'Test Parameter Name', 'Report Value', 'Reference Range'].map(header => (
           <th key={header} className="py-2 px-4  border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
             {header}
           </th>
         ))}
       </tr>
     </thead>
     <td  class="p-4"><div className='w-[160px]'> Data 2</div></td>
          <td class="p-4"><div className='w-[180px]'> Data 3</div></td>
          <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
          <td class="p-4"><div className='w-[190px]'> Data 4</div></td>

          
    
    
     <tbody>
    
     
    
   
       

      
       
     </tbody>
   </table>
   <Link to='/Info'>
        <button className=" bg-blue-500 text-white border-black-400 border-2  w-[100px] rounded-[2px] font-bold py-2 px-4 mt-5 md:mt-[25px]  ml-5 md:ml-[945px] focus:outline-none focus:shadow-outline" type="button">
           ✔ Save
          </button>
          </Link>
    </div>
    </>
  )
}

export default MyModal1