import "tailwindcss";
import { Text, Title } from "../base";
import Skills from "../Skills";

interface CardProps {
  name: string;
  photo: string;
  phone: string;
  skills: string[];
  history: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card bg-card size-fit rounded-2xl w-md h-full p-6 flex flex-col gap-4">
      <div className="perfil flex justify-between">
        <img src={props.photo} className="photo w-38" />
        <div className="personal_infos flex flex-col">
          <Title text={props.name}/>
          <Text content={props.phone}/>
        </div>
      </div>
      <Text content={props.history}/>
      <Skills skills={props.skills}/>
    </div>
  )
}