import React from "react";
import MoreInfoCard from "../../MoreInfoCard"
import shineImage from "../../../assets/shine.png";
import speakImage from "../../../assets/tedx.webp";
import leadImage from "../../../assets/lead.png";

function MoreInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 ">
      <MoreInfoCard
        title="Shine"
        subtitle="Women in Security Magazine"
        link="https://issuu.com/source2create/docs/women_in_security_magazine_issue20"
        description="Proudly featured in the Student Spotlight, sharing my journey in cybersecurity and shining a light on the next generation of women in tech."
        image={shineImage}
      />

      <MoreInfoCard
        title="Speak"
        subtitle="TEDxRMIT Melbourne City"
        description="Took the stage at TEDx to share my voice on the hidden cyber war targeting the elderly—turning passion into purpose and nerves into power."
        image={speakImage}
      />

      <MoreInfoCard
        title="Lead"
        subtitle="RISC 2025 Executive Team"
        link="https://www.linkedin.com/company/rmit-information-security-collective"
        description="Stepping up as Secretary of RMIT’s InfoSec Collective, helping build community, spark collaboration, and lead with a hacker’s heart (ethically, of course)."
        image={leadImage}
      />
    </div>
  );
}

export default MoreInfo;
