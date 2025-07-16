import React from "react";

const resources = [
  {
    title: "USDA Rural Development HI",
    description: "Single family and multifamily loan services and grants.",
    links: [
      {
        label: "USDA.GOV",
        url: "https://www.rd.usda.gov/programs-services/single-family-housing-programs",
      },
    ],
  },
  {
    title: "HUD Hawaii (FHA Loans)",
    description:
      "Provides federal housing assistance programs including FHA loans, helping Native Hawaiians and others access affordable home financing and support for homeownership in Hawaii.",
    links: [
      {
        label: "Housing and Urban Development US Department",
        url: "https://www.hud.gov/states/hawaii",
      },
    ],
  },
  {
    title: "Hawai‘i DHS Support Services Division",
    description:
      "Provides financial assistance programs including emergency rental, utility aid, and other support services to help Native Hawaiians and Hawaii residents maintain housing stability and basic needs.",
    links: [
      {
        label: "Hawaiian Education Overview",
        url: "https://humanservices.hawaii.gov/bessd/",
      },
    ],
  },
  {
    title: "Hawai‘i Housing Finance and Development Corporation (HHFDC)",
    description:
      "Leads affordable housing development and provides financial assistance programs tailored for Native Hawaiians to help secure safe, affordable housing throughout the state.",
    links: [
      {
        label: "Native Hawaiian Housing Programs",
        url: "https://dbedt.hawaii.gov/hhfdc/housing_links-2/",
      },
    ],
  },
  {
    title: "Native Hawaiian Legal Assistance",
    description:
      "Legal services for land, civil rights, and cultural protection of Native Hawaiians.",
    links: [
      {
        label: "Native Hawaiian Legal Corporation",
        url: "https://www.legalaidhawaii.org/",
      },
    ],
  },
];

const ResourceCard = ({ title, description, links }) => {
  return (
    <div className="bg-green-700 p-6 mb-6 rounded-lg shadow-md opacity-90">
      <h2 className="text-white text-2xl font-bold mb-3">{title}</h2>
      <p className="text-white text-lg mb-4">{description}</p>
      <ul className="list-none p-0">
        {links.map(({ label, url }) => (
          <li key={url} >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 font-semibold hover:underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Information() {
  return (
    <div className="max-w-5xl mx-auto my-10 px-5 font-sans bg-white">
      <h1 className="text-center text-4xl font-extrabold text-teal-800 mb-10 border-b-4 border-teal-600 pb-4">
        Be Informed: As A Homesteader
      </h1>
      {resources.map((res) => (
        <ResourceCard key={res.title} {...res} />
      ))}
    </div>
  );
}
