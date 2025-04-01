"use client";

import useStore from "@/store/useStore";
;


const BotNav = () => {
    const { setIsChatbotOpen } = useStore();

    return (
        <div id="bot-nav" className="max-w-[451px] min-h-16">
            <div className="bg-primary-gradient flex items-center justify-between py-2 px-[30px] rounded-t-[22px]">
                <div className="flex items-center gap-[9px]">
                    <h5 className="font-bold sm:text-2xl text-lg leading-100 text-white">
                        Nomino
                    </h5>
                </div>
                <button title="close chat bot" onClick={() => setIsChatbotOpen(false)}>
                    <Icons icon="alertClose" />
                </button>
            </div>
        </div>
    );
};

export default BotNav;
