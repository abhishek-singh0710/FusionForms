import React, { useState } from 'react'

export default function ProfileForm() {
  const [editMode, setEditMode] = useState(false)

  const [formData, setFormData] = useState({
    aboutMe: '',
    dateOfJoining: '',
    pensionFund: 'PF# XXXXXXXX',
    education: '',
    interestAreas: '',
    contact: '+91 -',
    email: 'atul@iiitdmj.ac.in',
    linkedIn: '',
    github: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    console.log(formData)
    setFormData({
      aboutMe: '',
      dateOfJoining: '',
      pensionFund: 'PF# XXXXXXXX',
      education: '',
      interestAreas: '',
      contact: '+91 -',
      email: 'atul@iiitdmj.ac.in',
      linkedIn: '',
      github: '',
    })
    setEditMode(false)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-[4910px] border-l-8 border-customSaveButtonColor">

      {/* About Me Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <button
            className={`px-4 py-2 rounded-md text-white font-medium ${
              editMode
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-red-500 hover:bg-red-600'
            } transition-colors duration-300`}
            onClick={() => (editMode ? handleSave() : setEditMode(true))}
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>
        {editMode ? (
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter information about yourself"
            rows={4}
          />
        ) : (
          <p className="mt-2 p-2 border rounded-md min-h-[100px]">
            {formData.aboutMe}
          </p>
        )}
      </div>

      {/* Details Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Date Of Joining
            </label>
            {editMode ? (
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.dateOfJoining || ''}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Pension Fund #
            </label>
            <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
              {formData.pensionFund}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Education
            </label>
            {editMode ? (
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your education"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.education || ''}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Interest Areas
            </label>
            {editMode ? (
              <input
                type="text"
                name="interestAreas"
                value={formData.interestAreas}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your interest areas"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.interestAreas || ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Contact
            </label>
            {editMode ? (
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.contact || ''}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Email
            </label>
            <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md bg-gray-100">
              {formData.email}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              LinkedIn
            </label>
            {editMode ? (
              <input
                type="text"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your LinkedIn profile"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.linkedIn || ''}
              </p>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <label className="w-full md:w-[300px] h-[42px] p-2 border border-gray-300 font-medium bg-gray-200 text-black">
              Github ID
            </label>
            {editMode ? (
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full md:flex-grow h-[42px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Github ID"
              />
            ) : (
              <p className="w-full md:flex-grow h-[42px] p-2 border rounded-md">
                {formData.github || ''}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
