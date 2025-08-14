import "tailwindcss";
import { Text } from "../base";
import Skills from "../Skills";
import Profile from "../Profile";

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
      <Profile name={props.name} photo={props.photo} phone={props.phone}/>
      <Text content={props.history}/>
      <Skills skills={props.skills}/>
    </div>
  )
}