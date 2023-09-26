import { notification } from 'antd';
import { useEffect, useState } from 'react';
import uiTag from '../../../store/uiTag.tsx';
import { IUseTaskProps } from '../interface/Itask.ts';

export const useTask = ({ createTodo, loadTodo }: IUseTaskProps) => {
    const [api, contextHolder] = notification.useNotification();
    const [textTask, setTextTask] = useState('');
    const [search, setSearch] = useState('');
    const { totalUiTag, clearTag } = uiTag;
    useEffect(() => {
        loadTodo(search);
    }, [search]);
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
            createTodo({ text: textTask, tag: totalUiTag });
            openNotificationSuccess('Успешно');
            clearTag();
        } else {
            openNotificationError('Нельзя создать пустую задачу');
        }
        setTextTask('');
    };
    const handleSearch = (search: string) => {
        setSearch(search);
    };

    const onChangeSearch = () => {};

    return {
        textTask,
        contextHolder,
        setTextTask,
        handleCreate,
        onChangeSearch,
        handleSearch,
    };
};
