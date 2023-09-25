interface ITodoRecord {
    id: number;
    text: string;
    created_at?: string;
}
export interface ITodoApi extends ITodoRecord {
    isCompleted: boolean;
    tag?: [];
}
export interface ITagApi extends ITodoRecord {}
export interface ITodoAdd extends Pick<ITodoApi, 'text'> {}
