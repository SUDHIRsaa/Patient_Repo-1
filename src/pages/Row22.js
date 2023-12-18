import React from 'react'
import { Link } from 'react-router-dom'
const Row22= () => {
  return (
    <>
    <div className='w-[1540px] flex h-[38px] bg-[#EAEAEA]'>
      <h2 className='h-[18px] w-[152px] font-semibold top-[10px] pt-2  ml-14'>Bill No:  A4581</h2>
      <h2 className='h-[18px] w-[62px] font-semibold  pt-2 ml-[261px]'>Case Id:</h2>
      
    </div>
    <div className=' sm:flex   ml-9 sm:ml-[71px]
    mt-[30px] sm:mt-[10px]  '>
   
      <div className='ml-[14px] mt-[10px]'>
      
        <label className='ml-[14px] mt-[10px] flex'>Test Name:*</label>
        <select className='w-[362px] border-2 flex border-blue-300  bg-[#EAEAEA] outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'>

        <option>Test Name</option>
        <option>Test Name</option>

          </select>
          <button className="bg-blue-500 hover:bg-blue-700 text-white h-[24px] font-bold  mt-5 md:mt-15 w-[70px] ml-5 md:ml-15 rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
           + Add
          </button>
      </div>
      <div className='ml-[14px] mt-[10px]'
      >
        <label className='ml-[14px] mt-[10px] flex'>Report Days:</label>
        <input className='w-[242px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
       
      </div> 
     
      <div className='ml-[14px] mt-[10px]'
      >
        <label className='ml-[14px] mt-[10px] flex'>Report Date:</label>
        <input className='w-[242px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
      </div> 
      <div className='ml-[31px] mt-[10px]'
      >
        <label className='ml-[14px] mt-[10px] flex'>Tax:</label>
        <input className='w-[167px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
      </div>
      <div  className='ml-[31px] mt-[10px]'
      >
        <label className='ml-[14px] mt-[10px] flex'>Amount(Rs):</label>
        <input className='w-[162px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
      </div>
    </div>
    <div className='h-[1px] w-[1420px] mt-5 ml-6 bg-black'> 
        

        </div>
      <div className='sm:flex  ml-9 sm:ml-[181px]'>
        <div className='ml-[14px] mt-[10px]'>
      
        <label className='ml-[14px] mt-[10px] flex'>Test Name:*</label>
        <select className='w-[362px] border-2 border-blue-300  bg-[#EAEAEA] outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'>

        <option>Test Name</option>
        <option>Test Name</option>

          </select>
          
      </div>
      <div className='ml-[94px] mt-[10px] '
      >
        <label className='ml-[14px] mt-[10px] flex'>Doctor Name:</label>
        <input className='w-[242px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[38px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
       
      </div> 
      </div>
      <div className='ml-[200px] mt-[50px] '
      >
        <label className='ml-[14px] mt-[10px] flex'>Note:</label>
        <input className='w-[542px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[168px]   rounded-lg ml-[14px] mt-[10px]' type='text'/>
       
      </div> 
      <div className='w-[1200px] mt-11 ml-[224px] sm:flex h-[220px] bg-[#EAEAEA]'>
      <div className="w-1/3 p-4 ml-[210px]">
        <p className=" font-bold mb-5">Total Amount:</p>
        <p className=" font-bold mb-5">Discount (Rs): </p>
        <p className=" font-bold mb-5">Tax (Rs): </p>
        <p className=" font-bold mb-5">Net Amount:</p>
        
      </div>
      <div className="w-1/3 p-4 flex-col">
        <div className='flex'>
      <label className='ml-[14px] flex '>Payment Mode:</label>
        <select className='w-[342px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[58px]   rounded-lg ml-[14px] mt-[10px]' type='text'>
          <option>Payment Mode</option>
          <option>Payment Mode</option>
        </select>
        </div>
        <div className='flex '>
      <label className='ml-[14px] mt-[18px]
      flex '>Amount Rs:</label>
        <input className='w-[342px] border-2 border-blue-300 outline-none shadow-2xl hover:shadow-inner h-[48px]   rounded-lg ml-[39px] mt-[18px]' type='text'/>
        <Link to='/Info'>
        <button className=" bg-blue-500 text-black border-black-400 border-2  w-[120px] rounded-[2px] font-bold py-2 px-4 mt-5 md:mt-[85px]   focus:outline-none focus:shadow-outline" type="button">
           Submit
          </button>
          </Link>
        </div>
      </div>
     
      
      </div>
  </>
   
  );
}

export default Row22;
