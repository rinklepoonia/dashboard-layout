"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import FormatingTools from './formatting-tools/FormatingTools'
import DocuLink from './doc-link/DocuLink'
import Account from './account/Account'
import FileSense from './file-sense/FileSense'
import FileFlow from './file-flow/FIleFlow'

const MainScreens = () => {
    const SEETING_DATA_LIST = [
        {
            slug: "formating-tools",
            component: <FormatingTools />
        },
        {
            slug: "doc-link",
            component: <DocuLink />
        },
        {
            slug: "account",
            component: <Account />
        },
        {
            slug: "file-sense",
            component: <FileSense />
        },

        {
            slug: "file-flow",
            component: <FileFlow />
        },

    ]

    const pathName = usePathname()
    const slug = pathName.replace("/settings/", "");
    return (
        <div className='w-full overflow-y-auto'>
            {SEETING_DATA_LIST.map((obj, i) => obj.slug === slug && (
                <div key={i}>
                    {obj.component}
                </div>
            ))}
        </div>
    )
}

export default MainScreens