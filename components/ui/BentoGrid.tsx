'use client'
import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "LinkedIn",
        designation: "Fikri Zaki Aditama",
        image:
            "/linkedin_logo.png",
        ref: "https://www.linkedin.com/in/fikri-zaki-aditama-231860176/",
    },
    {
        id: 2,
        name: "Instagram",
        designation: "fikriymnn",
        image:
            "/ig_logo.png",
        ref: "https://www.instagram.com/fikriymnn/",
    },
    {
        id: 3,
        name: "Facebook",
        designation: "Fikri Zaki Aditama",
        image:
            "/fb_logo.png",
        ref: "https://www.facebook.com/fikrizakii/",
    },

];

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img: string;
    imgClassName: string;
    titleClassName: string;
    spareImg: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('fikriyomann@gmail.com');

        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1)0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover, object-center')}
                        />
                    )}
                </div>
                <div className={`absolute  right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover, object-center w-full h-full'}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>


                    {id === 2 && <GlobeDemo />}

                    {id === 3 && (
                        <div className=" flex w-fit absolute -right-0.5 pr-20">
                            <div className="flex lg:py-16 gap-1">
                                <AnimatedTooltip items={people} />
                            </div>
                        </div>
                    )}

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy my email'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses="bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
