import React from 'react';

const projects = [
  {
    id: 1,
    title: "Damac Living – Property Management App",
    platform: "React Native (iOS & Android)",
    description:
      "Fully cross-platform property management app for Damac customers.",
    link: "https://apps.apple.com/us/app/damac-living/id1446489552",
    thumbnail:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/25/4b/3f/254b3f36-7b28-9d50-f49a-2d96c0e5298a/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.png",
  },
  {
    id: 2,
    title: "Damac 360 – Agent Engagement App",
    platform: "React Native (TypeScript, Redux, ES6+)",
    description:
      "Robust real estate agent productivity app with complex form flows.",
    link: "https://apps.apple.com/us/app/damac-agents/id1477456157",
    thumbnail:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/fb/35/f0/fb35f0a3-7cd7-008d-7684-d18ca87a1e36/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.png",
  },
  {
    id: 3,
    title: "Damac Chairman Website",
    platform: "React.js",
    description: "Internal-use website for managing chairman profile.",
    link: "https://hussainsajwani.com/",
    thumbnail:
      "https://hussainsajwani.com/favicon.ico", // No app icon, so using favicon
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
    thumbnail:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/23/67/49/2367496c-ec7c-646f-5222-0adf45bb3bc4/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.png",
  },
  {
    id: 6,
    title: "Profeud – Fantasy Sports App",
    platform: "Flutter (Dart)",
    description:
      "Fantasy esports platform with real-time match updates and chat.",
    link: "https://apps.apple.com/in/app/profeud-fantasy-esports/id1510937024",
    thumbnail:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/fd/4b/36/fd4b36bc-6c9d-73a1-423b-0a63d2a01556/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.png",
  },
  {
    id: 7,
    title: "SpinContact – Social Networking & Contact Sync App",
    platform: "iOS Native (Swift)",
    description:
      "Phonebook-based social app with group chats and contact syncing.",
    link: "https://apps.apple.com/us/app/spincontact/id1468458105",
    thumbnail:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b6/1a/2e/b61a2e42-bc53-269d-2df7-486d06f4a98a/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.png",
  },
  {
    id: 8,
    title: "Paysend – Banking & Money Transfer App",
    platform: "React Native",
    description:
      "Money transfer features: KYC, bank linking, transaction history.",
    link: "https://play.google.com/store/apps/details?id=com.paysend.app&hl=en",
    thumbnail:
      "https://play-lh.googleusercontent.com/mE6GZ_cqvldZpkO6NOKF_mi1dm5rPK92FZoHLym0zNlnJKmn9B8vF7ztFQiH7T_kKiA=s180-rw",
  },
  {
    id: 9,
    title: "Nactus – Education & Online Learning App",
    platform: "iOS Native (Objective-C)",
    description:
      "Education platform with virtual classes, chat, exams, and payments.",
    link: "https://apps.apple.com/in/app/nactus/id1090907884",
    thumbnail:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/11/9e/f6/119ef62e-6c4f-06ec-1e6e-3d37c8f3341d/AppIcon-0-1x_U007emarketing-0-0-85-220-0-7.png/246x0w.png",
  },
];


const Projects = () => {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 }}>My Projects</h1>
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