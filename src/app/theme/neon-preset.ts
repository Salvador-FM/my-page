import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const NeonPreset = definePreset(Aura, {
    primitive: {
        borderRadius: {
            none: '0',
            xs: '4px',
            sm: '6px',
            md: '10px',
            lg: '14px',
            xl: '20px'
        }
    },

    semantic: {
        primary: {
            50: '#ecffef',
            100: '#c8ffd1',
            200: '#9effaa',
            300: '#6bff7a',
            400: '#39ff14',
            500: '#2adf10',
            600: '#1fb50c',
            700: '#178c09',
            800: '#0f6306',
            900: '#083b03'
        },

        colorScheme: {
            dark: {
                surface: {
                    0: '#0a0a0a',
                    50: '#111111',
                    100: '#181818',
                    200: '#1f1f1f',
                    300: '#262626',
                    400: '#2d2d2d',
                    500: '#343434',
                    600: '#3b3b3b',
                    700: '#424242',
                    800: '#494949',
                    900: '#505050'
                },

                primary: {
                    color: '#39ff14',
                    contrastColor: '#000000',
                    hoverColor: '#6bff7a',
                    activeColor: '#2adf10'
                },

                highlight: {
                    background: '#39ff1420',
                    focusBackground: '#39ff1430',
                    color: '#39ff14',
                    focusColor: '#39ff14'
                }
            }
        }
    },

    components: {
        button: {
            root: {
                borderRadius: '10px'
            }
        },

        card: {
            root: {
                background: '#222222'
            }
        },

        inputtext: {
            root: {
                background: '#0f0f0f',
                borderColor: '#262626',
                color: '#39ff14'
            }
        }
    }
});