// export default function CompanyInfo({ onNext }) {
//   return (
//     <div className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow">
//       <h2 className="font-semibold mb-4">Logo & Banner Image</h2>

//       <div className="grid md:grid-cols-3 gap-6">
//         <input type="file" className="border-dashed border-2 rounded h-36 flex items-center justify-center " placeholder="upload logo"/>
         
//         <input type="file" className="border-dashed border-2 rounded h-36 flex items-center justify-center" placeholder="upload banner"/>
//       </div>

//       <div className="mt-4">
//         <input
//           type="text"
//           placeholder="Company Name"
//           className="w-full border rounded px-3 py-2 mb-3"
//         />
//         <textarea
//           rows="4"
//           placeholder="Write down about your company here let the candidates know more about your company..."
//           className="w-full border rounded px-3 py-2"
//         />
//       </div>

//       <div className="text-right mt-4">
//         <button
//           onClick={onNext}
//           className="bg-blue-600 text-white px-6 py-2 rounded"
//         >
//           Save & Next →
//         </button>
//       </div>
//     </div>
//   );
// }
import { useForm } from "react-hook-form";


export default function CompanyInfo({ onNext }) {
  const {
      register,
      handleSubmit,
      watch,
      setError,
      reset,
      
      formState: { errors,isSubmitting },
    } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    onNext(); 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-5xl mx-auto bg-white mt-6 p-6 rounded shadow"
    >
      <h2 className="font-semibold mb-4">Logo & Banner Image</h2>

      <div className="grid md:grid-cols-3 gap-6">
      
        <div>
          <input
            type="file"
            {...register("logo", {
              required: "Logo is required",
            })}
            className="border-dashed border-2 rounded h-36 w-full"
          />
          {errors.logo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.logo.message}
            </p>
          )}
        </div>

     
        <div>
          <input
            type="file"
            {...register("banner", {
              required: "Banner is required",
            })}
            className="border-dashed border-2 rounded h-36 w-full"
          />
          {errors.banner && (
            <p className="text-red-500 text-sm mt-1">
              {errors.banner.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
       
        <input
          type="text"
          placeholder="Company Name"
          {...register("companyName", {
            required: "Company name is required",
          })}
          className="w-full border rounded px-3 py-2 mb-1"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mb-2">
            {errors.companyName.message}
          </p>
        )}

      
        <textarea
          rows="4"
          placeholder="Write down about your company here let the candidates know more about your company..."
         
          className="w-full border rounded px-3 py-2"
        />
       
      </div>

      <div className="text-right mt-4">
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

