import { Button } from '@heroui/react';
import React, { useTransition } from 'react';

const LoadingButton = () => {
    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(() => {
           setTimeout(()=>{} , 500)
        });
    };

    return (
        <>
            <Button
                className={'bg-[#35858E] w-full'}
                isLoading={isPending}
                onPress={handleClick}
            >
                Book Now
            </Button>
        </>
    );
};

export default LoadingButton;