export interface CardProps{
    title: string
    content: string
}

export interface ButtonProps{
    label:string;
    size: 'small' | 'medium' | 'large'
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
    onClick?: () => void;
}

// PostProps interface:

export interface PostProps{
    userId: number;
    title: string;
    content: string;
}