import { FC } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';
import { clsMix } from '../../../../../lib/clsx/Clsx.ts';

interface ITaskSearchProps extends SearchProps {}

export const TaskSearch: FC<ITaskSearchProps> = props => {
    return (
        <div className={clsMix('input-wrapper', {}, [])}>
            <Input.Search {...props} />
        </div>
    );
};
