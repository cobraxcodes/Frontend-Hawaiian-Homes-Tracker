import { useState, useEffect } from "react";

export default function UpdateModal({ isOpen, onClose, onSave, app }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [zipcode, setZipcode] = useState("");

  // Initialize state when modal opens and app changes
  useEffect(() => {
    if (app) {
      setName(app.name || "");
      setDate(app.applicationDate ? app.applicationDate.split("T")[0] : "");
      setArea(app.areaCode || "");
      setZipcode(app.zipcode || "");
    }
  }, [app]);

  if (!isOpen || !app) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-5">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-4xl font-bold mb-12">Update Application</h2>


        {/* <div> */}
            <h3 className="font-bold text-xl">Name</h3>
        <input
        name="fullname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Name"
        />
        {/* </div> */}
        <br/>


         <h3 className="font-bold text-xl">Application Date</h3>
        <input
        name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />

         <h3 className="font-bold text-xl">Area Code</h3>
        <input
        name="areacode"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Area Code"
        />

         <h3 className="font-bold text-xl">Zipcode</h3>
        <input
        name="zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Zipcode"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={() =>
              onSave({ name, applicationDate: date, areaCode: area, zipcode })
            }
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
