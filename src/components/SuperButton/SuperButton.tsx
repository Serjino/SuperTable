import { Button, ButtonProps } from "@mui/material";

export function SuperButton (props: ButtonProps) {
    return (
        <Button
            variant="contained"
            size="small"
            {...props}
        >

        </Button>
    )
}