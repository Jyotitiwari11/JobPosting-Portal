// export default function FoundingInfo({ onNext, onPrev }) {
//   return (
//     <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow">
//       <div className="grid md:grid-cols-3 gap-4">
//         <select className="border px-3 py-2 rounded">
//           <option>Organization Type</option>
//         </select>

//         <select className="border px-3 py-2 rounded">
//           <option>Industry Type</option>
//         </select>

//         <select className="border px-3 py-2 rounded">
//           <option>Team Size</option>
//         </select>
//       </div>

//       <div className="grid md:grid-cols-2 gap-4 mt-4">
//         <input type="date" className="border px-3 py-2 rounded" />
//         <input
//           type="url"
//           placeholder="Company Website"
//           className="border px-3 py-2 rounded"
//         />
//       </div>

//       <textarea
//         rows="4"
//         placeholder="Company Vision..."
//         className="w-full border rounded px-3 py-2 mt-4"
//       />

//       <div className="flex justify-between mt-4">
//         <button onClick={onPrev} className="px-4 py-2 border rounded">
//           Previous
//         </button>
//         <button onClick={onNext} className="bg-blue-600 text-white px-6 py-2 rounded">
//           Save & Next →
//         </button>
//       </div>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";

export default function FoundingInfo({ onNext, onPrev }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // founding info data
    onNext(); // go next only if valid
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow"
    >
      {/* Selects */}
      <div className="grid md:grid-cols-3 gap-4">
        <select
          {...register("organizationType", {
            required: "Organization type is required",
          })}
          className="border px-3 py-2 rounded"
        >
          <option value="">Organization Type</option>
          <option value="startup">Startup</option>
          <option value="company">Company</option>
          <option value="enterprise">Enterprise</option>
        </select>
        {errors.organizationType && (
          <p className="text-red-500 text-sm">
            {errors.organizationType.message}
          </p>
        )}

        <select
          {...register("industryType", {
            required: "Industry type is required",
          })}
          className="border px-3 py-2 rounded"
        >
          <option value="">Industry Type</option>
          <option value="it">IT</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
        {errors.industryType && (
          <p className="text-red-500 text-sm">
            {errors.industryType.message}
          </p>
        )}

        <select
          {...register("teamSize", {
            required: "Team size is required",
          })}
          className="border px-3 py-2 rounded"
        >
          <option value="">Team Size</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="200+">200+</option>
        </select>
        {errors.teamSize && (
          <p className="text-red-500 text-sm">
            {errors.teamSize.message}
          </p>
        )}
      </div>

      {/* Date + Website */}
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <input
            type="date"
            {...register("foundedDate", {
              required: "Founded date is required",
            })}
            className="border px-3 py-2 rounded w-full"
          />
          {errors.foundedDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.foundedDate.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="url"
            placeholder="Company Website"
            {...register("website", {
              required: "Company website is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Enter a valid URL (https://)",
              },
            })}
            className="border px-3 py-2 rounded w-full"
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>
      </div>

      {/* Vision */}
      <textarea
        rows="4"
        placeholder="Company Vision..."
        {...register("vision", {
          required: "Company vision is required",
          minLength: {
            value: 10,
            message: "Vision must be at least 10 characters",
          },
        })}
        className="w-full border rounded px-3 py-2 mt-4"
      />
      {errors.vision && (
        <p className="text-red-500 text-sm mt-1">
          {errors.vision.message}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
        >
          Save & Next →
        </button>
      </div>
    </form>
  );
}
