// იუზერის სამი როლი მაქვს


export type UserRole = 'admin' | 'moderator' | 'member';


//შევქმენი მკაცრი კონსტანტების ობიექტი, რომელიც არ შეიცვლება
export const USER_ROLES = {
    ADMIN: 'admin' as const,
    MODERATIR: 'moderator' as const,
    MEMBER: 'member' as const,
} as const;

// შევქმნათ მკაცრი  უფლებების  სია

export const ROLE_PERMISSIONS = {
    admin: {
        annousmentText: true,
        canDeleteRoom: true,
        cantEditRoom: true,
        canBanUser: true,
        canInviteUser: true,
        canDeleteMessage: true,
        canPinMessage: true
    },
    moderator: {
        annousmentText: true,
        canDeleteRoom: false,
        cantEditRoom: true,
        canBanUser: true,
        canInviteUser: true,
        canDeleteMessage: true,
        canPinMessage: true
    },
    member: {
        annousmentText: false,
        canDeleteRoom: false,
        cantEditRoom: false,
        canBanUser: false,
        canInviteUser: false,
        canDeleteMessage: false,
        canPinMessage: false
    }
} as const;

// როგრო უნდა გამოიყურებოდეს  როლების  ფიჩერები

export const ROLE_INFO = {
    admin: {
        label: 'Admin',
        color: '#ef4444',
        icon: '👑',
    },
    moderator: {
        label: 'Moderator',
        color: '#f59e0b', // amber-500
        icon: '🛡️',

    },
    member: {
        label: 'Member',
        color: '#10b981', // emerald-500
        icon: '👤',
        description: 'Regular room member'
    },
} as const;

// დამხმარე ფუნქციები

// Helper functions
export const hasPermission =
    (role: UserRole, permission: keyof typeof ROLE_PERMISSIONS.admin): boolean => {
    return ROLE_PERMISSIONS[role][permission];
};

