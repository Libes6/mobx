import { FC } from 'react';
import { useTaskTagInput } from '../hook/useTaskTagInput.ts';
import { Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface ITaskTagInputProps {}

export const TaskTagInput: FC<ITaskTagInputProps> = () => {
    const {
        textEdit,
        ref,
        isShow,
        setIsShow,
        handleTextEdit,
        handleKeyUp,
    } = useTaskTagInput();

    const renderInput = () => {
        if (isShow) {
            return (
                <Input
                    value={textEdit}
                    onChange={event =>
                        handleTextEdit(event.target.value)
                    }
                    className='tag-input'
                    onKeyUp={event => handleKeyUp(event)}
                />
            );
        }
        return <PlusOutlined className='icon-action' size={104} />;
    };

    return (
        <div
            ref={ref}
            className='tag-input'
            onClick={() => setIsShow(true)}
        >
            {renderInput()}
        </div>
    );
};
