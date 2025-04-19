import React from "react";
import DateFormat from "./DateFormat";
import Heading from "@/components/common/ui/Heading";

const FormatingTools = () => {
  return (
    <div className="bg-white  overflow-y-auto w-full p-5 md:p-[30px]">
      <Heading
        variant="Tertiary"
        className="custom-md:pb-6 sm:pb-5 pb-4 !leading-166">
        Formatting Tools
      </Heading>
      <div className="flex max-xl:flex-wrap custom-md:gap-[26px] gap-5">
        <DateFormat />
        <DateFormat />
      </div>
      <div className="flex gap-[26px] custom-md:mt-6 mt-5 flex-wrap">
        <DateFormat />
        <DateFormat />
      </div>
    </div>
  );
};

export default FormatingTools;
