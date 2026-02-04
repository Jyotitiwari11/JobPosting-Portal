import React ,{useState} from 'react'

const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [about, setAbout] = useState("");

  const handleLogoChange = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };

  const handleBannerChange = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend
    console.log({ logo, banner, companyName, about });
    alert("Saved! Proceed to next step.");
  };

const Third = () => {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-6">Company Info</h2>

        {/* Logo & Banner */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
            {logo ? (
              <img src={logo} alt="Logo" className="w-24 h-24 object-contain" />
            ) : (
              <>
                <span className="mb-2">Upload Logo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                  id="logoInput"
                />
                <label
                  htmlFor="logoInput"
                  className="cursor-pointer text-blue-500 text-sm"
                >
                  Browse photo or drop here
                </label>
              </>
            )}
          </div>

          <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer">
            {banner ? (
              <img src={banner} alt="Banner" className="w-full h-40 object-contain" />
            ) : (
              <>
                <span className="mb-2">Banner Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="hidden"
                  id="bannerInput"
                />
                <label
                  htmlFor="bannerInput"
                  className="cursor-pointer text-blue-500 text-sm"
                >
                  Browse photo or drop here
                </label>
              </>
            )}
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* About Us */}
        <div className="mb-6">
          <textarea
            placeholder="Write down about your company here. Let the candidate know who we are..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
          ></textarea>
        </div>

        {/* Save & Next */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Save & Next
        </button>
      </form>
    </div>
    </div>
  )
}

export default Third
