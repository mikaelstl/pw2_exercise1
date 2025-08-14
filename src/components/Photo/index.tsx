interface PhotoProps {
  path: string;
  alt: string;
}

export default function Photo(props: PhotoProps) {
  return (
    <div className="photo w-38 aspect-square rounded-full overflow-hidden">
      <img src={props.path} alt={props.alt} className="image" />
    </div>
  )
}