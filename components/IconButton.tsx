
interface Props{
  icon: any
  label: string
}


export default function IconButton({icon: Icon, label }: Props) {
  return (
    <button className="flex items-center mx-2 my-2 hover:text-white ">
      <Icon className="icon" />
      <span className=" ">{label}</span>
    </button>
  )
}
