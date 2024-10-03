import { useState } from "react";
import { Save } from "lucide-react";
import axios from "axios";

export default function Books() {
  const [inputs, setInputs] = useState({
    publishType: "",
    author: "",
    publisher: "",
    year: "",
    title: "",
  });
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post("/achievement_insert", inputs);
      console.log(res.data);
      fetchAchievements(); // Refresh the list of achievements
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAchievements = async () => {
    try {
      const res = await axios.get("/achievements");
      setAchievements(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  // Use useEffect to fetch the achievements not the handleClick event

  const years = Array.from({ length: 31 }, (_, i) => (2000 + i).toString());

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">
        Add a Book/Book Chapter
      </h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="publish-type"
              className="block text-sm font-medium text-gray-700"
            >
              Publish Type
            </label>
            <select
              id="publish-type"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.publishType}
              onChange={(e) =>
                setInputs({ ...inputs, publishType: e.target.value })
              }
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="book">Book</option>
              <option value="monograph">Monograph</option>
              <option value="book-chapter">Book Chapter</option>
              <option value="handbook">Handbook</option>
              <option value="technical-report">Technical Report</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.author}
              onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="publisher"
              className="block text-sm font-medium text-gray-700"
            >
              Publisher
            </label>
            <input
              type="text"
              required
              id="publisher"
              placeholder="Publisher"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.publisher}
              onChange={(e) =>
                setInputs({ ...inputs, publisher: e.target.value })
              }
            />
          </div>
          <div className="mt-5">
            <select
              id="year"
              value={inputs.year}
              onChange={(e) => setInputs({ ...inputs, year: e.target.value })}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
            <option value="" disabled>Publishing Year</option>
            {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
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
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-light-blue-400"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-customSaveButtonColor hover:bg-customSaveButtonColor focus:outline-none"
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
        {achievements.length === 0 ? (
          <p className="text-gray-500">No Books Recorded Yet</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200 text-left">
            <thead className="sticky top-0 bg-gray-400">
              <tr className="font-semibold text-gray-800">
                <th className="border border-gray-300 px-4 py-2">Sr</th>
                <th className="border border-gray-300 px-4 py-2">
                  Achievement Type
                </th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((achievement, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {achievement.achievementType}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {achievement.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {achievement.day}/{achievement.month}/{achievement.year}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-left">
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
