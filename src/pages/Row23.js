import React, { useState } from 'react';
import { FiArrowDown, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Row23 = () => {
  const [testName, setTestName] = useState('')
  const [shortName, setShortName] = useState('')
  const [testType, setTestType] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [method, setMethod] = useState('')
  const [reportDays, setReportDays] = useState('')
  const [chargeCategory, setChargeCategory] = useState('')
  const [chargeName, setChargeName] = useState('')
  const [taxPercentage, setTaxPercentage] = useState('')
  const [standardChargeRs, setStandardChargeRs] = useState('')
  const [amountRs, setAmountRs] = useState('')
  return (
    <div className="p-8 mt-10  sm:mt-1">
      <h1 className='bg-blue-400 h-[66px] md:w-[1470px] font-bold pt-3 pl-2 md:pl-10 text-white text-[24px]'>Add Test Details</h1>
      <div className="mb-4 md:ml-[171px] mt-10">
        <div className='md:flex'>
          <div className='flex-none md:ml-[20px] '>
            <label className="block flex-col text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
              Test Name*
            </label>
            <input required className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="testName" name="testName" type="text"

              value={testName} onChange={(e) => setTestName(e.target.value)} />
          </div>
          <div className='flex-none md:ml-[70px]'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              Short Name *
            </label>
            <input required className="shadow appearance-none border  border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              value={shortName} onChange={(e) => setShortName(e.target.value)} />
          </div>
          <div className='flex-none md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              testType
            </label>
            <input className="shadow appearance-none border  border-blue-300  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setTestType(e.target.value)} value={testType} />
          </div>
          <div className='flex-none md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              categoryName*
            </label>
            <input required className="shadow appearance-none border  border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setCategoryName(e.target.value)} value={categoryName} />
          </div>



        </div>
        <div className='md:flex'>
          <div className='flex-none md:mt-12 md:ml-[20px]'>
            <label className="block flex-col text-gray-700 text-sm font-bold mb-2" htmlFor="testName">
              subCategory
            </label>
            <input className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="testName" name="testName" type="text"
              onChange={(e) => setSubCategory(e.target.value)} value={subCategory} />
          </div>
          <div className='flex-none md:mt-12 md:ml-[70px]'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              method
            </label>
            <input required className="shadow appearance-none border  border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setMethod(e.target.value)} value={method} />
          </div>
          <div className='flex-none  md:mt-12 md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              reportDays
            </label>
            <input required className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setReportDays(e.target.value)} value={reportDays} />
          </div>
          <div className='flex-none  md:mt-12 md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              chargeCategory
            </label>
            <select className="border focus:outline-none focus:shadow-outline border-blue-500 rounded-md p-2 mb-4 w-[260px] "

              onChange={(e) => setChargeCategory(e.target.value)} value={chargeCategory}
            >
              <option>Select </option>

            </select>
          </div>



        </div>
        <div className='md:flex'>
          <div className='flex-none md:mt-12 md:ml-[20px]'>
            <label className="block flex-col text-gray-700  text-sm font-bold mb-2" htmlFor="testName">
              chargeName
            </label>
            <select className="border focus:outline-none focus:shadow-outline border-blue-500 rounded-md p-2 mb-4 w-[230px] "

              onChange={(e) => setChargeName(e.target.value)} value={chargeName}
            >
              <option>Select </option>

            </select>
          </div>
          <div className='flex-none  md:mt-12 md:ml-[70px]'>
            <label className="block text-gray-700 text-sm  border-blue-300 font-bold mb-2" htmlFor="shortName">
              tax(%)
            </label>
            <input placeholder='%' className="shadow bg-[#EAEAEA]  appearance-none border placeholder-black placeholder:w-6 placeholder:text-center placeholder:pl-[162px] border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setTaxPercentage(e.target.value)} value={taxPercentage} />
          </div>
          <div className='flex-none  md:mt-12 md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              standardChargeRs
            </label>
            <input className="shadow appearance-none border bg-[#EAEAEA] border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setStandardChargeRs(e.target.value)} value={standardChargeRs} />
          </div>
          <div className='flex-none  md:mt-12 md:ml-[70px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              amountRs
            </label>
            <input className="shadow appearance-none border bg-[#EAEAEA] border-blue-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setAmountRs(e.target.value)} value={amountRs} />
          </div>



        </div>
        <div className='h-[1px] w-[1100px] mt-3 ml-6 bg-black'>


        </div>
        <div className='flex'>
          <div className='flex-none md:mt-12 md:ml-[20px]'>
            <label className="block flex-col text-gray-700  text-sm font-bold mb-2" htmlFor="testName">
              Test Parameters *
            </label>
            <select required className="border focus:outline-none focus:shadow-outline border-blue-500 rounded-md p-2 mb-4 w-[290px] "

              onChange={(e) => setChargeName(e.target.value)} value={chargeName}
            >
              <option>Select </option>

            </select>
          </div>
          <div className='flex-none  md:mt-12 md:ml-[90px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              Reference Range*
            </label>
            <input required className="shadow appearance-none border bg-[#EAEAEA] border-blue-300 rounded w-[290px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setAmountRs(e.target.value)} value={amountRs} />
          </div>
          <div className='flex-none  md:mt-12 md:ml-[90px]'>

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortName">
              Unit*
            </label>
            <input required className="shadow appearance-none border bg-[#EAEAEA] border-blue-300 rounded w-[290px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shortName" name="shortName" type="text"
              onChange={(e) => setAmountRs(e.target.value)} value={amountRs} />
          </div>
        </div>

        <div className="flex-row ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white h-[24px] font-bold  mt-5 md:mt-15 w-[70px] ml-5 md:ml-15 rounded-[10px] focus:outline-none focus:shadow-outline" type="button">
            + Add
          </button>
          <button className=" bg-white-500 text-red-600 border-red-400 border-2 rounded-[22px] font-bold  px-4 mt-5 md:mt-15  ml-5 md:ml-[905px] focus:outline-none focus:shadow-outline" type="button">
            clear
          </button>
        </div>
        <div className='h-[1px] w-[1100px] mt-3 ml-6 bg-black'>


        </div>
        <Link to='/Info'>
          <button className=" bg-blue-500 text-white border-black-400 border-2  w-[100px] rounded-[2px] font-bold py-2 px-4 mt-5 md:mt-[65px]  ml-5 md:ml-[945px] focus:outline-none focus:shadow-outline" type="button">
            ✔ Save
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Row23;
