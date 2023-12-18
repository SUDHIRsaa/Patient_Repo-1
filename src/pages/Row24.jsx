import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import MyModal1 from './MyModal1';
import { FaBars, FaCheck, FaDumpster, FaEdit, FaHamburger, FaPen, FaSave, FaTrash, FaUser } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';
import { FaPrint, FaSearch } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print'
import MyModal from './Modal';
const Row24 = () => {
  const componentRef = useRef();
  const handleprint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Patient',
    onAfterPrint: () => alert('Patient')
  });

  const [showModal, setShowModal] = React.useState(false);
  const [showModal1, setShowModal1] = React.useState(false);


  return (
    <>
      <div className='flex  h-[55px]  w-[500px] ml-10 sm:w-[1494px]  bg-[#EAEAEA]'>
        <h2 className="text-xl ml-[39px] flex font-bold mb-4 mt-0 sm:mt-4">Pathology Bill</h2>
        <Link to='/GenerateBill' >
          <button className=" flex ml-[20px] md:ml-[800px] h-14 md:h-[35px] w-[] md:w-[172px] mt-0 sm:mt-3 px-4 py-2 bg-blue-900 text-white rounded">
            <FaCheck className='bg-white mt-2 mr-3' color='black' size={11} />
            Generate Bill</button>
        </Link>
        <Link to='/Pathologytest' >
          <button className=" flex ml-[12px] md:ml-[31px] px-4 py-2  mt-0 sm:mt-3 h-14 md:h-[35px] w-[] md:w-[172px] bg-blue-500 text-white rounded">
            <FaStickyNote className=' mt-1 mr-3' size={16} />Pathology Test</button>
        </Link>
      </div>
      <div className='h-[60px] w-[1500px] ml-10 mt-1 bg-blue-400 flex '>
        <h2 className="text-xl ml-[39px] flex font-bold mb-4 mt-0 sm:mt-4 pt-2 md:pt-0"> Bill Detais</h2>
        <div className='flex ml-[114px] md:ml-[1066px]'>
          <FaBars onClick={() => setShowModal(true)} className='pt-4 cursor-pointer' color='white' size={41} />
          <FaPen onClick={() => setShowModal1(true)} className='pt-4 cursor-pointer' color='white' size={41} />
          <FaTrash onClick={{}} className='pt-4 cursor-pointer' color='white' size={41} />
          <FaPrint onClick={handleprint} className='pt-4 cursor-pointer' color='white' size={41} />
          <FaStickyNote onClick={{}} className='pt-4 cursor-pointer' color='white' size={41} />
        </div>

      </div>
      <MyModal open={showModal} onclose={() => {
        setShowModal(false)
      }} />
      <MyModal1 open={showModal1} onclose={() => { setShowModal1(false) }} />

      <div ref={componentRef} className="flex ml-10 md:ml-[111px]">
        <div className="w-1/3 p-4">
          <p className=" font-bold mb-10">Bill No:</p>
          <p className=" font-bold mb-10">Prescription No: </p>
          <p className=" font-bold mb-10">Doctor Name: </p>
          <p className=" font-bold mb-10">Blood Group:</p>
          <p className=" font-bold mb-10">Fenerated By:</p>
          <p className=" font-bold mb-10">Note :
            <input type='text' className=' border-black ml-2 w-[300px]  shadow-inner hover:shadow-inner outline-none rounded-[11px] bg-[#FFFFFF] h-[110px] mt-2 mb-2' />
          </p>



        </div>
        <div className="w-1/3 p-4">
          <p className=" font-bold mb-10">Patient Name:</p>
          <p className=" font-bold mb-10">Gender: </p>
          <p className=" font-bold mb-10">Email Id: </p>
          <p className=" font-bold mb-2">Case ID: </p>
          <p className=" font-bold mb-10">Age: </p>
          <p className=" font-bold mb-10">Mobile No: </p>
          <p className=" font-bold mb-10">Address:

          </p>

        </div>
        <div className="w-[370px] h-[410px] pl-10 mt-1 bg-[#D9D9D980]">

          <p className=" font-bold mb-10">Total: </p>
          <p className=" font-bold mb-10">Total Discount: </p>
          <p className=" font-bold mb-10">Total Tax: </p>
          <p className=" font-bold mb-10">Net Amount: </p>
          <p className=" font-bold mb-10">Total Diposit: </p>
          <p className=" font-bold mb-10">Balance Amount : </p>

        </div>
      </div>

      <table ref={componentRef} className="min-w-full bg-white border ">

        <thead >
          <tr>
            {['Test Name', 'Sample Collected', 'Experted Date', 'Approved By', 'Tax', 'Amount', 'Actions'].map(header => (
              <th key={header} className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <td class="p-4"><div className='w-[160px]'> Data 2</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 3</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
        <td class="p-4"><div className='w-[160px]'> Data 4</div></td>
        <td class="p-4 flex">

          <FaUser className=' ml-2 cursor-pointer ' />
          <FaPrint size={17} onClick={handleprint} className=' ml-2 cursor-pointer ' />


        </td>


        <tbody>








        </tbody>
      </table>

    </>

  )
}

export default Row24