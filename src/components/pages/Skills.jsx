import React from "react";
import { FaCode, FaLightbulb, FaTools, FaLayerGroup } from "react-icons/fa";
import SkillCard from "../SkillCard";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-10 text-neutral-400 tracking-widest">
        TECHNICAL SKILLS
      </h2>

      {/* Skills Grid */}
      <div className=" flex flex-col justify-center gap-4 max-w-2xl w-full">
        {/* Programming Languages with badges */}
        <SkillCard
          title="Programming Languages"
          icon={FaCode}
          shadowColor="rgba(255,165,0,0.7)" // Orange glow
          badgeStyle={true}
          items={["HTML", "CSS", "MySQL", "Python", "R", "PHP"]}
        />

        {/* Concepts as normal list */}
        <SkillCard
          title="Concepts"
          icon={FaLightbulb}
          shadowColor="rgba(33,150,243,0.7)" // Blue glow
          badgeStyle={true}
          items={[
            "Risk Analysis",
            "Cloud Security",
            "Networking",
            "Cryptography",
            "Web App Security",
            "Cloud Architecture",
            "VAPT",
            "Ethical Hacking",
            "Digital Forensics",
            "SOC",
            "Incident Response",
            "AI (NLP, Chatbots)",
            "GRC (ISO/IEC 27001, NIST, APRA CPS 234)",
          ]}
        />

        {/* Tools with badges */}
        <SkillCard
          title="Tools"
          icon={FaTools}
          shadowColor="rgba(34,197,94,0.7)" // Green glow
          badgeStyle={true}
          items={[
            "Linux",
            "Docker",
            "Kubernetes",
            "Nmap",
            "Hydra",
            "Wireshark",
            "Burp Suite",
            "LinPEAS",
            "SIEM (Splunk/ELK)",
            "AWS (EC2, S3, IAM)",
            "FTK Imager",
            "Autopsy",
          ]}
        />

        {/* Others as normal list */}
        <SkillCard
          title="Others"
          icon={FaLayerGroup}
          shadowColor="rgba(255,235,59,0.7)" // Yellow glow
          badgeStyle={true}
          items={[
            "Microsoft 365 Suite",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Blender 3D",
          ]}
        />
      </div>
    </div>
  );
}

export default Skills;
