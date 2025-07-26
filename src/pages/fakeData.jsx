import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import StarField from '../components/StarBackground';
import { Link } from 'react-router-dom';

export default function FakeUserData() {
  const [selectedFields, setSelectedFields] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [fakeUsers, setFakeUsers] = useState([]);
  const [copy, setCopy] = useState('Copy Data')

  const availableFields = [
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'avatar', label: 'Avatar' },
    { key: 'address', label: 'Address' },
    { key: 'company', label: 'Company' },
  ];

  const handleFieldChange = (field) => {
    setSelectedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    )
  }

  const generateFakeUsers = () => {
    const users = Array.from({ length: userCount }, () => {
      const user = {}
      if (selectedFields.includes('name')) user.name = faker.person.fullName()
      if (selectedFields.includes('username')) user.username = faker.internet.username()
      if (selectedFields.includes('email')) user.email = faker.internet.email()
      if (selectedFields.includes('phone')) user.phone = faker.phone.number()
      if (selectedFields.includes('avatar')) user.avatar = faker.image.avatar()
      if (selectedFields.includes('address')) user.address = faker.location.city() + ', ' + faker.location.country()
      if (selectedFields.includes('company')) user.company = faker.company.name()
      return user
    })
    setFakeUsers(users)
    // console.table(users);  

  };
  const handleCopy = () => {
    if (fakeUsers.length === 0) return
    else {
      navigator.clipboard.writeText(JSON.stringify(fakeUsers, null, 2))
      setCopy('Copied')
      setTimeout(() => {
        setCopy('Copy Data')
      }, 1500);
    }
  }

  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div>
        <h1 className='text-2xl underline font-bold flex justify-center'>
          FAKE USERS DATA GENERATOR
        </h1>
        <div className='flex flex-col justify-center items-center content-center mt-10'>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Select Fields:</h2>
            <div className="flex flex-wrap gap-4">
              {availableFields.map((field) => (
                <label key={field.key} className="flex items-center gap-1 text-xl">
                  <input
                    type="checkbox"
                    value={field.key}
                    onChange={() => handleFieldChange(field.key)}
                  />
                  {field.label}
                </label>
              ))}
            </div>
          </div>

          <div className='mt-10'>

            <h2 className='text-lg underline font-bold flex justify-center mt-5'>
              How many Users you want ?
            </h2>

            <input value={userCount} onChange={(e) => setUserCount(Number(e.target.value))} type="number" min="1" max="100" className='border h-10 w-full rounded-sm mt-2' /></div>

          <button onClick={generateFakeUsers} className='mt-10 rounded-sm p-4 font-bold bg-sky-500 hover:bg-sky-700 cursor-none'>Generate Fake Users</button>

          {fakeUsers.length > 0 && (
            <div className='mb-50'>
              <table className="w-auto mt-6 border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    {selectedFields.map((field) => (
                      <th key={field} className="border p-2">{field}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className='bg-slate-900'>
                  {fakeUsers.map((user, index) => (
                    <tr key={index}>
                      {selectedFields.map((field) => (
                        <td key={field} className="border p-2">
                          {field === 'avatar' ? (
                            <img src={user[field]} alt="avatar" className="h-8 w-8 rounded-full" />
                          ) : (
                            user[field]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={handleCopy} className='mt-10 rounded-sm p-4 font-bold bg-sky-500 hover:bg-sky-700 cursor-none mb-5'>{copy}</button>
              <Link 
              to='/json-csv'
              className='hover:text-sky-400 hover:underline cursor-none'><p>Wanna Turn This Out into CSV</p></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}