import RegisterForm from '@components/RegisterForm';
import LogInForm from '@components/LogInForm';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Button } from '@mui/material';
import { useState } from 'react';

type Actions = 'login' | 'register' | null;

function Account() {
    const [action, setAction] = useState<Actions>(null);
    const [hideSelection, setHideSelection] = useState(false);

    const setActionHandler = (action: Actions) => () => {
        setAction(action);
        setHideSelection(true);
    };

    return (
        <div className="h-[100dvh] w-[100dvw] pt-10">
            <StyledEngineProvider enableCssLayer>
                <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
                <main className="mx-auto flex w-fit flex-col items-center gap-4 rounded-lg bg-white px-20 py-4">
                    <ProfilePic />
                    {action === 'login' && <LogInForm />}
                    {action === 'register' && <RegisterForm />}
                    <Button
                        className={hideSelection ? 'hidden' : 'bg-accent w-fit'}
                        variant="contained"
                        disableElevation
                        onClick={setActionHandler('login')}
                    >
                        Log in
                    </Button>
                    <Button
                        className={hideSelection ? 'hidden' : 'bg-accent w-fit'}
                        variant="contained"
                        disableElevation
                        onClick={setActionHandler('register')}
                    >
                        Register
                    </Button>
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
                    <rect className="fill-accent" width="192" height="192" rx="96" />
                    <rect className="fill-white" width="192" height="192" rx="96" />
                    {/* prettier-ignore */}
                    <path className='stroke-accent' d="M120 142L110 129.25V52.75C110 45.6036 114.395 40 120 40C125.605 40 130 45.6036 130 52.75V129.25L120 142ZM120 142H55C52.3478 142 49.8043 140.657 47.9289 138.266C46.0536 135.875 45 132.632 45 129.25C45 125.868 46.0536 122.625 47.9289 120.234C49.8043 117.843 52.3478 116.5 55 116.5H75C77.6522 116.5 80.1957 115.157 82.0711 112.766C83.9464 110.375 85 107.132 85 103.75C85 100.368 83.9464 97.1255 82.0711 94.7344C80.1957 92.3433 77.6522 91 75 91H60M110 65.5H130" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <rect className="stroke-accent" x="2" y="2" width="188" height="188" rx="94" strokeWidth="4" />
            </g>
            <defs>
                <clipPath id="clip0_47_48645">
                    <rect width="192" height="192" rx="96" fill="white" />
                </clipPath>
                <clipPath id="clip1_47_48645">
                    <rect width="192" height="192" rx="96" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
