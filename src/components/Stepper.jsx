// // const steps = [{label:"Company Info",icon:<i class="fa-solid fa-user"></i>}, "Founding Info", "Social Media Info", "Contact"];

// // export default function Stepper({ step }) {
// //   return (
// //     <div className="bg-white py-4 border-b">
// //       <div className="max-w-5xl mx-auto flex justify-between">
// //         {steps.map((label, index) => (
// //           <div
// //             key={label}
// //             className={`text-sm ${
// //               step === index + 1 ? "text-blue-600 font-semibold" : "text-gray-400"
// //             }`}
// //           >
// //             {label}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// const steps = [
//   { label: "Company Info", icon: <i className="fa-solid fa-user"></i> },
//   { label: "Founding Info", icon: <i className="fa-solid fa-building"></i> },
//   { label: "Social Media Info", icon: <i className="fa-brands fa-twitter"></i> },
//   { label: "Contact", icon: <i className="fa-solid fa-phone"></i> },
// ];

// export default function Stepper({ step }) {
//   return (
//     <div className="bg-white py-4 border-b">
//       <div className="max-w-5xl mx-auto flex justify-between items-center">
//         {steps.map((s, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center text-sm ${
//               step === index + 1
//                 ? "text-blue-600 font-semibold"
//                 : "text-gray-400"
//             }`}
//           >
//             {/* Icon */}
//             {s.icon && <span className="mb-1">{s.icon}</span>}

//             {/* Label */}
//             {s.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// const steps = [
//   "Company Info",
//   "Founding Info",
//   "Social Media Info",
//   "Contact",
// ];

// export default function Stepper({ step }) {
//   const percentage = Math.round((step / steps.length) * 100);

//   return (
//     <div className="bg-white py-4 border-b">
//       <div className="max-w-5xl mx-auto">

//         {/* Progress Text */}
//         <div className="flex justify-between text-sm mb-1">
//           <span className="text-gray-600">Setup Progress</span>
//           <span className="text-blue-600 font-medium">
//             {percentage}% Completed
//           </span>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//           <div
//             className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${percentage}%` }}
//           />
//         </div>

//         {/* Step labels */}
//         <div className="flex justify-between">
//           {steps.map((label, index) => (
//             <div
//               key={label}
//               className={`text-sm ${
//                 step === index + 1
//                   ? "text-blue-600 font-semibold"
//                   : "text-gray-400"
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
const steps = [
  { label: "Company Info", icon: <i className="fa-solid fa-user"></i> },
  { label: "Founding Info", icon: <i className="fa-solid fa-building"></i> },
  { label: "Social Media Info", icon: <i className="fa-brands fa-twitter"></i> },
  { label: "Contact", icon: <i className="fa-solid fa-phone"></i> },
];

export default function Stepper({ step }) {
  const percentage = step * 25 - 25;

  return (
    <div className="bg-white py-4 border-b">
      <div className="max-w-5xl mx-auto">

        {/* Progress text */}
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Setup Progress</span>
          <span className="text-blue-600 font-medium">
            {percentage}% Completed
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between items-center">
          {steps.map((s, index) => {
            const isActive = step === index + 1;

            return (
              <div
                key={index}
                className={`flex flex-col items-center text-sm ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {/* Icon */}
                <span
                  className={`mb-1 text-lg ${
                    isActive ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {s.icon}
                </span>

                {/* Label */}
                {s.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
