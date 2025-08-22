import { useState } from "react";

// ტიპები
export interface RoomFormData {
    roomsName: string;
    description: string;
    privacy: string;
    category: string;
    maxMembers: number;
    selectedEmoji: string;
    selectedColor: string;
}

// კონსტანტები
export const ROOM_CONSTANTS = {
    emojis: ['💬', '⚛️', '🎨', '💼', '🍕', '🎯', '🚀'],
    colors: ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'],
    categories: ['General', 'Study', 'Developers', 'Design', 'Tech'],
    defaultValues: {
        roomsName: '',
        description: '',
        privacy: 'public',
        category: 'General',
        maxMembers: 50,
        selectedEmoji: '💬',
        selectedColor: '#6366f1'
    }
};

// Custom Hook
export const useRoomForm = () => {
    const [roomsName, setRoomsName] = useState(ROOM_CONSTANTS.defaultValues.roomsName);
    const [description, setDescription] = useState(ROOM_CONSTANTS.defaultValues.description);
    const [privacy, setPrivacy] = useState(ROOM_CONSTANTS.defaultValues.privacy);
    const [category, setCategory] = useState(ROOM_CONSTANTS.defaultValues.category);
    const [maxMembers, setMaxMembers] = useState(ROOM_CONSTANTS.defaultValues.maxMembers);
    const [selectedEmoji, setSelectedEmoji] = useState(ROOM_CONSTANTS.defaultValues.selectedEmoji);
    const [selectedColor, setSelectedColor] = useState(ROOM_CONSTANTS.defaultValues.selectedColor);

    // Form validation
    const isFormValid = () => {
        return roomsName.trim().length > 0;
    };

    // Reset form
    const resetForm = () => {
        setRoomsName(ROOM_CONSTANTS.defaultValues.roomsName);
        setDescription(ROOM_CONSTANTS.defaultValues.description);
        setPrivacy(ROOM_CONSTANTS.defaultValues.privacy);
        setCategory(ROOM_CONSTANTS.defaultValues.category);
        setMaxMembers(ROOM_CONSTANTS.defaultValues.maxMembers);
        setSelectedEmoji(ROOM_CONSTANTS.defaultValues.selectedEmoji);
        setSelectedColor(ROOM_CONSTANTS.defaultValues.selectedColor);
    };

    // Get form data
    const getFormData = (): RoomFormData => ({
        roomsName,
        description,
        privacy,
        category,
        maxMembers,
        selectedEmoji,
        selectedColor
    });

    // Return state-ები და functions
    return {
        // State values
        roomsName,
        description,
        privacy,
        category,
        maxMembers,
        selectedEmoji,
        selectedColor,

        // Setters
        setRoomsName,
        setDescription,
        setPrivacy,
        setCategory,
        setMaxMembers,
        setSelectedEmoji,
        setSelectedColor,

        // Helper functions
        isFormValid,
        resetForm,
        getFormData,

        // Constants
        emojis: ROOM_CONSTANTS.emojis,
        colors: ROOM_CONSTANTS.colors,
        categories: ROOM_CONSTANTS.categories
    };
};