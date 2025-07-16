import React from "react";

const resources = [
  {
    title: "Office of Hawaiian Affairs (OHA)",
    description:
      "Grants, scholarships, community programs, cultural preservation, and economic development.",
    links: [
      { label: "OHA Main Site", url: "https://www.oha.org" },
      { label: "Grants & Scholarships", url: "https://www.oha.org/grants/" },
      { label: "Scholarships", url: "https://www.oha.org/scholarships/" },
    ],
  },
  {
    title: "Native Hawaiian Health Care Systems",
    description:
      "Health programs addressing Native Hawaiian disparities, including primary care and behavioral health.",
    links: [
      {
        label: "HI Dept of Health - Native Hawaiian Health Program",
        url: "https://health.hawaii.gov/about/health-topics/",
      },
      {
        label: "Native Hawaiian Health Care Systems Directory",
        url: "https://www.papaolalokahi.org/",
      },
    ],
  },
  {
    title: "Hawai‘i Department of Education – Hawaiian Education Programs",
    description:
      "Hawaiian language immersion, culture curriculum, and education scholarships.",
    links: [
      {
        label: "Hawaiian Education Overview",
        url:
          "https://www.hawaiipublicschools.org/TeachingAndLearning/HawaiianEducation/Pages/home.aspx",
      },
      {
        label: "Hawaiian Language Immersion Program",
        url:
          "https://www.hawaiipublicschools.org/TeachingAndLearning/HawaiianEducation/Pages/Hawaiian-Language-Immersion.aspx",
      },
    ],
  },
  {
    title: "Hawai‘i Housing Finance and Development Corporation (HHFDC)",
    description:
      "Affordable housing development and assistance for Native Hawaiians.",
    links: [
      { label: "HHFDC Main Site", url: "https://dbedt.hawaii.gov/hhfdc/" },
      {
        label: "Native Hawaiian Housing Programs",
        url: "https://dbedt.hawaii.gov/hhfdc/housing_links-2/",
      },
    ],
  },
  {
    title: "Cultural Preservation & Economic Development Grants",
    description:
      "Grants and programs for cultural preservation and economic self-sufficiency.",
    links: [
      {
        label: "OHA Cultural Grants",
        url: "https://www.oha.org/economic-self-sufficiency/grants/",
      },
      {
        label: "Hawaii Community Foundation Native Hawaiian Grants",
        url: "https://www.hawaiicommunityfoundation.org/native-hawaiian",
      },
    ],
  },
  {
    title: "Native Hawaiian Legal Assistance",
    description:
      "Legal services for land, civil rights, and cultural protection of Native Hawaiians.",
    links: [{ label: "Native Hawaiian Legal Corporation", url: "https://nativehawaiianlegalcorp.org/services/" }],
  },
];

const ResourceCard = ({ title, description, links }) => {
  return (
    <div className="bg-green-700 p-6 mb-6 rounded-lg shadow-md opacity-90">
      <h2 className="text-white text-2xl font-bold mb-3">{title}</h2>
      <p className="text-white text-lg mb-4">{description}</p>
      <ul className="list-none p-0">
        {links.map(({ label, url }) => (
          <li key={url} className="mb-2">
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

export default function StateHelp() {
  return (
    <div className="max-w-5xl mx-auto my-10 px-5 font-sans bg-white">
      <h1 className="text-center text-4xl font-extrabold text-teal-800 mb-10 border-b-4 border-teal-600 pb-4">
        State Assistance Resources for Native Hawaiians
      </h1>
      {resources.map((res) => (
        <ResourceCard key={res.title} {...res} />
      ))}
    </div>
  );
}
