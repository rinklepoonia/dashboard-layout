"use client";
import { DATA_FORMATE_LIST } from "@/app/lib/helper";
import Heading from "@/components/common/ui/Heading";

const DateFormat = () => {

  return (
    <div className="w-full custom-2xl:max-w-[481px]">
      <Heading className="!leading-166 custom-md:pb-5 pb-3" variant="Tertiary">
        Date Format
      </Heading>
      <div className="border border-solid border-sky-blue dark:bg-white/10 border-opacity-15 rounded-xl custom-md:pt-5 custom-md:pb-4 custom-md:ps-5 custom-md:pe-6 p-4 xl:max-w-[481px] custom-2xl:min-h-[226px]">
        <div className="grid md:grid-cols-2  items-center justify-between custom-2xl:gap-x-[98px] gap-0">
          {DATA_FORMATE_LIST.map((format, index) => (
            <div
              key={index}
              className={`leading-100 flex gap-2 mt-3 }`}
            >
              <p
                className="text-nowrap"
              >
                {format.label}
              </p>
              <input type="checkbox"/>
            </div>
          ))}
        </div>
        <p className="font-normal text-sm leading-none text-off-black opacity-30 dark:text-secondary-dark text-secondary-light dark:opacity-50 pt-5">
          These characters cannot be used for formatting or renaming: / \ : * ? &quot; |
        </p>
      </div>
    </div>
  );
};

export default DateFormat;