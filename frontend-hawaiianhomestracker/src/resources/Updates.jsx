import { useState } from "react";

export default function Updates() {
  const [updates, setUpdates] = useState([
    {
      id: 1,
      date: "2025-07-15",
      title: "Welcome to My Website!",
      details:
        "This is the first update. Stay tuned for news, features, and announcements.",
    },
  ]);

  return (
    <section className=" min-h-[calc(90vh-200px)] max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-center text-3xl font-bold text-green-700 mb-8">
        Website Updates
      </h2>
      {updates.length === 0 ? (
        <p className="text-center text-gray-500 italic">No updates yet.</p>
      ) : (
        <ul className="space-y-8">
          {updates.map(({ id, date, title, details }) => (
            <li
              key={id}
              className="border-l-4 border-green-500 pl-4 bg-green-50 rounded-md p-4"
            >
              <time className="block text-sm text-black-600 mb-1">
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="text-xl font-semibold text-green-900">{title}</h3>
              <p className="mt-2 text-black-800">{details}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
