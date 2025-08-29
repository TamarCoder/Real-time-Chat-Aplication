// იუზერის სამი როლი
export type UserRole = 'admin' | 'moderator' | 'member';

// შევქმენი მკაცრი კონსტანტების ობიექტი, რომელიც არ შეიცვლება
export const USER_ROLES = {
    ADMIN: 'admin' as const,
    MODERATOR: 'moderator' as const, // 🔧 გავასწორე: MODERATIR → MODERATOR
    MEMBER: 'member' as const,
} as const;

// ფერმიშენების ტიპები უკეთესი type safety-სთვის
export interface Permission {
    announcementText: boolean;
    canDeleteRoom: boolean;
    canEditRoom: boolean;
    canBanUser: boolean;
    canInviteUser: boolean;
    canDeleteMessage: boolean;
    canPinMessage: boolean;
}

// შევქმნათ მკაცრი უფლებების სია
export const ROLE_PERMISSIONS: Record<UserRole, Permission> = {
    admin: {
        announcementText: true,
        canDeleteRoom: true,
        canEditRoom: true,
        canBanUser: true,
        canInviteUser: true,
        canDeleteMessage: true,
        canPinMessage: true
    },
    moderator: {
        announcementText: true,
        canDeleteRoom: false,
        canEditRoom: true,
        canBanUser: true,
        canInviteUser: true,
        canDeleteMessage: true,
        canPinMessage: true
    },
    member: {
        announcementText: false,
        canDeleteRoom: false,
        canEditRoom: false,
        canBanUser: false,
        canInviteUser: false,
        canDeleteMessage: false,
        canPinMessage: false
    }
} as const;

// როლების ვიზუალური ინფორმაცია
export interface RoleInfo {
    label: string;
    color: string;
    icon: string;
    description?: string;
}

export const ROLE_INFO: Record<UserRole, RoleInfo> = {
    admin: {
        label: 'Admin',
        color: '#ef4444',
        icon: '👑',
        description: 'Full system access'
    },
    moderator: {
        label: 'Moderator',
        color: '#f59e0b',
        icon: '🛡️',
        description: 'Room management permissions'
    },
    member: {
        label: 'Member',
        color: '#10b981',
        icon: '👤',
        description: 'Regular room member'
    },
} as const;

// დამხმარე ფუნქციები

// უფლების შემოწმება
export const hasPermission = (
    role: UserRole,
    permission: keyof Permission
): boolean => {
    return ROLE_PERMISSIONS[role][permission];
};

// როლის ინფორმაციის მიღება
export const getRoleInfo = (role: UserRole): RoleInfo => {
    return ROLE_INFO[role];
};

// როლის შედარება (hierachy-სთვის)
export const isRoleHigherThan = (roleA: UserRole, roleB: UserRole): boolean => {
    const hierarchy = { admin: 3, moderator: 2, member: 1 };
    return hierarchy[roleA] > hierarchy[roleB];
};

// მომხმარებლის ყველა უფლების მიღება
export const getAllPermissions = (role: UserRole): Permission => {
    return ROLE_PERMISSIONS[role];
};

// კონკრეტული action-ისთვის ნებართვის შემოწმება
export const canUserPerformAction = (
    userRole: UserRole,
    targetRole: UserRole,
    action: keyof Permission
): boolean => {
    // თავად action-ს შეძლებს?
    const hasActionPermission = hasPermission(userRole, action);

    // თუ admin-ია, ყველაფერი შეუძლია
    if (userRole === 'admin') return hasActionPermission;

    // moderator-ს არ შეუძლია admin-ზე action
    if (userRole === 'moderator' && targetRole === 'admin') return false;

    return hasActionPermission;
};
