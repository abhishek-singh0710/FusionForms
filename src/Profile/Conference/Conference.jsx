import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function ConferenceSymposium() {
  const [inputs, setInputs] = useState({
    role: '',
    venue: '',
    startDate: '',
    endDate: '',
    conferenceName: '',
  })
  const [conferences, setConferences] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post('/conference_insert', inputs)
      console.log(res.data)
      fetchConferences() // Refresh the list of conferences
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchConferences = async () => {
    try {
      const res = await axios.get('/conferences')
      setConferences(res.data)
    } catch (error) {
      console.error(error)
    }
  }

//   useEffect(() => {
//     fetchConferences()
//   }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Conference/Symposium</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              required
              id="role"
              placeholder="Role"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.role}
              onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="venue" className="block text-sm font-medium text-gray-700">Venue</label>
            <input
              type="text"
              required
              id="venue"
              placeholder="Venue"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.venue}
              onChange={(e) => setInputs({ ...inputs, venue: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              required
              id="startDate"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.startDate}
              onChange={(e) => setInputs({ ...inputs, startDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              required
              id="endDate"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.endDate}
              onChange={(e) => setInputs({ ...inputs, endDate: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="conferenceName" className="block text-sm font-medium text-gray-700">Conference Name</label>
          <input
            type="text"
            required
            id="conferenceName"
            placeholder="Conference Name"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
            value={inputs.conferenceName}
            onChange={(e) => setInputs({ ...inputs, conferenceName: e.target.value })}
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
        {conferences.length === 0 ? (
          <p className="text-gray-500">No Conferences/Symposia Recorded Yet</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
            <thead className="sticky top-0 bg-gray-400">
              <tr className="font-semibold text-gray-800">
                <th className="border border-gray-300 px-4 py-2">Sr</th>
                <th className="border border-gray-300 px-4 py-2">Role</th>
                <th className="border border-gray-300 px-4 py-2">Conference Name</th>
                <th className="border border-gray-300 px-4 py-2">Venue</th>
                <th className="border border-gray-300 px-4 py-2">Start Date & End Date</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {conferences.map((conference, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{conference.role}</td>
                  <td className="border border-gray-300 px-4 py-2">{conference.conferenceName}</td>
                  <td className="border border-gray-300 px-4 py-2">{conference.venue}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {conference.startDate} - {conference.endDate}
                  </td>
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
