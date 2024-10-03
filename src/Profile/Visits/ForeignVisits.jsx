import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function ForeignVisits() {
  const [inputs, setInputs] = useState({
    country: '',
    place: '',
    fromDate: '',
    toDate: '',
    purpose: '',
  })
  const [foreignVisits, setForeignVisits] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post('/foreign_visits_insert', inputs)
      console.log(res.data)
      fetchForeignVisits() // Refresh the list of foreign visits
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchForeignVisits = async () => {
    try {
      const res = await axios.get('/foreign_visits')
      setForeignVisits(res.data)
    } catch (error) {
      console.error(error)
    }
  }

//   useEffect(() => {
//     fetchForeignVisits()
//   }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Foreign Visit</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              required
              id="country"
              placeholder="Country"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.country}
              onChange={(e) => setInputs({ ...inputs, country: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
            <input
              type="text"
              required
              id="place"
              placeholder="Place"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.place}
              onChange={(e) => setInputs({ ...inputs, place: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">From</label>
            <input
              type="date"
              required
              id="fromDate"
              placeholder="Start Date"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.fromDate}
              onChange={(e) => setInputs({ ...inputs, fromDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">To</label>
            <input
              type="date"
              required
              id="toDate"
              placeholder="End Date"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.toDate}
              onChange={(e) => setInputs({ ...inputs, toDate: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Purpose</label>
          <input
            type="text"
            required
            id="purpose"
            placeholder="Purpose"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
            value={inputs.purpose}
            onChange={(e) => setInputs({ ...inputs, purpose: e.target.value })}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-customSaveButtonColor hover:bg-customSaveButtonColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-customSaveButtonColor"
            disabled={isLoading}
          >
            <Save className="w-5 h-5 mr-2" />
            {isLoading ? 'Loading...' : 'Save'}
          </button>
        </div>
      </form>

      <h1 className="font-medium text-gray-800 mb-1 mt-6">Report:</h1>
      <hr className="mb-4" />

      <div className="overflow-x-auto max-h-[400px]">
        {foreignVisits.length === 0 ? (
          <p className="text-gray-500">No Foreign Visits Recorded Yet</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
            <thead className="sticky top-0 bg-gray-400">
              <tr className="font-semibold text-gray-800">
                <th className="border border-gray-300 px-4 py-2">Sr</th>
                <th className="border border-gray-300 px-4 py-2">Country</th>
                <th className="border border-gray-300 px-4 py-2">Place</th>
                <th className="border border-gray-300 px-4 py-2">From - To</th>
                <th className="border border-gray-300 px-4 py-2">Purpose</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {foreignVisits.map((visit, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{visit.country}</td>
                  <td className="border border-gray-300 px-4 py-2">{visit.place}</td>
                  <td className="border border-gray-300 px-4 py-2">{visit.fromDate} - {visit.toDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{visit.purpose}</td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
