'use client';
import React, { useEffect } from 'react'
import Heading from './common/ui/Heading'
import Image from 'next/image'
import Icons from './common/ui/Icons'
import useStore from '@/store/useStore';

const Navigation = () => {
    const { imageUrl, setImageUrl } = useStore();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64 = reader.result;
                setImageUrl(base64); // Save to Zustand
                localStorage.setItem('uploadedImage', base64); // Save to localStorage
            };

            reader.readAsDataURL(file); // Convert to base64
        }
    };

    useEffect(() => {
        const saved = localStorage.getItem('uploadedImage');
        if (saved) {
            setImageUrl(saved);
        }
    }, [setImageUrl]);
    return (
        <div className='py-5'>
            <div className='flex items-center justify-between'>
                <Heading variant='secondary'>Hello Nick 👋🏼</Heading>
                <div className='flex items-center gap-3.5'>
                    <div className='max-md:hidden border border-solid border-[#C9CFDB] rounded-full py-3 px-4 flex items-center gap-2.5'>
                        <Icons icon="searchIcon" />
                        <input type='search' className='outline-none text-[#9197A6]' placeholder='Search here...' />
                    </div>
                    <div className='relative'>
                        <div className="bg-[#F7790B] absolute top-0.5 lg:top-[3px] end-0.5 lg:end-[3px] size-1.5 min-w-1.5 rounded-full shadow-[0px_1px_4px_0px_#F7790B]"></div>
                        <Image
                            src="/assets/images/svg/notification.svg"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="rounded-full size-8 lg:size-10"
                        />
                    </div>
                    <div className='border-3 border-solid border-white shadow-black-profile rounded-full'>
                            <input type="file" accept="image/*" onChange={handleImageUpload} id="profile-upload"
                                className="hidden"
                            />
                            <label htmlFor="profile-upload" className="block w-full h-full">
                                {imageUrl ? (
                                    <Image
                                        width={40}
                                        height={40}
                                        src={imageUrl}
                                        alt="Uploaded Preview"
                                        className="rounded-full size-8 lg:size-10"
                                    />
                                ) : (
                                    <Image
                                        src="/assets/images/png/nick-profile.png"
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        sizes='100vw'
                                        className="rounded-full size-8 lg:size-10 "
                                    />
                                )
                                }
                            </label>
                    </div>
                    <div className='sm:flex hidden flex-col'>
                        <p className='font-normal text-sm leading-normal text-[#030712]'>Nick</p>
                        <p className='font-normal text-xs leading-160 text-[#2B3138]'>Mortgage Broker</p>
                    </div>
                    <Icons icon="bottomDropArrow" />
                </div>
            </div>
        </div>
    )
}

export default Navigation