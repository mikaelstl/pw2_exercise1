interface LabelProps {
  content: string
}

export default function Text(props: LabelProps) {
  return (
    <>
      <p className="label font-rubik font-normal text-lg">{props.content}</p>
    </>
  )
}