import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Submit() {

    const {
        firstName,
        lastName,
        country,
        city,
        telephone,
        email,
        linkedin,
        github,
        website,
        intro,
        jobExperiences,
        educationRecords
    } = useContext(Context)

    const data = {
        firstName,
        lastName,
        country,
        city,
        telephone,
        email,
        linkedin,
        github,
        website,
        intro,
        jobExperiences,
        educationRecords
    }

    const submit = () => {
        console.log('data')
        console.log(data)
    }

    return (
        <Box width="60%" mx="auto" my={8}display="flex" justifyContent="center" alignItems="center">
            <Button
                variant="contained"
                size="large"
                onClick={() => submit()}
            >
                Submit
            </Button>
        </Box>
    )
}