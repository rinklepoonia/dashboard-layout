import { create } from "zustand";

const useStore = create((set) => ({
    // Navigation state
    activeComponent: 'home',
    setActiveComponent: (component) => set({ activeComponent: component }),

    // Chatbot state
    isChatbotOpen: false,
    setIsChatbotOpen: (bot) => set({ isChatbotOpen: bot }),

    // Image URL state
    imageUrl: null,
    setImageUrl: (url) => set({ imageUrl: url }),

    getImageFromLocalStorage: () => {
        if (typeof window !== 'undefined') {
            const savedImage = localStorage.getItem('uploadedImage');
            if (savedImage) {
                set({ imageUrl: savedImage });
            }
        }
    },

}));

export default useStore;