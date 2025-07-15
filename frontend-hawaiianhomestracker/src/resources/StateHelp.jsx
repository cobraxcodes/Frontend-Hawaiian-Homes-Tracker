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
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <ul style={styles.linkList}>
        {links.map(({ label, url }) => (
          <li key={url} style={styles.linkItem}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={styles.link}>
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
    <div style={styles.container}>
      <h1 style={styles.header}>State Assistance Resources for Native Hawaiians</h1>
      {resources.map((res) => (
        <ResourceCard key={res.title} {...res} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fefefe",
  },
  header: {
    textAlign: "center",
    color: "#078660ff",
    marginBottom: 30,
    fontWeight: "700",
    fontSize: "2.5rem",
    borderBottom: "3px solid #0097a7",
    paddingBottom: 10,
  },
  card: {
    backgroundColor: "#619373ff",
    padding: 20,
    marginBottom: 25,
    borderRadius: 10,
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#ffffffff",
    marginBottom: 10,
    fontSize: "1.75rem",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: 15,
    color: "#ffffffff",
  },
  linkList: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  linkItem: {
    marginBottom: 8,
  },
  link: {
    textDecoration: "none",
    color: "#076943ff",
    fontWeight: "600",
  },
};
