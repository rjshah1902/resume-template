
import { Poppins } from '@next/font/google';
import { Raleway } from '@next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default poppins;


const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export { raleway };