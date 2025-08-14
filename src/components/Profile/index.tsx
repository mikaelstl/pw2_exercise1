import { Text, Title } from "../base";
import Photo from "../Photo";

interface ProfileProps {
  name: string;
  photo: string;
  phone: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <div className="perfil flex gap-5">
      <Photo path={props.photo} alt={"Foto de perfil"}/>
      <div className="personal_infos flex flex-col">
        <Title text={props.name}/>
        <Text content={props.phone}/>
      </div>
    </div>
  )
}