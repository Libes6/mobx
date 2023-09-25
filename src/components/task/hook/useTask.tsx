import { notification } from 'antd';
import { useState } from 'react';
interface IUseTaskProps {
    createTodo: (text: string) => void;
}
export const useTask = ({ createTodo }: IUseTaskProps) => {
    const [api, contextHolder] = notification.useNotification();
    const [textTask, setTextTask] = useState('');
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
