export default function Contribute() {
  return (
    <div className="min-h-[calc(95vh-200px)] flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Contribute</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project was built to support Hawaiian Home Lands applicants by providing a tool to track and manage their applications.
          It’s an open-source, community-powered initiative — and your contributions can help improve it for everyone.
        </p>

        <a
          href="https://github.com/cobraxcodes/Hawaiian-Homes-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-md shadow hover:bg-indigo-500 transition mb-8"
        >
          View the GitHub Repo
        </a>

        <p className="text-xl text-gray-800 font-medium mt-8">
          Let’s work together in championing transparency and accountability for Native Hawaiian Lands.
        </p>
      </div>
    </div>
  );
}
