import cardOne from '../assets/cardOne.jpg'
import cardTwo from '../assets/cardTwo.jpeg'
import cardThree from '../assets/cardThree.jpg'
import cardFour from '../assets/cardFour.jpg'
import Header from './Header'
import Footer from './Footer'


const resources = [
  {
    id:0,
    name: 'Apply For Hawaiian Homes',
    href: 'https://dhhl.hawaii.gov/applications/applying-for-hawaiian-home-lands/" ' ,
    imageSrc: cardOne,
    description: '',
  },
  {
    id:1,
    name: 'Be Informed',
    href: '#',
    imageSrc: cardTwo,
    description: "List of tenant's rights or available grants, loans, or financial aid programs for homesteaders"
  },
{
    id:2,
    name: 'Emergency Rental and Utilities',
    href: '#',
    imageSrc: cardThree,
    description: 'State provided assistance '
},
{
   id:3,
    name: 'Website Updates',
    href: '#',
    imageSrc: cardFour,
    description: 'Click here to stay updated on any upcoming updates to the website or applications.'
}
  // More products...
]

export default function Resources() {
  return (
    <>
    <div className="bg-white" id='resources'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">RESOURCES</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {resources.map((resources) => (
            <div key={resources.id} className="group relative">
              <img
                src={resources.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={resources.href} target='_blank'>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {resources.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{resources.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{resources.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
