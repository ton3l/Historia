import { Button, TextField as MUITextField } from '@mui/material';
import { StyledEngineProvider, styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';


function Account() {
    return (
        <div className="h-[100dvh] w-[100dvw] pt-10">
            <StyledEngineProvider enableCssLayer>
                <GlobalStyles styles='@layer theme, base, mui, components, utilities;' />
                <main className="flex flex-col w-fit mx-auto gap-4 rounded-lg bg-white items-center justify-center py-8 px-20">
                    <ProfilePic />
                    <TextField className='w-80' variant='outlined' label="Username" />
                    <TextField className='w-80' id="outlined-basic" label="Password" variant="outlined"  type='password' />
                    <GoogleButton />
                    <Button className='bg-accent' variant='contained'>Log in</Button>
                </main>
            </StyledEngineProvider>
        </div>
    );
}

export default Account;

function ProfilePic() {
    return (
        <svg width="174" height="174" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_47_48645)">
                <g clipPath="url(#clip1_47_48645)">
                    <rect className="fill-accent" width="192" height="192" rx="96"/>
                    <rect className="fill-white" width="192" height="192" rx="96"/>
                    <path className='stroke-accent' d="M120 142L110 129.25V52.75C110 45.6036 114.395 40 120 40C125.605 40 130 45.6036 130 52.75V129.25L120 142ZM120 142H55C52.3478 142 49.8043 140.657 47.9289 138.266C46.0536 135.875 45 132.632 45 129.25C45 125.868 46.0536 122.625 47.9289 120.234C49.8043 117.843 52.3478 116.5 55 116.5H75C77.6522 116.5 80.1957 115.157 82.0711 112.766C83.9464 110.375 85 107.132 85 103.75C85 100.368 83.9464 97.1255 82.0711 94.7344C80.1957 92.3433 77.6522 91 75 91H60M110 65.5H130" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <rect className='stroke-accent' x="2" y="2" width="188" height="188" rx="94" strokeWidth="4"/>
            </g>
            <defs>
                <clipPath id="clip0_47_48645">
                    <rect width="192" height="192" rx="96" fill="white"/>
                </clipPath>
                <clipPath id="clip1_47_48645">
                    <rect width="192" height="192" rx="96" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}

function GoogleButton() {
    return (
        <div className='bg-linear-to-r from-red-700 via-yellow-300 via-green-500 to-blue-700 p-0.5 rounded-md'>
            <div className='bg-white rounded-sm'>
                <button className='cursor-pointer bg-clip-text bg-gray-900 rounded-md p-2 flex items-center gap-2 text-transparent transition hover:bg-linear-to-r hover:from-red-700 hover:via-yellow-600 hover:via-green-700  hover:to-blue-700 font-semibold'>
                    <svg width="16px" height="16px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                    </svg>
                    Continue with Google
                </button>
            </div>
        </div>
    );
}

const TextField = styled(MUITextField)`
    & label.Mui-focused {
        color: var(--accent);
    }
    & .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
            border-color: var(--accent);
        }
    }
`;