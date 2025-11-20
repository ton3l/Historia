import { TextField as MUITextField } from "@mui/material";
import { styled } from "@mui/material";

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

export default TextField;