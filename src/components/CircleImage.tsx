import Image from "next/image"

interface ImageProps {
  ImageSource: string,
  ImageSize: number
}

const CircleImage = (props: ImageProps) => {
  return (
    <div className="rounded-full border border-darkMdBG dark:border-white bg-transparent p-2 w-fit">
      <div className={`relative overflow-hidden rounded-full`}>
        <Image src={props.ImageSource} alt="Images" width={props.ImageSize * 16} height={props.ImageSize * 16} style={{objectFit: 'contain'}} className="bg-darkMdBG dark:bg-white" unoptimized={true} fetchPriority="high"/>
      </div>
    </div>
  )
}

export default CircleImage