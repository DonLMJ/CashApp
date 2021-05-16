import img1 from '../../images/svg-1.svg';
import img2 from '../../images/svg-2.svg';
import img3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited access',
    description: 'Login at your account at any time.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: img1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: img2,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'SIGN UP',
    headline: 'Creating an account is easy',
    description: 'Get everything set up and ready in few minutes.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: img3,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: true
};
