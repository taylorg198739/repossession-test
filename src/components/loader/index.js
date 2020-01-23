import React from 'react';
import { LoaderWrapper } from './styles';

export const Loader = ({ loading, children }) => (
    <>
        {!loading && children}
        {loading && <LoaderWrapper>Loading...</LoaderWrapper>}  
    </>
);
