import React from 'react'
import Icons from '../common/ui/Icons'
import Image from 'next/image'
import Heading from '../common/ui/Heading'
import Paragraph from '../common/ui/Paragraph'
import { NOMINO_UPDATE_DATA_LIST } from '@/app/lib/helper'

const Updates = () => {
    return (
        <>
            <div className='flex max-sm:flex-wrap w-full overflow-hidden'>
                <div className="w-full sm:w-6/12 sm:pe-3 lg:pe-2 xl:pe-3 lg:h-[222px]">
                    <div className="bg-updates bg-cover rounded-xl px-5 md:px-[30px] py-[22px] relative h-full">
                        {/* <Icons
                            icon="heroCardGraph"
                            className="absolute bottom-4 lg:bottom-6 xl:bottom-7 end-3 lg:end-4 xl:end-[22px]"
                        /> */}
                        <div className="size-[60px] xl:size-[70px] bg-white rounded-full flex justify-center items-center">
                            <Image
                                src="/assets/images/svg/files-processed.svg"
                                alt="files-processed"
                                width={36}
                                height={36}
                                className="!max-h-9 relative z-10"
                            />
                        </div>
                        <Heading
                            variant="Tertiary"
                            className="xl:text-2xl text-white leading-100 mt-[26px]">
                            Files Processed
                        </Heading>
                        <Heading
                            variant="primary"
                            className=" text-white xl:text-custom-8xxl mt-[15px] !font-extrabold">
                            1,274
                        </Heading>
                    </div>
                </div>
                <div className="w-full sm:w-6/12 sm:ps-3 lg:ps-2 xl:ps-3 mt-4 sm:mt-0  lg:h-[222px]">
                    <div className="bg-updates bg-cover h-full rounded-xl px-5 md:px-[30px] py-[22px] relative">
                        {/* <Icons
                            icon="heroCardGraph"
                            className="absolute bottom-4 lg:bottom-6 xl:bottom-7 end-3 lg:end-4 xl:end-[22px]"
                        /> */}
                        <div className="size-[60px] xl:size-[70px] bg-white rounded-full flex justify-center items-center">
                            <Image
                                src="/assets/images/svg/time-saved.svg"
                                alt="files-processed"
                                width={36}
                                height={36}
                                className="!min-h-9 relative z-10"
                            />
                        </div>
                        <Heading
                            variant="Tertiary"
                            className="xl:text-2xl text-white leading-100 mt-[26px]">
                            Time Saved
                        </Heading>
                        <Heading
                            variant="primary"
                            className="text-white xl:text-custom-8xxl mt-[15px] !font-extrabold">
                            955
                            <span className="text-base sm:text-lg lg:text-xl font-normal leading-100">
                                mintues
                            </span>
                        </Heading>
                    </div>
                </div>
            </div>
            {/* ===================== */}
            <div className='flex max-sm:flex-wrap items-center gap-6 mt-6'>
                <div className='border border-solid border-black py-4 px-5 rounded-xl w-full sm:w-6/12'>
                    <Heading
                        variant="Quaternary"
                        className="pb-2 md:pb-3.5  mb-3 border-b border-[#010101]/5 !text-off-black ">
                        Nomino Updates
                    </Heading>
                    <div className="overflow-y-auto scroll-none">
                        <div className='flex flex-col gap-3'>
                            {NOMINO_UPDATE_DATA_LIST.map((obj, i) => (
                                <div key={i} className='flex items-center gap-3'>
                                    <span className='size-[35px] border border-solid border-[#43C9F84D] rounded-full  flex justify-center items-center'>
                                        <Icons icon={obj.icon} />
                                    </span>
                                    <p className='font-normal text-sm leading-100 text-black'>{obj.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='border border-solid border-black py-4 px-5 rounded-xl w-full sm:w-6/12'>
                    <Heading
                        variant="Quaternary"
                        className="pb-2 md:pb-3.5  mb-3 border-b border-[#010101]/5 !text-off-black ">
                        Nomino Updates
                    </Heading>
                    <div className="overflow-y-auto scroll-none">
                        <div className='flex flex-col gap-3'>
                            {NOMINO_UPDATE_DATA_LIST.map((obj, i) => (
                                <div key={i} className='flex items-center gap-3'>
                                    <span className='size-[35px] border border-solid border-[#43C9F84D] rounded-full  flex justify-center items-center'>
                                        <Icons icon={obj.icon} />
                                    </span>
                                    <p className='font-normal text-sm leading-100 text-black'>{obj.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updates