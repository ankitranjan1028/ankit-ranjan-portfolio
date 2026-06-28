import React from "react";
import { Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { BsFiletypeCss } from "react-icons/bs";
import { TbBrandTypescript, TbBrandStorybook } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedux,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import SkillIcon from "./SkillIcon";

const skills = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <BsFiletypeCss />, name: "CSS" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <DiHtml5 />, name: "HTML5" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <TbBrandTypescript />, name: "TypeScript" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <TbBrandStorybook />, name: "Storybook" },
];

function Techstack() {
  return (
    <Row className="tech-stack-row">
      {skills.map((skill) => (
        <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </Row>
  );
}

export default Techstack;
