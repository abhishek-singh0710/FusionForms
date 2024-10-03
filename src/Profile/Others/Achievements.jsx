import { useState } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function AchievementsForm() {
  const [inputs, setInputs] = useState({
    day: '',
    month: '',
    year: '',
    achievementType: '',
    title: ''
  })
  const [achievements, setAchievements] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post('/achievement_insert', inputs)
      console.log(res.data)
      fetchAchievements() // Refresh the list of achievements
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchAchievements = async () => {
    try {
      const res = await axios.get('/achievements')
      setAchievements(res.data)
    } catch (error) {
      console.error(error)
    }
  }
  // Use useEffect to fetch the achievements not the handleClick event

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add an Achievement</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day</label>
            <select
              id="day"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.day}
              onChange={(e) => setInputs({ ...inputs, day: e.target.value })}
            >
              <option value="">Select Day</option>
              {/* Add options for days */}
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">Month</label>
            <select
              id="month"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.month}
              onChange={(e) => setInputs({ ...inputs, month: e.target.value })}
            >
              <option value="">Select Month</option>
              {/* Add options for months */}
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              required
              id="year"
              placeholder="Year"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.year}
              onChange={(e) => setInputs({ ...inputs, year: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="achievementType" className="block text-sm font-medium text-gray-700">Achievement Type</label>
            <input
              type="text"
              required
              id="achievementType"
              placeholder="Achievement Type"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.achievementType}
              onChange={(e) => setInputs({ ...inputs, achievementType: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            required
            id="title"
            placeholder="Title"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-customSaveButtonColor hover:bg-customSaveButtonColor focus:outline-none"
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
        {achievements.length === 0 ? (
          <p className="text-gray-500">No Achievements Recorded Yet</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
            <thead className="sticky top-0 bg-gray-400">
              <tr className="font-semibold text-gray-800">
                <th className="border border-gray-300 px-4 py-2">Sr</th>
                <th className="border border-gray-300 px-4 py-2">Achievement Type</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((achievement, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{achievement.achievementType}</td>
                  <td className="border border-gray-300 px-4 py-2">{achievement.title}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {achievement.day}/{achievement.month}/{achievement.year}
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
