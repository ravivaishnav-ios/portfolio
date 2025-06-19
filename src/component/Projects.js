import React from 'react';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Damac Living – Property Management App",
    platform: "React Native (iOS & Android)",
    link: "https://apps.apple.com/us/app/damac-living/id1446489552",
    description:
      "Cross-platform app with property listing, maintenance scheduling, service requests, and notifications. Integrated OTA updates, REST APIs, and localization.",
  },
  {
    title: "Damac 360 – Agent Engagement App",
    platform: "React Native (TypeScript, Redux, ES6+)",
    link: "https://apps.apple.com/us/app/damac-agents/id1477456157",
    description:
      "Real estate agent productivity app with deal pipelines, notifications, and modular architecture using TypeScript and Redux.",
  },
  {
    title: "Damac Chairman Website",
    platform: "React.js",
    link: "https://hussainsajwani.com/",
    description:
      "Internal website for managing chairman profile with a clean UX for field staff.",
  },
  {
    title: "Emaar SnagIt – Snag Management App",
    platform: "iOS Native (Swift, Core Data)",
    link: "",
    description:
      "Offline-first snag management app with media uploads and role-based flows for Emaar employees.",
  },
  {
    title: "Baritastic – Bariatric Health Tracker",
    platform: "iOS Native (Objective-C)",
    link: "https://apps.apple.com/us/app/baritastic-bariatric-tracker/id899131093",
    description:
      "Health tracker app with food logs, reminders, and compliance features designed with dietitians.",
  },
  {
    title: "Profeud – Fantasy Sports App",
    platform: "Flutter (Dart)",
    link: "https://apps.apple.com/in/app/profeud-fantasy-esports/id1510937024",
    description:
      "Fantasy esports platform with real-time match updates, payments, and leaderboards.",
  },
  {
    title: "SpinContact – Social Networking App",
    platform: "iOS Native (Swift)",
    link: "https://apps.apple.com/us/app/spincontact/id1468458105",
    description:
      "Social app for group chats, media posts, and contact sync with LinkedIn + WhatsApp features.",
  },
  {
    title: "Paysend – Banking & Money Transfer App",
    platform: "React Native",
    link: "https://play.google.com/store/apps/details?id=com.paysend.app&hl=en",
    description:
      "Money transfer app with KYC, OTP, and secure API integrations for compliance-heavy workflows.",
  },
  {
    title: "Nactus – Education & Learning App",
    platform: "iOS Native (Objective-C)",
    link: "https://apps.apple.com/in/app/nactus/id1090907884",
    description:
      "Online learning app with video classes, chat, exams, payments, and analytics.",
  },
];

const Projects = () => (
  <section style={{ padding: '20px' }} className="px-6 py-12 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;