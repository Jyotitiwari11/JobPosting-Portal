export default function ProfileCompleted() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Top bar */}
      <div className="border-b py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <i className="fa-solid fa-briefcase text-lg"></i>
            Jobpilot
          </div>

          {/* Progress */}
          <div className="w-56">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">Setup Progress</span>
              <span className="text-blue-600 font-medium">
                100% Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full w-full" />
            </div>
          </div>

        </div>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center text-center px-4">
        <div className="max-w-md">

          {/* Check Icon */}
          <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-blue-100">
            <i className="fa-solid fa-check text-blue-600 text-3xl"></i>
          </div>

          {/* Text */}
          <h2 className="text-xl font-semibold mb-2">
            🎉 Congratulations, Your profile is 100% complete!
          </h2>

          <p className="text-gray-500 text-sm mb-6">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sit deleniti inventore!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 border rounded text-blue-600 text-sm">
              View Dashboard
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded text-sm">
              View Profile
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 py-3 border-t">
        © 2021 Jobpilot - Job Board. All rights reserved
      </div>
    </div>
  );
}
