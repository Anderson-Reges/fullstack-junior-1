import { ArrowRight } from "@/modules/common/icons/arrowRight"
import { Calendar } from "@/modules/common/icons/calendar"
import { ChatBubble } from "@/modules/common/icons/chatBubble"
import { Post } from "@/modules/common/icons/post"
import { ReactElement } from "react"

export const HeroFeatureBox = () => {

  const IconMap: { icon: ReactElement, description: string }[] = [
    {
      icon: <ChatBubble />,
      description: "Build Community"
    },
    {
      icon: <Calendar />,
      description: "Share Events"
    },
    {
      icon: <Post />,
      description: "Get Information"
    }
  ]

  return (
    <>
      <div className="flex flex-col mb-8">
        <p className="font-bold text-white text-6xl w-[37.5rem] mb-6">
          Build your best community starting from here.
        </p>
        <p className="w-[26.563rem] text-white opacity-50 font-[Poppins]">
          Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way
        </p>
      </div>
      <div className="flex font-[Poppins]">
        <button className="h-[3.75rem] w-[15rem] bg-[#DB2A6B] text-white font-normal rounded-[1rem_1rem_1rem_0rem]">
          Get Started
        </button>
        <div className="flex items-center ml-8">
          <p className="text-white underline cursor-pointer">Learn more</p>
          <ArrowRight />
        </div>
      </div>
      <div className="flex mt-[9rem] gap-12">
        {
          IconMap.map(({ icon, description }) => (
            <span className="flex">

              <div className="relative flex justify-center items-center ">
                <div className="flex z-40 absolute justify-center items-center w-16 h-16 bg-white opacity-[25%] rounded-2xl" />
                <div className="relative z-50">
                  {icon}
                </div>
              </div>

              <p className="relative z-50 w-[6.25rem] text-white ml-5 font-[Poppins] font-semibold">{description}</p>
            </span>
          ))
        }
      </div>
    </>
  )
}