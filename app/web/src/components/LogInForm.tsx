import GoogleButton from '@components/GoogleButton';
import { AccountService } from '@services/account.service';
import TextField from '@components/TextField';
import { Button } from '@mui/material';
import { useState } from "react";

function LogInForm() {
    const [logIn, setLogIn] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLogIn((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        AccountService.login(logIn.email, logIn.password);
    };

    return (
        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
            <TextField
                name="email"
                label="Email"
                type="email"
                value={logIn.email}
                onChange={handleChange}
                className="w-80"
                variant="outlined"
            />
            <TextField
                name="password"
                label="Password"
                type="password"
                value={logIn.password}
                onChange={handleChange}
                className="w-80"
                variant="outlined"
            />
            <GoogleButton />
            <Button className="bg-accent w-fit" variant="contained" type="submit" disableElevation>
                Log in
            </Button>
        </form>
    );
}

export default LogInForm;