import React from "react";

const resources = [
  {
    title: "USDA Rural Development HI",
    description:
      "Single family and multifamily loan services and grants .",
    links: [
      { label: "USDA.GOV", url: "https://www.rd.usda.gov/programs-services/single-family-housing-programs" },
    
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
      }
    ],
  },
  {
    title: "Hawai‘i DHS Support Services Division",
    description:
       "Provides financial assistance programs including emergency rental, utility aid, and other support services to help Native Hawaiians and Hawaii residents maintain housing stability and basic needs.",
    links: [
      {
        label: "Hawaiian Education Overview",
        url:
          "https://humanservices.hawaii.gov/bessd/",
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
    links: [{ label: "Native Hawaiian Legal Corporation", url: "https://www.legalaidhawaii.org/" }],
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

export default function Information() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Be Informed: As A Homesteader</h1>
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
