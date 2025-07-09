export default function History() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">The history of</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          The Hawaiian Home Lands
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                 The Origins
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  In the early 20th century, Native Hawaiians were facing devastating displacement from their ancestral lands. Over generations following the illegal overthrow of the Hawaiian Kingdom in 1893 and annexation by the United States in 1898, Native Hawaiians lost much of their land ownership and access to subsistence resources.
Recognizing this crisis, Prince Jonah Kūhiō Kalaniana‘ole, a Native Hawaiian and delegate to the U.S. Congress, advocated fiercely for land to be returned to Native Hawaiians.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">The Hawaiian Homes Commission Act </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  In 1921, Congress passed the Hawaiian Homes Commission Act (HHCA), signed into law by President Warren G. Harding. </p>
                  <ul>
                    <li class="list-disc list-inside m-2 text-gray-600">Set aside about 203,500 acres of public lands in Hawaii for lease to Native Hawaiians.</li>
                    <li class="list-disc list-inside m-2 text-gray-600">Defined "Native Hawaiian" as any descendant with at least 50% Hawaiian blood quantum.</li>
                    <li class="list-disc list-inside m-2 text-gray-600">Created a land trust system where Native Hawaiians could lease homestead land for residential, agricultural, or pastoral purposes for $1 per year long-term leases.</li>
                    <li class="list-disc list-inside m-2 text-gray-600">Intended to rehabilitate Native Hawaiians and reconnect them to the land for cultural, social, and economic survival.</li>
                  </ul>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
               
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Statehood</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                   When Hawai‘i became a U.S. state in 1959, responsibility for administering these lands transferred from the federal government to the state through a state constitutionally established Department of Hawaiian Home Lands (DHHL).
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Ongoing Challenges
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <ul>
                    <li class="list-disc list-inside m-2 text-gray-600">A high waitlist of applicants, some waiting lifetimes for a lease</li>
                    <li class="list-disc list-inside m-2 text-gray-600">Issues with underfunding, infrastructure development, and bureaucracy</li>
                    <li class="list-disc list-inside m-2 text-gray-600">The controversial blood quantum requirement (50% minimum) continues to exclude many Native Hawaiians with lower ancestry percentages, while risking the trust’s future sustainability as demographics shift</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
