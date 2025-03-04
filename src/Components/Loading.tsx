'use client';
import React, { useEffect } from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import * as NProgress from 'nprogress';

const Loading = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        NProgress.start();
        return () => {
            NProgress.done();
        };
    }, []);

    return (
        <>
            {children}
            <Next13ProgressBar
                height="2px"
                color="#1c1917"
                options={{
                    showSpinner: true,
                }}
                showOnShallow
            />
        </>
    );
};

export default Loading;
