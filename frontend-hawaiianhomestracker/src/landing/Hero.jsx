import { CloudArrowUpIcon, LockClosedIcon, BellAlertIcon } from '@heroicons/react/20/solid'
import {Link} from 'react-router-dom'
import heroImg from '../assets/heroImg.jpg'

const features = [
  {
    name: 'Create An Application',
    description:
      'Add your application information into the database and see where you are in rankings',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Get Notified',
    description: 'Stay current by providing your email address for any updates on applications list',
    icon: BellAlertIcon,
  },
  {
    name: 'No Third Party',
    description: 'Your information is safe. We will never share your information',
    icon: LockClosedIcon,
  },
]

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-64 sm:py-32" id='home'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Ua mau ke ea o ka aina i ka pono
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
              Supporting our lāhui by keeping Hawaiian Home Lands applications organized and accessible.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-green-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex justify-center">
                <Link to={'/all'}>
                 <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full" href='/all'>
                View All Applications
                </button>
                </Link>
              </div>
            </div>
          </div>

          <img
            alt="Hero Image"
            src={heroImg}
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
