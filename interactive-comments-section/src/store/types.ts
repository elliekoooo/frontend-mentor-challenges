export type user = {
    image: {
        "png": string;
        "webp": string;
    };
    username: string;
}

export type comment = {
    id: number;
    cid: number;
    content: string;
    createdAt: string;
    score: number;
    user: user;
    replyingTo?: string;
    type: string;
};

export type button = {
    disabled?: boolean
    size?: number;
    color?: string;
    click?: any;
    type: string;
    text: string;
    hidden?: boolean
};