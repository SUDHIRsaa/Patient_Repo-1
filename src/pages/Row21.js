import React, { useState,useRef } from 'react';
import 'tailwindcss/tailwind.css';
import { FaCheck, FaSave } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';
import { FaPrint, FaSearch } from 'react-icons/fa'
import { AiFillPrinter } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
const PathologyBill = () => {
    const [zoom, setZoom] = useState(100);
    const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Patient',
    onAfterPrint: () => alert('Patient')
  });
  return (
    <div className="container mt-[58px] sm:mt-[1px]  bg-white p-4">
        <div className='flex  h-[55px]  w-[500px] sm:w-[1494px]  bg-[#EAEAEA]'>
      <h2 className="text-xl ml-[39px] flex font-bold mb-4 mt-0 sm:mt-4">Pathology Bill</h2> 
   <Link to = '/GenerateBill' >
      <button className=" flex ml-[20px] md:ml-[800px] h-14 md:h-[35px] w-[] md:w-[172px] mt-0 sm:mt-3 px-4 py-2 bg-blue-900 text-white rounded">
       <FaCheck className='bg-white mt-2 mr-3' color='black' size={11}/>
        Generate Bill</button>
        </Link>
        <Link to = '/Pathologytest' >
      <button className=" flex ml-[12px] md:ml-[31px] px-4 py-2  mt-0 sm:mt-3 h-14 md:h-[35px] w-[] md:w-[172px] bg-blue-500 text-white rounded">
        <FaStickyNote  className=' mt-1 mr-3'  size={16}/>Pathology Test</button>  
        </Link>
      </div>
     
      <div className='flex'>
      <div className='flex bg-white h-[45px]  pt-[10px] pr-[72px]
          ml-[9px] md:ml-[109px]
          mt-[20px] md:mt-[20px]
          w-[273px]
         pb-[11px]
         pl-2
         border-[#00000080]
         
         flex-shrink-0
         rounded-[10px] shadow-2xl hover:shadow-inner
         
      
     
         '>
          <input placeholder='search...'
          
           
          className='outline-none'
          
          ></input>
          <FaSearch className='pt-1 t'size={22}/>
         </div>
        <div className='flex mt-2 sm:mt-[32px] ml-0 sm:ml-[700px]'>
            <h2>Zoom:</h2>
            <div className='rounded-[4px] border-1 pl-2   border-[#00000080] h-[29px] w-[77px]'>
                100%
            </div>
        </div>
        
        <div className='flex mt-0 md:[62px]'>
            
        <FaSave size={22} className='ml-0 sm:ml-4  cursor-pointer mt-4 sm:mt-8'/>
        <AiFillPrinter onClick={handleprint} size={22}  className='ml-0  sm:ml-4 mt-4 sm:mt-8 cursor-pointer' />
        <FiSave size={22}  className='ml-0 sm:ml-4 mt-4 sm:mt-8 cursor-pointer'/>
        </div>
        </div>
    
  
      <table  ref={componentRef} className="min-w-full bg-white border mt-10">
     
        <thead>
          <tr>
            {['Bill No', 'Case ID', 'Reporting Date', 'Patient Name', 'Reference Doctor', 'Amount', 'Paid Amount (Rs)', 'Balance Amount(Rs)'].map(header => (
              <th key={header} className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        {/* You can map through your data array here */}
        <tbody>
          {/* Example Row */}
          <tr key={1}>
            {['PATJH01', 'PATJH01', '12/06/23 - 7:30 am', 'Raj Chavan','Ankita Vadher','5,500','2,500','3,000'].map(data => (
              <td key={data} className="py-2 px-4 border-b border-gray-200 text-sm">
                {data}
              </td>
            ))}
          </tr>

         
          
        </tbody>
      </table>

   
     
    </div>  
  );
}

export default PathologyBill;

