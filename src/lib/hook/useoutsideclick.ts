import {
    Dispatch,
    RefObject,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react';

type TypeOut = {
    ref: RefObject<HTMLElement>;
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const useOutside = (initialVisible: boolean): TypeOut => {
    const [isShow, setIsShow] = useState(initialVisible);
    const ref = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (
            ref.current &&
            !ref.current.contains(event.target as Node)
        ) {
            setIsShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
    }, []);
    return { ref, isShow, setIsShow };
};
