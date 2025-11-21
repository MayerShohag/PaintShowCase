import { RiDragDropLine } from "react-icons/ri";

export default function Paint() {
     return (
          <div className="mb-4">
               <label className="block font-medium mb-2">Upload Painting</label>
               <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:bg-gray-900 transition">
                         <img
                              src=""
                              alt="Preview"
                              className="object-contain h-64 w-full rounded hidden"
                         />

                         <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                              <RiDragDropLine className="text-6xl" />
                              <p className="text-sm">
                                   Click to upload or drag and drop
                              </p>
                         </div>

                         <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                         />
                    </label>
               </div>
          </div>
     );
}
