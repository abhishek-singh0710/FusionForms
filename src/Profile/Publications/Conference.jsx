import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import axios from "axios";

export default function Conference() {
    const [inputs, setInputs] = useState({
        author: "",
        coAuthor: "",
        conferenceName: "",
        conferneceFile: "",
        year: "",
        title: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post("/author_insert", inputs);
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
        id: `${index + 1}`,
        title: `Title of Paper ${index + 1}`,
        author: `Author ${String.fromCharCode(65 + index)}`,
        conferenceName: `Details ${String.fromCharCode(65 + index)}`,
        conferenceFile: `Download Link`,
    }))

    return (
        <div className="bg-white p-6 rounded-lg shadow-inner w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
            <h1 className="text-lg font-medium text-gray-800 mb-1">
                Add a Conference
            </h1>
            <hr />
            <form className="space-y-6 my-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="author"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            required
                            id="author"
                            placeholder="Author"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.author}
                            onChange={(e) =>
                                setInputs({ ...inputs, author: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="coAuthor"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Co-author(s)
                        </label>
                        <input
                            type="text"
                            required
                            id="coAuthor"
                            placeholder="Co-Author"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={inputs.coAuthor}
                            onChange={(e) => setInputs({ ...inputs, coAuthor: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label
                            htmlFor="conferenceName"
                            className="block text-sm font-medium text-gray-700"
                        >
                          Conference Name
                        </label>
                        <input
                            type="text"
                            required
                            id="conferenceName"
                            placeholder="Publisher"
                            value={inputs.conferenceName}
                            onChange={(e) =>
                                setInputs({ ...inputs, conferenceName: e.target.value })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="conferenceFile"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Insert File
                        </label>
                        <input
                            type="file"
                            id="conferenceFile"
                            onChange={(e) =>
                                setInputs({ ...inputs, conferenceFile: e.target.files[0] })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
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
                            value={inputs.year}
                            onChange={(e) =>
                                setInputs({ ...inputs, year: e.target.value })
                            }
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
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

            <div className="overflow-x-auto max-h-[400px]">
                <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
                    <thead className="sticky top-0 bg-gray-400">
                        <tr className="font-semibold text-gray-800">
                            <th className="border border-gray-300 px-4 py-2">Sr</th>
                            <th className="border border-gray-300 px-4 py-2">Author(s)</th>
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Details</th>
                            <th className="border border-gray-300 px-4 py-2">Download</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length > 0 ? (
                            tableData.map((data, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                        } hover:bg-gray-200`}
                                >
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.id}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.author}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.title}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.details}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {data.download}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-left">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 border border-transparent transition duration-200"
                                            onClick={() => handleDelete(data.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-4">
                                    No Data Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}