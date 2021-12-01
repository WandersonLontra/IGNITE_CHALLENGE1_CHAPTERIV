import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#1D1D1D',
            '600': '#47585B',
            '500': '#999999',
            '450': '#99999980',
            '300': '#DADADA',
            '100': '#F5F8FA',
        },
        yellow: {
            '500': '#FFBA08',
            '450': '#ffba0880',
        }
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 600
    },
    fonts: {
        body: 'poppins',
        heading: 'poppins', 
    },
    styles: {
        global: {
            body: {
                bg: '#FFFFFF',
                color: 'gray.600'
            }
        }
    }
});