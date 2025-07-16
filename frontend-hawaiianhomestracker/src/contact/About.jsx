import kahoolawe from '../assets/kahoolawe.jpg'



export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-green-600">Who We Are</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Change starts from within
              </p>
             <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  Hi, I’m Melrose — an Indigenous Filipino developer and community advocate. I met my wife in Hawaiʻi, where she was born and raised as a Native Hawaiian. Together, we’ve made it a mission to empower Indigenous communities and uplift voices that have long been overlooked.
</p>

<p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  Our journey into advocacy for Hawaiian Home Lands applicants is deeply personal. My wife’s grandfather passed away before he was able to claim his family’s land on Big Island — a loss that was made even more painful because his family was left in the dark about the status of his application.
</p>

<p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  To this day, there are applications in the system dating back over 60 years, buried in a 200+ page PDF that’s difficult to access, especially for our kūpuna (elders) who deserve better.
</p>

<p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  At a time when Hawaiʻi’s landscapes are being transformed by tourism and industrial development, it’s heartbreaking that something as essential as an accessible system for Native Hawaiians to track their land applications still doesn’t exist.
</p>

<p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  That’s why I created Hawaiian Homes Tracker — a community-powered, open-source tool built to foster transparency, empower Native Hawaiians, and take a small but meaningful step toward equity in land access.
</p>

<p className="mt-4 mb-8 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
  This is more than just a project; it’s a personal commitment to honor the past, support our community, and advocate for a future where Native Hawaiians can reclaim what’s rightfully theirs.
</p>
              
            </div>
          </div>

          <img
            alt="Product screenshot"
            src={kahoolawe}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
        
      </div>
    </div>
  )
}
