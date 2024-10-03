import { useState } from "react";
import { Save } from "lucide-react";
import axios from "axios";

export default function PhdThesis() {
    const [inputs, setInputs] = useState({
        name: "",
        rollNumber: "",
        month: "",
        year: "",
        title: "",
        supervisor: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post("/thesis_insert", inputs);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.post("/thesis_delete", { id });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const tableData = Array.from({ length: 10 }, (_, index) => ({
        id: `${index + 1}`,
        student: `Student ${index + 1}`,
        title: `Thesis Title ${index+1}`,
        year: `Year ${2021 + index}`,
        supervisor: `Supervisor ${index + 1}`,
    }));

    return (
        <div className="bg-white p-6 rounded-lg shadow-inner w-full max-w-6xl border-l-8 border-customSaveButtonColor">
            <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Thesis</h1>
            <hr />
            <form className="space-y-6 my-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            id="name"
                            placeholder="Name"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.name}
                            onChange={(e) =>
                                setInputs({ ...inputs, name: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                        <label
                            htmlFor="rollNumber"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Roll Number
                        </label>
                        <input
                            type="text"
                            required
                            id="rollNumber"
                            placeholder="Roll Number"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.rollNumber}
                            onChange={(e) =>
                                setInputs({ ...inputs, rollNumber: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="month"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Month
                        </label>
                        <select
                            id="month"
                            required
                            value={inputs.month}
                            onChange={(e) =>
                                setInputs({ ...inputs, month: e.target.value })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="year"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Year
                        </label>
                        <select
                            id="year"
                            required
                            value={inputs.year}
                            onChange={(e) =>
                                setInputs({ ...inputs, year: e.target.value })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select Year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            placeholder="Thesis Title"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.title}
                            onChange={(e) =>
                                setInputs({ ...inputs, title: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="supervisor"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Supervisor
                        </label>
                        <input
                            type="text"
                            required
                            id="supervisor"
                            placeholder="Supervisor"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.supervisor}
                            onChange={(e) =>
                                setInputs({ ...inputs, supervisor: e.target.value })
                            }
                        />
                    </div>
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
                            <th className="border border-gray-300 px-4 py-2">Student</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Year</th>
                            <th className="border border-gray-300 px-4 py-2">Supervisor</th>
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
                                        {data.student}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.title}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.year}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.supervisor}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-700"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="border border-gray-300 px-4 py-2 text-center"
                                >
                                    No data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}