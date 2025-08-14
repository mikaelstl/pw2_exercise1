import "tailwindcss";

interface CardProps {
  name: string;
  photo: string;
  phone: string;
  skills: string[];
  history: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="
      card
      bg-card
    ">
      <img src={props.photo} className="photo w-48" />
    </div>
  )
}