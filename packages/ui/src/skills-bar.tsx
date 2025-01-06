import React from "react";
import "./styles/skills-bar.css";

interface Skill {
  name: string;
  level: number;
}

interface SkillsBarProps {
  skills: Skill[];
}

/**
 * @example
 * 
 * const skills = [
 *   { name: "JavaScript", level: 80 },
 *   { name: "TypeScript", level: 70 },
 *   { name: "React", level: 75 },
 *   { name: "Node.js", level: 65 },
 * ];
 * 
 * <SkillBars skills={skills}/>
 */
const SkillsBar: React.FC<SkillsBarProps> = ({ skills }) => {
  return (
    <section className="skill">
      <ul className="skills-list content-card">
        {skills.map((skill, index) => (
          <li className="skills-item" key={index}>
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.level}>{skill.level}%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsBar;
