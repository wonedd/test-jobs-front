import { css, Global } from '@emotion/react';

export const media = {
    maxMobile: '@media(max-width:800px)',
    minlaptop: '@media(min-width: 800px)',
};

export const globalStyles = (
    <Global
        styles={css`
            * {
                margin: 0;
                padding: 0;
                outline: 0;
                box-sizing: border-box;
            }
            html {
                scroll-behavior: smooth;
            }
            @media (max-width: 1080px) {
                html {
                    font-size: 93.75%;
                }
            }
            @media (max-width: 720px) {
                html {
                    font-size: 87.5%;
                }
            }

            body {
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                overflow-x: hidden;
                padding-bottom: 32px;
            }

            body,
            input,
            button {
                font-size: 14px;
                font-family: 'Poppins', sans-serif;
            }
            button {
                cursor: pointer;
            }
            body::-webkit-scrollbar {
                width: 4px;
            }

            body::-webkit-scrollbar-track {
                background: #000;
            }

            body::-webkit-scrollbar-thumb {
                background-color: #000;
                border-radius: 20px;
            }

            @keyframes loading {
                to {
                    transform: rotate(1turn);
                }
            }
        `}
    />
);
