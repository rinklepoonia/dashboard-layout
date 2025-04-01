import { create } from "zustand";

const useStore = create((set) => ({
    // Navigation state
    activeComponent: 'home',
    setActiveComponent: (component) => set({ activeComponent: component }),

    // Chatbot state
    isChatbotOpen: false,
    setIsChatbotOpen: (bot) => set({ isChatbotOpen: bot }),
}));

export default useStore;