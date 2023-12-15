import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Patient = () => {
  const{isActive, setIsActive}=React.useState(false)
  return (
    <div>
      <div className=' w-[600px] sm:w-[1550px]  bg-[#0a9dff8f] height-[100px] '>
        <div className='my-14 sm:my-0 flex '>
          <FaHome className='text-[white] text-3xl  mt-10 ml-10 sm:ml-22 sm:height-[46.875px] w-[43.75] sm:ml-20  ' size={29}/>
          <ul className='flex sm:flex justify-evenly'>
            
            
              <Link to='/NewPatients'className="w-[80px] pl-0  text-14 sm:w-[195px] h-[70px] bg-[#0473DA] flex-shrink: 0
            pt-[24px] text-center mt-[24px]  ml-[24px]
            shadow-2xl 
            rounded-[10px_10px_0px_0px] overflow-hidden 
            sm:ml-[125px]
            font-black
            shadow-md-[-5px 4px 10px 0px rgba(0, 0, 0, 0.25)]
            cursor-pointer hover:bg-[white] hover:text-[#11375A] hover:shadow-inner hover:font-bold hover:shadow-md-[5px 4px 10px 0px rgba(0, 0, 0, 0.25]
              sm:w-
            "
            >New Patients</Link>
           
            
              <Link to='/TriagedPatients'className='w-[80px] pl-0 text-14 sm:w-[195px] h-[70px] bg-[#0473DA] flex-shrink: 0
            pt-[24px] text-center
            rounded-[10px_10px_0px_0px] overflow-hidden 
            ml-[24px] mt-[24px]  hover:shadow-inner shadow-2xl 
            
            sm:ml-[125px]
            font-black
            shadow-md-[-5px 4px 10px 0px rgba(0, 0, 0, 0.25)]
            cursor-pointer hover:bg-[white] hover:text-[#11375A] hover:font-bold hover:shadow-md-[5px 4px 10px 0px rgba(0, 0, 0, 0.25]
            '>Triaged Patients</Link>
           
            
              <Link to='/FinalizedPatients' className='w-[80px] pl-0 text-14 sm:w-[195px] h-[70px] bg-[#0473DA] flex-shrink: 0
            pt-[24px] text-center
            rounded-[10px_10px_0px_0px] overflow-hidden 
            ml-[24px] mt-[24px] 
            font-black
            sm:ml-[125px] hover:shadow-inner shadow-2xl 
            shadow-md-[-5px 4px 10px 0px rgba(0, 0, 0, 0.25)]
            cursor-pointer hover:bg-[white] hover:text-[#11375A] hover:font-bold hover:shadow-md-[5px 4px 10px 0px rgba(0, 0, 0, 0.25]
            '>Finalized Patients</Link>
            
            
              <Link to='/BedInformation' className='w-[80px] pl-0 text-14 sm:w-[195px] h-[70px] bg-[#0473DA] flex-shrink: 0
            pt-[24px] text-center
            font-black
            rounded-[10px_10px_0px_0px] overflow-hidden 
            ml-[24px] mt-[24px] 
            sm:ml-[125px]  hover:shadow-inner shadow-2xl 
            shadow-md-[-5px 4px 10px 0px rgba(0, 0, 0, 0.25)]
            cursor-pointer hover:bg-[white] hover:text-[#11375A] hover:font-bold hover:shadow-md-[5px 4px 10px 0px rgba(0, 0, 0, 0.25]
            '>Bed Information</Link>
            
          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default Patient