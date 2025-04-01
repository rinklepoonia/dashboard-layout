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
    // Navigation state
    activeComponent: 'home',
    setActiveComponent: (component) => set({ activeComponent: component }),

    // Chatbot state
    isChatbotOpen: false,
    setIsChatbotOpen: (bot) => set({ isChatbotOpen: bot }),

    // User details state
    userDetails: typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem('userDetails') || '{}')
        : {},
    setUserDetails: (details) =>
        set((state) => {
            const updatedDetails = { ...state.userDetails, ...details };
            if (typeof window !== "undefined") {
                localStorage.setItem('userDetails', JSON.stringify(updatedDetails));
            }
            return { userDetails: updatedDetails };
        }),
}));

export default useStore;