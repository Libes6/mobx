import { notification } from 'antd';
import { useEffect, useState } from 'react';
import uiTag from '../../../store/uiTag.tsx';
interface IUseTaskProps {
    createTodo: (text: string) => void;
    loadTodo: () => void;
}
export const useTask = ({ createTodo, loadTodo }: IUseTaskProps) => {
    const [api, contextHolder] = notification.useNotification();
    const [textTask, setTextTask] = useState('');
    const { totalUiTag } = uiTag;
    console.log(totalUiTag);
    useEffect(() => {
        loadTodo();
    }, []);
    const openNotificationSuccess = (message: string) => {
        api.success({
            message: `Notification`,
            description: message,
        });
    };
    const openNotificationError = (message: string) => {
        api.error({
            message: `Notification`,
            description: message,
        });
    };
    const handleCreate = () => {
        if (textTask !== '') {
            createTodo(textTask);
            openNotificationSuccess('Успешно');
        } else {
            openNotificationError('Нельзя создать пустую задачу');
        }
        setTextTask('');
    };

    return { textTask, setTextTask, contextHolder, handleCreate };
};
