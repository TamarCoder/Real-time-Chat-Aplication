// stores/useChatStore.ts
import { create } from 'zustand';

interface Room {
    id: string;
    roomsName: string;
    description: string;
    privacy: 'private' | 'public' | 'invite';
    category: string;
    maxMembers: number;
    selectedEmoji: string;
    selectedColor: string;
    members: string[];
    createdAt: Date;
}

interface ChatStore {
    rooms: Room[];
    activeRoomId: string | null;
    createRoom: (roomData: Omit<Room, 'id' | 'members' | 'createdAt'>) => void;
    setActiveRoom: (roomId: string) => void;
    leaveRoom: (roomId: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
    rooms: [],
    activeRoomId: null,

    createRoom: (roomData) => set((state) => {
        const newRoom: Room = {
            ...roomData,
            privacy: roomData.privacy as 'private' | 'public' | 'invite',
            id: Date.now().toString(),
            members: [],
            createdAt: new Date()
        };
        return {
            rooms: [...state.rooms, newRoom],
            activeRoomId: newRoom.id
        };
    }),

    setActiveRoom: (roomId) => set({ activeRoomId: roomId }),

    leaveRoom: (roomId) => set((state) => ({
        rooms: state.rooms.filter(room => room.id !== roomId)
    }))
}));

export default useChatStore;