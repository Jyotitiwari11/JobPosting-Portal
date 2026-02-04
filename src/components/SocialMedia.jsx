// export default function SocialMedia({ onNext, onPrev }) {
//   return (
//     <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow">
//       <input className="w-full border px-3 py-2 mb-3" placeholder="LinkedIn URL" />
//       <input className="w-full border px-3 py-2 mb-3" placeholder="Twitter URL" />
//       <input className="w-full border px-3 py-2 mb-3" placeholder="Facebook URL" />

//       <div className="flex justify-between">
//         <button onClick={onPrev} className="border px-4 py-2 rounded">
//           Previous
//         </button>
//         <button onClick={onNext} className="bg-blue-600 text-white px-6 py-2 rounded">
//           Save & Next →
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useForm } from "react-hook-form";

// export default function SocialMedia({ onNext, onPrev }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // social media data
//     onNext(); // go next only if valid
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow"
//     >
//       {/* LinkedIn */}
//       <input
//         className="w-full border px-3 py-2 mb-1"
//         placeholder="LinkedIn URL"
//         {...register("linkedin", {
//           required: "LinkedIn URL is required",
//           pattern: {
//                 value: /^https?:\/\/.+/i,
//                 message: "Enter a valid URL (https://)",
//               },
        
//         })}
//       />
//       {errors.linkedin && (
//         <p className="text-red-500 text-sm mb-2">
//           {errors.linkedin.message}
//         </p>
//       )}

//       {/* Twitter */}
//       <input
//         className="w-full border px-3 py-2 mb-1"
//         placeholder="Twitter URL"
//         {...register("twitter", {
//           required: "Twitter URL is required",
//          pattern: {
//                 value: /^https?:\/\/.+/i,
//                 message: "Enter a valid URL (https://)",
//               },
//         })}
//       />
//       {errors.twitter && (
//         <p className="text-red-500 text-sm mb-2">
//           {errors.twitter.message}
//         </p>
//       )}

//       {/* Facebook */}
//       <input
//         className="w-full border px-3 py-2 mb-1"
//         placeholder="Facebook URL"
//         {...register("facebook", {
//           required: "Facebook URL is required",
//          pattern: {
//                 value: /^https?:\/\/.+/i,
//                 message: "Enter a valid URL (https://)",
//               },
//         })}
//       />
//       {errors.facebook && (
//         <p className="text-red-500 text-sm mb-2">
//           {errors.facebook.message}
//         </p>
//       )}

//       {/* Buttons */}
//       <div className="flex justify-between mt-4">
//         <button
//           type="button"        // IMPORTANT: no validation
//           onClick={onPrev}
//           className="border px-4 py-2 rounded"
//         >
//           Previous
//         </button>

//         <button
//           type="submit"        // validation runs here
//           className="bg-blue-600 text-white px-6 py-2 rounded"
//         >
//           Save & Next →
//         </button>
//       </div>
//     </form>
//   );
// }

import { useForm, useFieldArray } from "react-hook-form";

const platforms = [
  { label: "Facebook", value: "facebook" },
  { label: "Twitter", value: "twitter" },
  { label: "Instagram", value: "instagram" },
  { label: "YouTube", value: "youtube" },
  { label: "LinkedIn", value: "linkedin" },
];

export default function SocialMedia({ onNext, onPrev }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      socials: [{ platform: "facebook", url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socials",
  });

  const onSubmit = (data) => {
    console.log("Social Media Data:", data);
    onNext(); // go next only if valid
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow"
    >
      {fields.map((field, index) => (
        <div key={field.id} className="mb-4">
          <label className="text-sm font-medium block mb-1">
            Social Link {index + 1}
          </label>

          <div className="flex items-center gap-2">
            {/* Platform Select */}
            <select
              className="border px-3 py-2 rounded w-40"
              {...register(`socials.${index}.platform`)}
            >
              {platforms.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>

            {/* URL Input */}
            <input
              className="flex-1 border px-3 py-2 rounded"
              placeholder="Profile link/url..."
              {...register(`socials.${index}.url`, {
                required: "URL is required",
                pattern: {
                  value: /^https?:\/\/.+/i,
                  message: "Enter a valid URL (https://)",
                },
              })}
            />

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="border rounded px-3 py-2 text-gray-500 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Error */}
          {errors.socials?.[index]?.url && (
            <p className="text-red-500 text-sm mt-1">
              {errors.socials[index].url.message}
            </p>
          )}
        </div>
      ))}

      {/* Add New */}
      <button
        type="button"
        onClick={() => append({ platform: "facebook", url: "" })}
        className="w-full border-dashed border py-3 rounded text-gray-600 flex items-center justify-center gap-2 mb-6"
      >
        ➕ Add New Social Link
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="border px-4 py-2 rounded"
        >
          Previous
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Save & Next →
        </button>
      </div>
    </form>
  );
}
