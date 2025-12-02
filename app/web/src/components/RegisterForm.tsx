import { AccountService } from '@services/account.service';
import GoogleButton from '@components/GoogleButton';
import TextField from '@components/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function RegisterForm() {
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setRegister((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(register);

        AccountService.register(register.username, register.email, register.password);
    };

    return (
        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
            <TextField
                className="w-80"
                name="username"
                variant="outlined"
                label="Username"
                onChange={handleChange}
                value={register.username}
            />
            <TextField
                className="w-80"
                name="email"
                variant="outlined"
                label="Email"
                type="email"
                onChange={handleChange}
                value={register.email}
            />
            <TextField
                className="w-80"
                name="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                onChange={handleChange}
                value={register.password}
            />
            <GoogleButton />
            <Button className="bg-accent w-fit cursor-pointer" variant="contained" type="submit" disableElevation>
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;
