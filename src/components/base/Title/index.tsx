interface TitleProps {
  text: string
}

export default function Title(props: TitleProps) {
  return (
    <>
      <p className="title font-rubik font-medium text-3xl">{props.text}</p>
    </>
  )
}