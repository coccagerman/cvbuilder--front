import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Basic() {

    const {
        setFirstName,
        setLastName,
        setCountry,
        setCity,
        setTelephone,
        setEmail,
    } = useContext(Context)

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
                        <Typography variant="h3" component="div" gutterBottom>Basic data</Typography>

                        <Box display="flex" justifyContent="space-around" alignItems="center" py={1} width="50%">
                            <TextField
                                id="first-name"
                                variant="outlined"
                                placeholder="First name..."
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <TextField
                                id="last-name"
                                variant="outlined"
                                placeholder="Last name..."
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Box>

                        <Box display="flex" justifyContent="space-around" alignItems="center" py={1} width="50%">
                            <TextField
                                id="country"
                                variant="outlined"
                                placeholder="Country..."
                                onChange={e => setCountry(e.target.value)}
                            />

                            <TextField
                                id="city"
                                variant="outlined"
                                placeholder="City..."
                                onChange={e => setCity(e.target.value)}
                            />
                        </Box>

                        <Box display="flex" justifyContent="space-around" alignItems="center" py={1} width="50%">
                            <TextField
                                id="telephone"
                                variant="outlined"
                                placeholder="Telephone..."
                                onChange={e => setTelephone(e.target.value)}
                            />

                            <TextField
                                id="email"
                                variant="outlined"
                                placeholder="Email..."
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}