import { Button, TextField } from '@mui/material';

function Account() {
    return (
        <div className="flex h-[100dvh] w-[100dvw] items-center justify-center">
            <main className="flex flex-col gap-4 rounded-md bg-white items-center justify-center p-8">
                <svg width="174" height="174" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_47_48645)">
                        <g clip-path="url(#clip1_47_48645)">
                            <rect className="fill-accent" width="192" height="192" rx="96"/>
                            <rect className="fill-white" width="192" height="192" rx="96"/>
                            <path className='stroke-accent' d="M120 142L110 129.25V52.75C110 45.6036 114.395 40 120 40C125.605 40 130 45.6036 130 52.75V129.25L120 142ZM120 142H55C52.3478 142 49.8043 140.657 47.9289 138.266C46.0536 135.875 45 132.632 45 129.25C45 125.868 46.0536 122.625 47.9289 120.234C49.8043 117.843 52.3478 116.5 55 116.5H75C77.6522 116.5 80.1957 115.157 82.0711 112.766C83.9464 110.375 85 107.132 85 103.75C85 100.368 83.9464 97.1255 82.0711 94.7344C80.1957 92.3433 77.6522 91 75 91H60M110 65.5H130" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <rect className='stroke-accent' x="2" y="2" width="188" height="188" rx="94" stroke-width="4"/>
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

                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button className='bg-black'>Log in</Button>
            </main>
        </div>
    );
}

export default Account;
