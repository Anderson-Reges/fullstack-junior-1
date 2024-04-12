import clsx from "clsx"
import Image from "next/image"

export const HeroFeatureBoxGrid = () => {

  const ImagesMap = [
    {
      img: "/assets/man-shirt-orange.png",
      width: "173.31",
      height: "367.57"
    },
    {
      img: "/assets/woman-shirt-yellow.png",
      width: "173.31",
      height: "173.31"
    },
    {
      img: "/assets/woman-shirt-pink.png",
      width: "173.31",
      height: "173.31"
    },
    {
      img: "/assets/man-shirt-brown.png",
      width: "173.31",
      height: "367.57"
    },
    {
      img: "/assets/woman-shirt-white.png",
      width: "173.31",
      height: "367.57"
    },
  ]

  return (
    <div className="relative columns-3 space-y-5 justify-center z-50">
      {
        ImagesMap.map(({ img, width, height }, index) => (
          <Image
            src={img}
            width={Number(width)}
            height={Number(height)}
            alt=""
            className={clsx(
              ``,
              {
                "pt-[100px]": index === 4
              }
            )}
          />
        ))
      }
    </div>
  )
}
