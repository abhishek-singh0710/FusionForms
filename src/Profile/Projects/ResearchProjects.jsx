import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import axios from "axios";

export default function ResearchProjects() {
  const [inputs, setInputs] = useState({
    pi: "",
    coPi: "",
    fundingAgency: "",
    status:"",
    submissionDate: "",
    startDate: "",
    expectedFinishDate: "",
    financialOutlay:"",
    title:"",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("/consultant_insert", inputs);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.post("/emp_consultancy_projectsDelete", id);
      console.log(res.data);
    } catch (error) {
      console.log(res.data);
    }
  };

  // let tableData = [];
  // useEffect(() => {
  //   const getTableData = async () => {
  //     try {
  //       const res = await axios.get("/get_data");
  //       tableData = res.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getTableData();
  // }, []);

  const tableData = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    pi_copi: `PI/CO-PI ${index + 1}`,
    title: `Title ${String.fromCharCode(65 + index)}`,
    fundingAgency: `FA ${String.fromCharCode(65 + index)}`,
    otherDetails: "Lorem ipsum dolor sit amen",
  }))

  return (
    <div className="bg-white p-6 rounded-lg shadow-inner w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">
        Add a Research Project
      </h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pi"
              className="block text-sm font-medium text-gray-700"
            >
              Project Incharge(PI)
            </label>
            <input
              type="text"
              required
              id="pi"
              placeholder="(PI)"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={inputs.pi}
              onChange={(e) =>
                setInputs({ ...inputs, pi: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="copi"
              className="block text-sm font-medium text-gray-700"
            >
              Co-Project Incharge(CO-PI)
            </label>
            <input
              type="text"
              required
              id="copi"
              placeholder="(CO-PI)"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={inputs.coPi}
              onChange={(e) => setInputs({ ...inputs, coPi: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="funding-agency"
              className="block text-sm font-medium text-gray-700"
            >
              Funding Agency
            </label>
            <input
              type="text"
              required
              id="funding-agency"
              placeholder="Funding Agency"
              value={inputs.fundingAgency}
              onChange={(e) =>
                setInputs({ ...inputs, fundingAgency: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Status
            </label>
            <select
              id="status"
              placeholder="Status"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
              value={inputs.status}
              onChange={(e) => setInputs({ ...inputs, status: e.target.value })}
            >
              <option value="" disabled>
                Status
              </option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
          <label
              htmlFor="submission-date"
              className="block text-sm font-medium text-gray-700"
            >
              Submission Date
            </label>
            <input
              type="date"
              id="submission-date"
              required
              value={inputs.submissionDate}
              onChange={(e) =>
                setInputs({ ...inputs, submissionDate: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />  
          </div> 
          <div>
          <label
              htmlFor="start-date"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              required
              value={inputs.startDate}
              onChange={(e) =>
                setInputs({ ...inputs, startDate: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />  
          </div>  
          <div>
          <label
              htmlFor="expected-finish-date"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Finish Date
            </label>
            <input
              type="date"
              id="expected-finish-date"
              required
              value={inputs.expectedFinishDate}
              onChange={(e) =>
                setInputs({ ...inputs, expectedFinishDate: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
          <label
              htmlFor="financial-outlay"
              className="block text-sm font-medium text-gray-700"
            >
              Financial Outlay
            </label>
            <input
              type="text"
              id="financial-outlay"
              required
              value={inputs.financialOutlay}
              onChange={(e) =>
                setInputs({ ...inputs, financialOutlay: e.target.value })
              }
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            required
            id="title"
            placeholder="Title"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
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
              <th className="border border-gray-300 px-4 py-2">
                PI/CO-PI
              </th>
              <th className="border border-gray-300 px-4 py-2">Title of Paper</th>
              <th className="border border-gray-300 px-4 py-2">Funding Agency</th>
              <th className="border border-gray-300 px-4 py-2">
                Other Details
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((data, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {data.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.pi_copi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.fundingAgency}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.otherDetails}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 border border-transparent transition duration-200"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
