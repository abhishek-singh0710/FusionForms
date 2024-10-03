import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import axios from 'axios';

export default function ExpertLecturesForm() {
  const [inputs, setInputs] = useState({
    presentationType: '',
    place: '',
    date: '',
    title: ''
  });
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

//   // Fetch the existing lectures when the component mounts
//   useEffect(() => {
//     const fetchLectures = async () => {
//       try {
//         const res = await axios.get('/lectures');
//         setLectures(res.data); // Assuming the response contains an array of lectures
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchLectures();
//   }, []); // Empty dependency array ensures it only runs once when the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await axios.post('/lecture_insert', inputs);
      console.log(res.data);

      // Add the new entry to the lectures array instead of fetching it again
      setLectures((prevLectures) => [
        ...prevLectures,
        { ...inputs, id: res.data.id } // Assuming the response contains the new entry's ID
      ]);

      // Clear the input fields
      setInputs({
        presentationType: '',
        place: '',
        date: '',
        title: ''
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">
      <h1 className="text-lg font-medium text-gray-800 mb-1">Add a Expert Lecture/Invited Talk</h1>
      <hr />
      <form className="space-y-6 my-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="presentationType" className="block text-sm font-medium text-gray-700">Presentation Type</label>
            <select
              id="presentationType"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.presentationType}
              onChange={(e) => setInputs({ ...inputs, presentationType: e.target.value })}
            >
              <option value="">Select Presentation Type</option>
              <option value="Expert Lecture">Expert Lecture</option>
              <option value="Invited Talk">Invited Talk</option>
              {/* Add more options if needed */}
            </select>
          </div>

          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
            <input
              type="text"
              required
              id="place"
              placeholder="Place"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.place}
              onChange={(e) => setInputs({ ...inputs, place: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              required
              id="date"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              value={inputs.date}
              onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
            />
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
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save'}
        </button>
      </form>

      {/* Display the list of lectures */}
      <h2 className="text-lg font-medium text-gray-800 mb-2">Report:</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Sr.</th>
            <th className="py-2 px-4 border-b">Presented</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Place</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((lecture, index) => (
            <tr key={lecture.id}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{lecture.presentationType}</td>
              <td className="py-2 px-4 border-b">{lecture.title}</td>
              <td className="py-2 px-4 border-b">{lecture.place}</td>
              <td className="py-2 px-4 border-b">{lecture.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
