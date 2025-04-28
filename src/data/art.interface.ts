import type {Ref} from "vue";

export interface ArtPiece {
    id: string | number;
    image: string;
    title: string;
    desc: string;
    date: string;
    tags: string;
    medium: string;
    isActive: boolean;
}