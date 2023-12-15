import React,{useState} from 'react';
import Patient from './Patient';

const Row5 = () => {
    const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [religion, setReligion] = useState('Select Religion');
  const [gender, setGender] = useState('Select Gender');
  const [age, setAge] = useState('');
  const [dob, setDOB] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const[taluka,setTaluka]=useState('');
    const [address, setAddress] = useState('');
    const[ContactNo,setContactNo]=useState('');
    const [pincode, setPincode] = useState('');
    const[Case ,setCase]=useState('');
    const[referby,setReferby]=useState('');
    const[Relation,setRelation]=useState('');
    const[broughtby,setBroughtby]=useState('');
    const[mode,setMode]=useState('');
    const[Condition,setCondition]=useState('');
    const[careof,setCareof]=useState('');
  return (
    <>
    
    <Patient/>
    <div className="container mx-auto px-4 py-8 bg-white shadow rounded-lg ml:0 sm:ml-[52px] mb-[200px] ">
      <h1 className="font-bold text-2xl mb-6 text-gray-700 text-center">Emergency Patients Registration</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
            <div className='flex'>
           <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">First Name :</label>
 
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[400px] ml-9" type="text" placeholder="First Name"
           value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='flex'>
           <label className="text-gray-700 font-body mb-2 mt-2" >Middle Name :</label>
 
           <input className="border border-blue-500 rounded-md p-2 mb-4 w-[400px] ml-4" type="text" placeholder="Middle Name"
           value={middleName}
           onChange={(e) => setMiddleName(e.target.value)}/>
          </div>
          <div className='flex'>
           <label className="text-gray-700 font-body mb-2 mt-2" >Last Name :</label>
 
           <input className="border border-blue-500 rounded-md p-2 mb-4 w-[400px] ml-9" type="text" placeholder="Last Name" 
           value={lastName}
              onChange={(e) => setLastName(e.target.value)}
           />
          </div>
         
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2">Religion:</label>
          <select className="border  border-blue-500 rounded-md p-2 mb-4 w-[300px] ml-[63px]"   
          
         value={religion}
            onChange={(e) => setReligion(e.target.value)}
          >
            <option>Select Religion</option>
            <option>Hinduism</option>
            <option>Islam</option>
            <option>Christianity</option>
            <option>Sikhism</option>
            <option>Buddhism</option>
            <option>Jainism</option>
            <option>Other</option>
          </select>
          </div>
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" >Gender:</label>
          <select className="border border-blue-500 rounded-md p-2 mb-4 w-[190px] ml-[64px]"  
          
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          </div>
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2"
         
          
          >Age:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[100px] ml-[93px]" type="text" placeholder="Age" 
           value={age}
           onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" 
          value={dob}
            onChange={(e) => setDOB(e.target.value)}
          
          >DOB:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[88px]" type="date" placeholder="DOB" />
          </div>
         
           <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Country:</label>
          <select className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[65px]"
          value={country}
            onChange={(e) => setCountry(e.target.value)}          
          name="country">
    <option>select country</option>
    <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
</select>
          </div>
         
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">State:</label>
<select className='border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[90px]'
value={state}
onChange={(e) => setState(e.target.value)}
>
    <option value="">Select state</option>
    <option value="AN">Andaman and Nicobar Islands</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CH">Chandigarh</option>
    <option value="CT">Chhattisgarh</option>
    <option value="DN">Dadra and Nagar Haveli</option>
    <option value="DD">Daman and Diu</option>
    <option value="DL">Delhi</option>
    <option value="GA">Goa</option>
    <option value="GJ">Gujarat</option>
    <option value="HR">Haryana</option>
    <option value="HP">Himachal Pradesh</option>
    <option value="JK">Jammu and Kashmir</option>
    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
</select>
</div>
<div className='flex'>
<label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">City:</label>
<select id="city" name="city" className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[99px]"
value={city}
onChange={(e) => setCity(e.target.value)}
>
    <option value="">Select City</option>
    <option value="Achalpur">Achalpur</option>
    <option value="Ahiri">Ahiri</option>
    <option value="Ahmadnagar">Ahmadnagar</option>
    <option value="Ahmadpur">Ahmadpur</option>
    <option value="Airoli">Airoli</option>
    <option value="Ajra">Ajra</option>
    <option value="Akalkot">Akalkot</option>
    <option value="Akola">Akola</option>
    <option value="Akot">Akot</option>
    <option value="Alandi">Alandi</option>
    <option value="Alibag">Alibag</option>
    <option value="Allapalli">Allapalli</option>
    <option value="Amalner">Amalner</option>
    <option value="Amarnath">Amarnath</option>
    <option value="Ambad">Ambad</option>
    <option value="Ambajogai">Ambajogai</option>
    <option value="Amravati">Amravati</option>
    <option value="Amravati Division">Amravati Division</option>
    <option value="Anjangaon">Anjangaon</option>
    <option value="Anshing">Anshing</option>
    <option value="Arangaon">Arangaon</option>
    <option value="Artist Village">Artist Village</option>
    <option value="Arvi">Arvi</option>
    <option value="Ashta">Ashta</option>
    <option value="Ashti">Ashti</option>
    <option value="Aurangabad">Aurangabad</option>
    <option value="Ausa">Ausa</option>
    <option value="Badlapur">Badlapur</option>
    <option value="Balapur">Balapur</option>
    <option value="Ballalpur">Ballalpur</option>
    <option value="Baramati">Baramati</option>
    <option value="Barsi">Barsi</option>
    <option value="Basmat">Basmat</option>
    <option value="Beed">Beed</option>
    <option value="Bhandara">Bhandara</option>
    <option value="Bhayandar">Bhayandar</option>
    <option value="Bhigvan">Bhigvan</option>
    <option value="Bhiwandi">Bhiwandi</option>
    <option value="Bhor">Bhor</option>
    <option value="Bhudgaon">Bhudgaon</option>
    <option value="Bhum">Bhum</option>
    <option value="Bhusaval">Bhusaval</option>
    <option value="Bid">Bid</option>
    <option value="Biloli">Biloli</option>
    <option value="Boisar">Boisar</option>
    <option value="Borivli">Borivli</option>
    <option value="Buldana">Buldana</option>
    <option value="Chakan">Chakan</option>
    <option value="Chalisgaon">Chalisgaon</option>
    <option value="Chanda">Chanda</option>
    <option value="Chandor">Chandor</option>
    <option value="Chandrapur">Chandrapur</option>
    <option value="Chandur">Chandur</option>
    <option value="Chandur Bazar">Chandur Bazar</option>
    <option value="Chicholi">Chicholi</option>
    <option value="Chikhli">Chikhli</option>
    <option value="Chinchani">Chinchani</option>
    <option value="Chiplun">Chiplun</option>
    <option value="Chopda">Chopda</option>
    <option value="Dabhol">Dabhol</option>
    <option value="Dahanu">Dahanu</option>
    <option value="Darwha">Darwha</option>
    <option value="Daryapur">Daryapur</option>
    <option value="Dattapur">Dattapur</option>
    <option value="Daulatabad">Daulatabad</option>
    <option value="Daund">Daund</option>
    <option value="Dehu">Dehu</option>
    <option value="Deolali">Deolali</option>
    <option value="Deoli">Deoli</option>
    <option value="Deulgaon Raja">Deulgaon Raja</option>
    <option value="Dharangaon">Dharangaon</option>
    <option value="Dharmabad">Dharmabad</option>
    <option value="Dharur">Dharur</option>
    <option value="Dhule">Dhule</option>
    <option value="Dhulia">Dhulia</option>
    <option value="Diglur">Diglur</option>
    <option value="Digras">Digras</option>
    <option value="Dombivli">Dombivli</option>
    <option value="Dondaicha">Dondaicha</option>
    <option value="Dudhani">Dudhani</option>
    <option value="Durgapur">Durgapur</option>
    <option value="Erandol">Erandol</option>
    <option value="Faizpur">Faizpur</option>
    <option value="Gadchiroli">Gadchiroli</option>
    <option value="Gadhinglaj">Gadhinglaj</option>
    <option value="Gangakher">Gangakher</option>
    <option value="Gangapur">Gangapur</option>
    <option value="Gevrai">Gevrai</option>
    <option value="Ghatanji">Ghatanji</option>
    <option value="Ghoti Budrukh">Ghoti Budrukh</option>
    <option value="Ghugus">Ghugus</option>
    <option value="Gondiya">Gondiya</option>
    <option value="Goregaon">Goregaon</option>
    <option value="Guhagar">Guhagar</option>
    <option value="Hadgaon">Hadgaon</option>
    <option value="Harnai">Harnai</option>
    <option value="Hinganghat">Hinganghat</option>
    <option value="Hingoli">Hingoli</option>
    <option value="Hirapur Hamesha">Hirapur Hamesha</option>
    <option value="Ichalkaranji">Ichalkaranji</option>
    <option value="Igatpuri">Igatpuri</option>
    <option value="Indapur">Indapur</option>
    <option value="Jaisingpur">Jaisingpur</option>
    <option value="Jalgaon">Jalgaon</option>
    <option value="Jalgaon Jamod">Jalgaon Jamod</option>
    <option value="Jalna">Jalna</option>
    <option value="Jawhar">Jawhar</option>
    <option value="Jejuri">Jejuri</option>
    <option value="Jintur">Jintur</option>
    <option value="Junnar">Junnar</option>
    <option value="Kagal">Kagal</option>
    <option value="Kalamb">Kalamb</option>
    <option value="Kalamnuri">Kalamnuri</option>
    <option value="Kalas">Kalas</option>
    <option value="Kalmeshwar">Kalmeshwar</option>
    <option value="Kalundri">Kalundri</option>
    <option value="Kalyan">Kalyan</option>
    <option value="Kamthi">Kamthi</option>
    <option value="Kandri">Kandri</option>
    <option value="Kankauli">Kankauli</option>
    <option value="Kannad">Kannad</option>
    <option value="Karad">Karad</option>
    <option value="Karanja">Karanja</option>
    <option value="Karjat">Karjat</option>
    <option value="Karmala">Karmala</option>
    <option value="Kati">Kati</option>
    <option value="Katol">Katol</option>
    <option value="Khadki">Khadki</option>
    <option value="Khamgaon">Khamgaon</option>
    <option value="Khapa">Khapa</option>
    <option value="Kharakvasla">Kharakvasla</option>
    <option value="Khed">Khed</option>
    <option value="Khetia">Khetia</option>
    <option value="Khopoli">Khopoli</option>
    <option value="Khuldabad">Khuldabad</option>
    <option value="Kinwat">Kinwat</option>
    <option value="Kodoli">Kodoli</option>
    <option value="Kolhapur">Kolhapur</option>
    <option value="Kondalwadi">Kondalwadi</option>
    <option value="Kopargaon">Kopargaon</option>
    <option value="Koradi">Koradi</option>
    <option value="Koregaon">Koregaon</option>
    <option value="Koynanagar">Koynanagar</option>
    <option value="Kudal">Kudal</option>
    <option value="Kurandvad">Kurandvad</option>
    <option value="Kurduvadi">Kurduvadi</option>
    <option value="Lanja">Lanja</option>
    <option value="Lasalgaon">Lasalgaon</option>
    <option value="Latur">Latur</option>
    <option value="Lohogaon">Lohogaon</option>
    <option value="Lonar">Lonar</option>
    <option value="Lonavla">Lonavla</option>
    <option value="Mahabaleshwar">Mahabaleshwar</option>
    <option value="Mahad">Mahad</option>
    <option value="Maindargi">Maindargi</option>
    <option value="Majalgaon">Majalgaon</option>
    <option value="Makhjan">Makhjan</option>
    <option value="Malegaon">Malegaon</option>
    <option value="Malkapur">Malkapur</option>
    <option value="Malvan">Malvan</option>
    <option value="Manchar">Manchar</option>
    <option value="Mangrul Pir">Mangrul Pir</option>
    <option value="Manmad">Manmad</option>
    <option value="Manor">Manor</option>
    <option value="Mansar">Mansar</option>
    <option value="Manwat">Manwat</option>
    <option value="Matheran">Matheran</option>
    <option value="Mehekar">Mehekar</option>
    <option value="Mhasla">Mhasla</option>
    <option value="Mhasvad">Mhasvad</option>
    <option value="Mohpa">Mohpa</option>
    <option value="Moram">Moram</option>
    <option value="Morsi">Morsi</option>
    <option value="Mowad">Mowad</option>
    <option value="Mudkhed">Mudkhed</option>
    <option value="Mukher">Mukher</option>
    <option value="Mul">Mul</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Mumbai Suburban">Mumbai Suburban</option>
    <option value="Murbad">Murbad</option>
    <option value="Murgud">Murgud</option>
    <option value="Murtajapur">Murtajapur</option>
    <option value="Murud">Murud</option>
    <option value="Nagothana">Nagothana</option>
    <option value="Nagpur">Nagpur</option>
    <option value="Nagpur Division">Nagpur Division</option>
    <option value="Naldurg">Naldurg</option>
    <option value="Nanded">Nanded</option>
    <option value="Nandgaon">Nandgaon</option>
    <option value="Nandura Buzurg">Nandura Buzurg</option>
    <option value="Nandurbar">Nandurbar</option>
    <option value="Nashik">Nashik</option>
    <option value="Nashik Division">Nashik Division</option>
    <option value="Navi Mumbai">Navi Mumbai</option>
    <option value="Neral">Neral</option>
    <option value="Nilanga">Nilanga</option>
    <option value="Nipani">Nipani</option>
    <option value="Osmanabad">Osmanabad</option>
    <option value="Ozar">Ozar</option>
    <option value="Pachora">Pachora</option>
    <option value="Paithan">Paithan</option>
    <option value="Palghar">Palghar</option>
    <option value="Panchgani">Panchgani</option>
    <option value="Pandharpur">Pandharpur</option>
    <option value="Panhala">Panhala</option>
    <option value="Panvel">Panvel</option>
    <option value="Parbhani">Parbhani</option>
    <option value="Parli Vaijnath">Parli Vaijnath</option>
    <option value="Parola">Parola</option>
    <option value="Partur">Partur</option>
    <option value="Patan">Patan</option>
    <option value="Pathardi">Pathardi</option>
    <option value="Pathri">Pathri</option>
    <option value="Patur">Patur</option>
    <option value="Pawni">Pawni</option>
    <option value="Pen">Pen</option>
    <option value="Phaltan">Phaltan</option>
    <option value="Pimpri">Pimpri</option>
    <option value="Pipri">Pipri</option>
    <option value="Powai">Powai</option>
    <option value="Pulgaon">Pulgaon</option>
    <option value="Pune">Pune</option>
    <option value="Pune Division">Pune Division</option>
    <option value="Purna">Purna</option>
    <option value="Pusad">Pusad</option>
    <option value="Rahimatpur">Rahimatpur</option>
    <option value="Rahuri">Rahuri</option>
    <option value="Raigarh">Raigarh</option>
    <option value="Rajapur">Rajapur</option>
    <option value="Rajgurunagar">Rajgurunagar</option>
    <option value="Rajur">Rajur</option>
    <option value="Rajura">Rajura</option>
    <option value="Ramtek">Ramtek</option>
    <option value="Ratnagiri">Ratnagiri</option>
    <option value="Raver">Raver</option>
    <option value="Revadanda">Revadanda</option>
    <option value="Risod">Risod</option>
    <option value="Roha">Roha</option>
    <option value="Sangamner">Sangamner</option>
    <option value="Sangli">Sangli</option>
    <option value="Sangola">Sangola</option>
    <option value="Saoner">Saoner</option>
    <option value="Sasvad">Sasvad</option>
    <option value="Satana">Satana</option>
    <option value="Satara">Satara</option>
    <option value="Satara Division">Satara Division</option>
    <option value="Savantvadi">Savantvadi</option>
    <option value="Savda">Savda</option>
    <option value="Selu">Selu</option>
    <option value="Shahada">Shahada</option>
    <option value="Shahapur">Shahapur</option>
    <option value="Shegaon">Shegaon</option>
    <option value="Shiraguppi">Shiraguppi</option>
    <option value="Shirdi">Shirdi</option>
    <option value="Shirgaon">Shirgaon</option>
    <option value="Shirpur">Shirpur</option>
    <option value="Shirwal">Shirwal</option>
    <option value="Shivaji Nagar">Shivaji Nagar</option>
    <option value="Shrigonda">Shrigonda</option>
    <option value="Sillod">Sillod</option>
    <option value="Sindhudurg">Sindhudurg</option>
    <option value="Sindi">Sindi</option>
    <option value="Sinnar">Sinnar</option>
    <option value="Sirur">Sirur</option>
    <option value="Solapur">Solapur</option>
    <option value="Sonegaon">Sonegaon</option>
    <option value="Soygaon">Soygaon</option>
    <option value="Srivardhan">Srivardhan</option>
    <option value="Surgana">Surgana</option>
    <option value="Talegaon Dabhade">Talegaon Dabhade</option>
    <option value="Taloda">Taloda</option>
    <option value="Tarapur">Tarapur</option>
    <option value="Tasgaon">Tasgaon</option>
    <option value="Telhara">Telhara</option>
    <option value="Thane">Thane</option>
    <option value="Trimbak">Trimbak</option>
    <option value="Tuljapur">Tuljapur</option>
    <option value="Tumsar">Tumsar</option>
    <option value="Udgir">Udgir</option>
    <option value="Ulhasnagar">Ulhasnagar</option>
    <option value="Umarga">Umarga</option>
    <option value="Umarkhed">Umarkhed</option>
    <option value="Umred">Umred</option>
    <option value="Uran">Uran</option>
    <option value="Vada">Vada</option>
    <option value="Vaijapur">Vaijapur</option>
    <option value="Varangaon">Varangaon</option>
    <option value="Vasind">Vasind</option>
    <option value="Vengurla">Vengurla</option>
    <option value="Virar">Virar</option>
    <option value="Vite">Vite</option>
    <option value="Wadgaon">Wadgaon</option>
    <option value="Wai">Wai</option>
    <option value="Wani">Wani</option>
    <option value="Wardha">Wardha</option>
    <option value="Warora">Warora</option>
    <option value="Warud">Warud</option>
    <option value="Washim">Washim</option>
    <option value="Yaval">Yaval</option>
    <option value="Yavatmal">Yavatmal</option>
    <option value="Yeola">Yeola</option>
</select>
</div> 
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Taluka:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[81px]" type="text" placeholder="Taluka"
          
          value={taluka}
            onChange={(e) => setTaluka(e.target.value)}
          />
          </div>
          <div className='flex'>
          <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName"
          valu
          
          
          >Address:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[72px]" type="text" placeholder="Address" 
          
          value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          </div>
         <div className='flex'>
         <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Pin code:</label>
         <input className="border border-blue-500 rounded-md p-2 mb-4 w-[300px] ml-[69px]" type="text" placeholder="Pin-code" 
          value={pincode}
            onChange={(e) => setPincode(e.target.value)}
         />
         </div>
        
        </div>
        <div className='ml-[193px] sm:ml-0'>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Case:</label>
            <select className="border  border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[157px]"
            value={Case}
            onChange={(e) => setCase(e.target.value)}
            >
            <option>Select Case</option>
            <option>Case 1</option>
            <option>Case 2</option>
            <option>Case 3</option>
            <option>Case 4</option>
          </select>
            </div>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2"   
            >Contact No:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[110px]" type="text" placeholder="Contact Number"
          value={ContactNo}
            onChange={(e) => setContactNo(e.target.value)}

          />
          </div>
          <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" >Referred By:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[110px]" type="text" placeholder="Referred By"
          
          value={referby}
            onChange={(e) => setReferby(e.target.value)}
          />
          </div>
          <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" >Condition during arrival:</label>
          <select className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[20px]"
          value={Condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            
            <option>Select</option>
            <option>Stable</option>
            <option>Critical</option>
          </select>
            </div>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" >Select Mode of arrival:</label>
          <select className="border  border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[32px]"
          value={mode}
          onChange={(e) => setMode(e.target.value)}          
          >
            
            <option>Select</option>
            <option>Walk-in</option>
            <option>Ambulance</option>
            <option>Other</option>
          </select>
            </div>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Care of Person:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[81px]" type="text" placeholder="Care of Person"
          
          value={careof}
            onChange={(e) => setCareof(e.target.value)}
          />
            </div>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Brought by:</label>
          <input className="border border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[110px]" type="text" placeholder="Brought By"
          value={broughtby}
            onChange={(e) => setBroughtby(e.target.value)}
          />
            </div>
            <div className='flex'>
            <label className="text-gray-700 font-body mb-2 mt-2" htmlFor="firstName">Relation with Patient:</label>
          <input className="border  border-blue-500 rounded-md p-2 mb-4 w-[380px] ml-[40px]" type="text" placeholder="Relation with patient" 
          
          value={Relation}
            onChange={(e) => setRelation(e.target.value)}
          />
          </div>
        </div>
      </div>
      <div className='flex bg-[#135A95]
         h-[35px]
         w-[105px]
         ml-[19px] md:ml-[559px]
         
         rounded-[5px]
         cursor-pointer
         shadow-2xl hover:shadow-inner
         
         
         '>
       
            <h2 className='text-center pl-5
            font-bold
            text-white
            pt-[5px]
            '>Submit</h2>
            </div>
    </div>
  
    </>
  );
};

export default Row5;
