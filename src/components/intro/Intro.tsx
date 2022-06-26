import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Intro() {

    const { setIntro } = useContext(Context)

    return (
        <Box width="60%" mx="auto">
            <Card sx={{ py: 2, my: 1 }}>
                <CardContent>
                    <Box
                        component="form"
                        autoComplete="on"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >   
                        <Typography variant="h3" component="div" gutterBottom>Introduction</Typography>

                        <Box display="flex" justifyContent="space-around" alignItems="center" py={1} width="50%">
                            <TextField
                                placeholder="Introduction... (max 500 chars.)"
                                multiline
                                rows={4}
                                fullWidth
                                inputProps={{ maxLength: 500 }}
                                onChange={e => setIntro(e.target.value)}
                            />
                        </Box>

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}