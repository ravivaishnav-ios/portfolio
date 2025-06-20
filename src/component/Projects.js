import React from 'react';

const projects = [
  {
    id: 1,
    title: "Damac Living – Property Management App",
    platform: "React Native (iOS & Android)",
    description:
      "Fully cross-platform property management app for Damac customers.",
    link: "https://apps.apple.com/us/app/damac-living/id1446489552",
    thumbnail:require('../assets/dL.png'),
  },
  {
    id: 2,
    title: "Damac 360 – Agent Engagement App",
    platform: "React Native (TypeScript, Redux, ES6+)",
    description:
      "Robust real estate agent productivity app with complex form flows.",
    link: "https://apps.apple.com/us/app/damac-agents/id1477456157",
    thumbnail:require('../assets/DA.png'),
  },
  {
    id: 3,
    title: "Damac Chairman Website",
    platform: "React.js",
    description: "Internal-use website for managing chairman profile.",
    link: "https://hussainsajwani.com/",
    thumbnail:require('../assets/hasni.png'),
       // No app icon, so using favicon
  },
  {
    id: 4,
    title: "Emaar SnagIt – Snag Management App",
    platform: "iOS Native (Swift, Core Data)",
    description:
      "Offline-first iOS app for managing construction snags and defects.",
    link: "#", // No public link available
    thumbnail: "", // No icon available
  },
  {
    id: 5,
    title: "Baritastic – Bariatric Health Tracker",
    platform: "iOS Native (Objective-C)",
    description:
      "Healthcare lifestyle tracker for bariatric patients with reminders.",
    link: "https://apps.apple.com/us/app/baritastic-bariatric-tracker/id899131093",
    thumbnail:require('../assets/bar.png'),
  },
  {
    id: 6,
    title: "Profeud – Fantasy Sports App",
    platform: "Flutter (Dart)",
    description:
      "Fantasy esports platform with real-time match updates and chat.",
    link: "https://apps.apple.com/in/app/profeud-fantasy-esports/id1510937024",
    thumbnail:require('../assets/dL.png'),
  },
  {
    id: 7,
    title: "SpinContact – Social Networking & Contact Sync App",
    platform: "iOS Native (Swift)",
    description:
      "Phonebook-based social app with group chats and contact syncing.",
    link: "https://apps.apple.com/us/app/spincontact/id1468458105",
    thumbnail:require('../assets/DA.png'),
  },
  {
    id: 8,
    title: "Paysend – Banking & Money Transfer App",
    platform: "React Native",
    description:
      "Money transfer features: KYC, bank linking, transaction history.",
    link: "https://play.google.com/store/apps/details?id=com.paysend.app&hl=en",
    thumbnail:require('../assets/pay.png'),
  },
  {
    id: 9,
    title: "Nactus – Education & Online Learning App",
    platform: "iOS Native (Objective-C)",
    description:
      "Education platform with virtual classes, chat, exams, and payments.",
    link: "https://apps.apple.com/in/app/nactus/id1090907884",
    thumbnail:require('../assets/bar.png'),
  },
  {
    id: 10,
    title: "Wtrend – Social Networking App",
    platform: "Flutter (Dart)",
    description:
      "Social app like Twitter in this user can post image text and status according to location and city wise",
    link: "https://apps.apple.com/in/app/nactus/id1587395898",
    thumbnail:require('../assets/wtrend.png'),
  
  },
   {
    id: 11,
    title: "Reel – Cinema Ticket Booking App",
    platform: "React Naitve",
    description:
      "Developed and maintained a full-featured React native application for Reel Cinemas under the Emaar Group",
    link: "https://apps.apple.com/in/app/nactus/id432316358",
    thumbnail:require('../assets/reel.png'),
  
  },
];


const Projects = () => {
  return (
    <header style={{backgroundColor: '#282c34'}}>
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 ,color:'white'}}>My Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {projects.map(({ id, title, platform, description, link, thumbnail }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#222",
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={thumbnail}
              alt={title}
              style={{ width: "100%", height: 160, objectFit: "cover" }}
            />
            <div style={{ padding: 15, flexGrow: 1 }}>
              <h2 style={{ fontSize: 18, marginBottom: 6 }}>{title}</h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 10,
                  fontStyle: "italic",
                }}
              >
                {platform}
              </p>
              <p style={{ fontSize: 14 }}>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </header>
  );
//   <section style={{ padding: '20px' }} className="px-6 py-12 bg-gray-100">
//     <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects.map((proj, idx) => (
//         <ProjectCard key={idx} {...proj} />
//       ))}
//     </div>
//   </section>
}

export default Projects;