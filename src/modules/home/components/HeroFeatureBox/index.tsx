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
        <p className="font-bold text-white text-[5rem] w-[48.5rem] mb-6 leading-[5.313rem]">
          Build your best community starting from here.
        </p>
        <p className="w-[38.563rem] text-white opacity-50 font-[Poppins] text-[1.5rem] leading-[1.875rem]">
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
      <div className="flex mt-[2.93rem] gap-12 justify-between">
        {
          IconMap.map(({ icon, description }) => (
            <span className="flex">

              <div className="relative flex justify-center items-center ">
                <div className="flex z-40 absolute justify-center items-center w-16 h-16 bg-white opacity-[25%] rounded-2xl" />
                <div className="relative z-50">
                  {icon}
                </div>
              </div>

              <p className="relative z-50 right-0 w-[6.25rem] pl-7 text-white font-[Poppins] font-semibold">{description}</p>
            </span>
          ))
        }
      </div>
    </>
  )
}