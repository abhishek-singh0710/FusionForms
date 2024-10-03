
import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function WorkshopForm() {
  const [inputs, setInputs] = useState({
    role: '',
    sponsoringAgency: '',
    startDate: '',
    endDate: '',
    venue: '',
    eventType: '',
    name: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [workshops, setWorkshops] = useState([]) // State to hold fetched workshops

//   useEffect(() => {
//     // Fetch existing workshops from backend when component loads
//     const fetchWorkshops = async () => {
//       try {
//         const res = await axios.get('/workshops_list') // Adjust the endpoint as needed
//         setWorkshops(res.data)
//       } catch (error) {
//         console.log('Error fetching workshops:', error)
//       }
//     }

//     fetchWorkshops()
//   }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.post('/workshop_insert', inputs)
      setInputs({
        role: '',
        sponsoringAgency: '',
        startDate: '',
        endDate: '',
        venue: '',
        eventType: '',
        name: ''
      })
      const res = await axios.get('/workshops_list') // Refresh workshops after successful form submission
      setWorkshops(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Workshop / Training Program</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.role}
              onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
            >
              <option value="" disabled>Role</option>
              <option value="Author">Author</option>
              <option value="Co-author">Co-author</option>
            </select>
          </div>

          <div>
            <label htmlFor="sponsoringAgency" className="block text-sm font-medium text-gray-700">Sponsoring Agency</label>
            <input
              type="text"
              required
              id="sponsoringAgency"
              placeholder="Sponsoring Agency"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.sponsoringAgency}
              onChange={(e) => setInputs({ ...inputs, sponsoringAgency: e.target.value })}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              id="eventType"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.eventType}
              onChange={(e) => setInputs({ ...inputs, eventType: e.target.value })}
            >
              <option value="" disabled>Event Type</option>
              <option value="Workshop">Workshop</option>
              <option value="Training Program">Training Program</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Title"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-customSaveButtonColor hover:bg-customSaveButtonColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-customSaveButtonColor"
            disabled={isLoading}
          >
            <Save className="w-5 h-5 mr-2" />
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>

      {/* Section to display organized workshops */}
      <div className="mt-10">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Organized Workshops / Training Programs</h2>
        {workshops.length === 0 ? (
          <p className="text-gray-600">No workshops found.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sponsoring Agency</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workshops.map((workshop, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{workshop.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workshop.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workshop.sponsoringAgency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workshop.venue}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{workshop.startDate} - {workshop.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
