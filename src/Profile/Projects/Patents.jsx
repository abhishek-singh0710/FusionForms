import { useState } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function Patents() {
  const [inputs, setInputs] = useState({
    patentNumber: '',
    status: '',
    earnings: '',
    year: '',
    month: '',
    title: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post('/consultant_insert', inputs)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () =>{
    try {
      
    } catch (error) {
      
    }
  }


  const tableData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    patentNumber: `Patent No ${index + 1}`,
    title: `Title ${String.fromCharCode(65 + index)}`,
    status: ["Filed", "Granted", "Published", "Owned"][Math.floor(Math.random() * 4)],
    year: `Jan 202${index % 10}`,
    earnings: `${(index + 1) * 10000}`,
  }))

  const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString())
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString())

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Patent</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patent-number" className="block text-sm font-medium text-gray-700">Patent Number</label>
            <input
              type="text"
              required
              id="patent-number"
              placeholder="Patent Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.patentNumber}
              onChange={(e) => setInputs({ ...inputs, patentNumber: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 ml-1">Status</label>
            <select
              id="status"
              placeholder="Status"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400 transition ease-in-out duration-300"
              value={inputs.status}
              onChange={(e) => setInputs({ ...inputs, status: e.target.value })}
            >
              <option value="" disabled>Status</option>
              <option value="Filed">Filed</option>
              <option value="Granted">Granted</option>
              <option value="Published">Published</option>
              <option value="Owned">Owned</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="earnings" className="block text-sm font-medium text-gray-700">Earnings (in Rs.)</label>
            <input
              type="number"
              required
              id="earnings"
              placeholder="Earnings"
              value={inputs.earnings}
              onChange={(e) => setInputs({ ...inputs, earnings: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 ml-1">Year</label>
            <select
              id="year"
              placeholder="Year"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.year}
              onChange={(e) => setInputs({ ...inputs, year: e.target.value })}
            >
              <option value="" disabled>Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700 ml-1">Month</label>
            <select
              id="month"
              placeholder="Select Month"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.month}
              onChange={(e) => setInputs({ ...inputs, month: e.target.value })}
            >
              <option value="" disabled>Month</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            required
            id="title"
            placeholder="Title"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
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

      <h1 className="font-medium text-gray-800 mb-1 mt-6">Report:</h1>
      <hr className="mb-4" />

      <div className="overflow-x-auto max-h-[400px]">
        <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
          <thead className="sticky top-0 bg-gray-400">
            <tr className="font-semibold text-gray-800">
              <th className="border border-gray-300 px-4 py-2">Sr</th>
              <th className="border border-gray-300 px-4 py-2">Patent No</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">Earning (Rs.)</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
              >
                <td className="border border-gray-300 px-4 py-2">{data.id}</td>
                <td className="border border-gray-300 px-4 py-2">{data.patentNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{data.title}</td>
                <td className="border border-gray-300 px-4 py-2">{data.status}</td>
                <td className="border border-gray-300 px-4 py-2">{data.year}</td>
                <td className="border border-gray-300 px-4 py-2">{data.earnings}</td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <button className="text-red-600 hover:text-red-900" onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
