import Image from "next/image"

interface ImageProps {
  ImageSource: string,
  ImageSize: number
}

const CircleImage = ({ImageSource, ImageSize}: ImageProps) => {
  return (
    <div className="rounded-full border-2 border-darkMdBG dark:border-white bg-transparent p-3 w-fit">
      <div className={`w-${ImageSize} h-${ImageSize} relative overflow-hidden rounded-full`}>
        <Image src={ImageSource} alt="Images" fill style={{objectFit: 'contain'}} className="scale-125"/>
      </div>
    </div>
  )
}

export default CircleImage