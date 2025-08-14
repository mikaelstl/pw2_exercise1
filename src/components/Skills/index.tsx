import "tailwindcss";
import { DividerV, Text } from "../base";

interface SkillsProps {
  skills: string[];
}

export default function Skills(props: SkillsProps) {
  return (
    <div className="crd-skills flex gap-3">
      <DividerV/>
      <div className="skills">
        {props.skills.map(skill => <Text content={skill}/>)}
      </div>
    </div>
  )
}