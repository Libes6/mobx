export interface IUseTaskProps {
    createTodo: (data: { text: string; tag: number[] }) => void;
    loadTodo: (search: string) => void;
}
