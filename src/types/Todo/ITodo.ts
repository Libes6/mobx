interface ITodoRecord {
    id: number;
    text: string;
    created_at?: string;
}
export interface ITodoApi extends ITodoRecord {
    isCompleted: boolean;
    tag?: { text: string }[];
}
export interface ITagApi extends ITodoRecord {}
export interface ITodoAdd extends Pick<ITodoApi, 'text'> {
    tag: number[];
}
