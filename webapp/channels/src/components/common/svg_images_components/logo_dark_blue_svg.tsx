// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

type Props = {
    width?: number;
    height?: number;
    className?: string;
}

const Svg = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export default (props: Props) => (
    <Svg
        className={props.className}
        width={props.width ? props.width.toString() : '182'}
        height={props.height ? props.height.toString() : '30'}
        viewBox='0 0 182 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        role='img'
        aria-label='The Alley'
    >
        {/* Tennis ball icon */}
        <circle cx='15' cy='15' r='13' fill='#C8E84E' stroke='#1E325C' strokeWidth='1.5'/>
        <path
            d='M8 3.5C10.5 10 10.5 20 8 26.5'
            fill='none'
            stroke='#1E325C'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        <path
            d='M22 3.5C19.5 10 19.5 20 22 26.5'
            fill='none'
            stroke='#1E325C'
            strokeWidth='1.5'
            strokeLinecap='round'
        />
        {/* "The Alley" text */}
        <text
            x='34'
            y='21'
            fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
            fontSize='18'
            fontWeight='700'
            fill='#1E325C'
            letterSpacing='-0.5'
        >
            {'The Alley'}
        </text>
    </Svg>
);
