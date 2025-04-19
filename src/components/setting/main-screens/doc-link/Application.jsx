import { APPLICATION_DATA_LIST } from "@/app/lib/helper";
import Heading from "@/components/common/ui/Heading";
import React, { useState } from "react";

const Applicant = () => {



    return (
        <div className="custom-md:max-w-[481px] w-full">
            <Heading variant="Tertiary" className="custom-md:pb-5 pb-3 !leading-166">
                Two Applicant Documents
            </Heading>
            <div className="custom-md:max-w-[481px] w-full border border-solid border-sky-blue border-opacity-15 rounded-xl  custom-md:py-4 custom-md:px-5 p-4 dark:bg-white/10">
                {APPLICATION_DATA_LIST.map((obj, index) => (
                    <div
                        key={index}
                        className={`leading-100 ${index !== APPLICATION_DATA_LIST.length - 1 ? "pb-[15px]" : "pb-0"
                            }`}
                    > {obj.label}
                        <input type="checkbox" />

                    </div>
                ))}
            </div>
        </div>
    );
};


export default Applicant;
