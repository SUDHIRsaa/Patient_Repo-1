import React from 'react'
import { FaCross } from 'react-icons/fa'
import { FiCrosshair } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const MyModal = ({open,onclose}) => {
   if(!open) return null
  return (
    <>
    <div className='h-[400px] fixed  w-[700px]
    
     
    top-[200px] bg-white hover:shadow-inner shadow-2xl  left-[450px] '>
        <div className='bg-blue-400 h-[43px] flex'>
         <h2 className='pt-2 pl-8 font-bold'>Sample Collection</h2>
         <MdClose onClick={()=>{onclose()}} className='bg-red-400  cursor-pointer ml-[492px] mt-2' color='white' size={26}/>
        </div>
        <div className='flex-co ml-8 mt-5'>
        <label className='flex ml-2 ' >Sample Collection Person Name*</label>
        <input type='text' className='border-blue-300 border-2  ml-2 w-[600px]  shadow-inner hover:shadow-inner outline-none rounded-[11px] bg-[#FFFFFF] h-[50px] mt-2 mb-2' />
        
        <label className='flex ml-2 '>
          Sample Collection Date*
          </label>
        <input type='text' className='border-blue-300 border-2   ml-2 w-[600px]  shadow-inner hover:shadow-inner outline-none rounded-[11px] bg-[#FFFFFF] h-[50px] mt-2 mb-2' />
         
        <label className='flex ml-2'>
          Patholgy center*
          </label>
        <input type='text' className='border-blue-300 border-2  ml-2 w-[600px]  shadow-inner hover:shadow-inner outline-none rounded-[11px] bg-[#FFFFFF] h-[50px] mt-2 mb-2' />
        </div>
         

    </div>
    </>
  )
}

export default  MyModal