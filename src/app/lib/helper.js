export const DASHBOARD_ICON_DATA_LIST = [
    { icon: "homeIcon", label: "Home", path: "/" },
    { icon: "fileSenseIcon", label: "FileSense", path: "/file-sense" },
    { icon: "docLink", label: "DocuLink", path: "/doc-link" },
    { icon: "fileTune", label: "FileTune", path: "/file-tune" },
    { icon: "fileStruct", label: "FileStruct", path: "/file-struct" },
    { icon: "contacts", label: "Contacts", path: "/contact-list" },
    {
        icon: "setting",
        label: "Settings",
        path: "/settings/account",
    },
]

export const SETTING_DATA_LIST = [
    { icon: "accountSetting", label: "Account Settings", url: "account" },
    { icon: "fileSense", label: "FileSense", url: "file-sense" },
    { icon: "fileFlow", label: "FileFlow", url: "file-flow" },
    { icon: "docuLink", label: "DocuLink", url: "doc-link" },
    { icon: "docuLink", label: "Formating-Tools", url: "formating-tools" },
]
export const NOMINO_UPDATE_DATA_LIST = [
    { icon: "versionReleased", label: "Version 2.12 Released" },
    { icon: "versionReleased", label: "Nomino implements File Compression Tool" },
    { icon: "versionReleased", label: "25% Boxing Day Discount" },
    { icon: "versionReleased", label: "Version 2.11 Released" },
    { icon: "versionReleased", label: "Nomino implements File Conversion Tools" },
]
export const NOTIFICATION_DATA_LIST = [
    {
        profile: "/assets/images/png/nick-profile.png",
        title: "Shelby Kliff has uploaded supporting documents",
        date: "01 Jan, 2025",
        time: "04:10 PM"
    },
    {
        profile: "/assets/images/png/nick-profile.png",
        title: "Shelby Kliff has uploaded supporting documents",
        date: "01 Jan, 2025",
        time: "04:10 PM"
    },
    {
        profile: "/assets/images/png/nick-profile.png",
        title: "Shelby Kliff has uploaded supporting documents",
        date: "01 Jan, 2025",
        time: "04:10 PM"
    },
    {
        profile: "/assets/images/png/nick-profile.png",
        title: "Shelby Kliff has uploaded supporting documents",
        date: "01 Jan, 2025",
        time: "04:10 PM"
    },
]
export const DATA_FORMATE_LIST = [
    { label: "5.12.2025", byDefault: false },
    { label: "05-12-2025", byDefault: false },
    { label: "5.12.2025", byDefault: false },
    { label: "5 Dec 2025", byDefault: false },
    { label: "05 Dec 25", byDefault: false },
    { label: "5th December 2025", byDefault: false },
    { label: "05.12.2025", byDefault: true }, // Default checkbox
];
export const FILE_COMPRESSION_DATA_LIST = [
    {
        label: "Compress if file exceeds:",
        ctaText: "50MB",
    },
    {
        label: "Compression Level",
        ctaText: "4",
    },
];
export const APPLICATION_DATA_LIST = [
    { label: "Initials", byDefault: false },
    { label: "One Name", byDefault: false },
    { label: "First Names", byDefault: false },
    { label: "Last Names", byDefault: false },
    { label: "Both Names", byDefault: true }, // Default selected
];