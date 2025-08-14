import "tailwindcss";
import { DividerH, Text } from "../base";

interface SkillsProps {
  skills: string[];
}

export default function Skills(props: SkillsProps) {
  return (
    <div className="crd-skills flex gap-3">
      <DividerH/>
      <div className="skills">
        {props.skills.map(skill => <Text content={skill}/>)}
      </div>
    </div>
  )
}