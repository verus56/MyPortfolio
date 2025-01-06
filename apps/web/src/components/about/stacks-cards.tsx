'use client'

import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin, LuRss } from "react-icons/lu";
import {
  TbBrandCpp, TbBrandTypescript,
  TbBrandGolang, TbBrandNextjs,
  TbPhotoSquareRounded, TbBrandDocker, TbBrandMysql,
} from "react-icons/tb";
import { FaReact, FaAws } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine } from "react-icons/ri";
import { SiLatex, SiFastapi } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import { Marquee } from './marquee'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 overflow-hidden rounded-xl p-4'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm font-light'>{"Stacks"}</h2>
      </div>
      <Marquee gap='20px' className='' fade pauseOnHover>
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='' reverse fade pauseOnHover>
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
        <FaReact className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard