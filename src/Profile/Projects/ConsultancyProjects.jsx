import { useState } from 'react'
import { Save } from 'lucide-react'
import axios from 'axios'

export default function ConsultancyProjects() {
  const [inputs, setInputs] = useState({
    consultant: '',
    client: '',
    financialOutlay: '',
    startDate: '',
    endDate: '',
    title: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.post('/consultant_insert',inputs)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    } finally{
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
    consultant: `Consultant ${index + 1}`,
    title: `Consultancy ${String.fromCharCode(65 + index)}`,
    client: `Client ${String.fromCharCode(65 + index)}`,
    financialOutlay: `${(index + 1) * 10000}`,
    period: `Jan 202${index % 10} - Dec 202${(index % 10) + 1}`,
  }))

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Consultancy Project</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="consultant" className="block text-sm font-medium text-gray-700">Consultant</label>
            <input 
              type="text" 
              required
              id="consultant" 
              placeholder="Consultant" 
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={inputs.consultant}
              onChange={(e) => setInputs({...inputs, consultant: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="client" className="block text-sm font-medium text-gray-700">Client</label>
            <input 
              type="text" 
              required
              id="client" 
              placeholder="Client" 
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={inputs.client}
              onChange={(e) => setInputs({...inputs, client: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="financial-outlay" className="block text-sm font-medium text-gray-700">Financial Outlay</label>
            <input 
              type="number" 
              required
              id="financial-outlay"
              placeholder="Publisher" 
              value={inputs.financialOutlay}
              onChange={(e) => setInputs({...inputs, financialOutlay: e.target.value})}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date" 
              id="start-date"
              placeholder='Start'
              required
              value={inputs.startDate}
              onChange={(e) => setInputs({...inputs, startDate: e.target.value})}
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
            <input 
              type="date" 
              id="end-date"
              required
              value={inputs.endDate}
              onChange={(e) => setInputs({...inputs, endDate: e.target.value})}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
            value={inputs.title}
            onChange={(e) => setInputs({...inputs, title: e.target.value})}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
      {/* <h1 className="font-medium text-gray-800 my-1">Page of:</h1> */}

      <div className="overflow-x-auto max-h-[400px]">
        <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
          <thead className="sticky top-0 bg-gray-400">
            <tr className="font-semibold text-gray-800">
              <th className="border border-gray-300 px-4 py-2">Sr</th>
              <th className="border border-gray-300 px-4 py-2">Consultant(s)</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Client</th>
              <th className="border border-gray-300 px-4 py-2">Financial Outlay</th>
              <th className="border border-gray-300 px-4 py-2">Period</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-gray-200`}
              >
                <td className="border border-gray-300 px-4 py-2">{data.id}</td>
                <td className="border border-gray-300 px-4 py-2">{data.consultant}</td>
                <td className="border border-gray-300 px-4 py-2">{data.title}</td>
                <td className="border border-gray-300 px-4 py-2">{data.client}</td>
                <td className="border border-gray-300 px-4 py-2">{data.financialOutlay}</td>
                <td className="border border-gray-300 px-4 py-2">{data.period}</td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <button className="text-red-600 hover:text-red-900" onClick={handleDelete} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}