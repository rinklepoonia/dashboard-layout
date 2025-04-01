import { create } from "zustand";
// import {
//     DEFAULT_GRADIENT_BACKGROUND,
//     DEFAULT_USER_DETAILS,
//     LOCAL_STORAGE_KEY,
// } from "@/utils/defaults";

// const loadUserDetails = () => {
//     if (typeof window !== "undefined") {
//         const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
//         return storedUser ? JSON.parse(storedUser) : DEFAULT_USER_DETAILS;
//     }
//     return DEFAULT_USER_DETAILS;
// };

const useStore = create((set) => ({
    isChatbotOpen: false,
    setIsChatbotOpen: (bot) => set({ isChatbotOpen: bot }),

    userDetails: loadUserDetails(),
    setUserDetails: (details) =>
        set((state) => {
            const updatedDetails = { ...state.userDetails, ...details };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedDetails));
            return { userDetails: updatedDetails };
        }),
}));

export default useStore;