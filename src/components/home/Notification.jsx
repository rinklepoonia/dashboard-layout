import { NOTIFICATION_DATA_LIST } from "@/app/lib/helper";
import Image from "next/image";
import React from "react";
import Heading from "../common/ui/Heading";
import Icons from "../common/ui/Icons";


const Notification = () => {
  return (
    <>
      <div className="border border-solid border-black rounded-xl p-5 h-full overflow-y-scroll">
        <h2 className="font-medium text-xl leading-100 text-black pb-9">Notifications</h2>
        <div className="flex flex-col gap-[14px]">
          {NOTIFICATION_DATA_LIST.map((obj, i) => (
            <div key={i} className="flex gap-5 py-2">
              <Image
                src={obj.profile}
                alt="profile"
                sizes="100vw"
                width={38}
                height={38}
                className="rounded-full size-8 sm:size-[38px]"
              />
              <div>
                <Heading
                  variant="small"
                  className="line-clamp-1 !leading-100 !text-off-black flex items-center gap-1">
                  {obj.title}
                </Heading>
                <div className="flex gap-4 pt-0.5">
                  <div className="flex items-center gap-1">
                    <Icons
                      icon="calendarIcon"
                    />
                    <p className="text-light-grey-300 text-custom-xxs leading-166 text-secondary-light">
                      {obj.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons
                      icon="timeIcon"
                      className=""
                    />
                    <p className="text-light-grey-300 text-custom-xxs leading-166 text-secondary-light">
                      {obj.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
