import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export default function Links() {

    const {
        setLinkedin,
        setGithub,
        setWebsite,
    } = useContext(Context)

    return (
        <Box width="60%" mx="auto">
            <Card sx={{ py: 2, my: 1 }}>
                <CardContent sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"space-around" }}>
                    <Typography variant="h3" component="div" gutterBottom mx="auto">Links</Typography>

                    <Box
                        component="form"
                        autoComplete="on"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >   
                        <Box display="flex" justifyContent="center" alignItems="center" py={1} width="50%">
                            <LinkedInIcon fontSize="large" sx={{ mr: 2 }} />
                            <TextField
                                id="linkedin"
                                variant="outlined"
                                placeholder="Linkedin..."
                                onChange={e => setLinkedin(e.target.value)}
                            />
                        </Box>

                        <Box display="flex" justifyContent="center" alignItems="center" py={1} width="50%">
                            <GitHubIcon fontSize="large" sx={{ mr: 2 }} />
                            <TextField
                                id="github"
                                variant="outlined"
                                placeholder="Github..."
                                onChange={e => setGithub(e.target.value)}
                            />
                        </Box>

                        <Box display="flex" justifyContent="center" alignItems="center" py={1} width="50%">
                            <LanguageIcon fontSize="large" sx={{ mr: 2 }} />
                            <TextField
                                id="website"
                                variant="outlined"
                                placeholder="Website..."
                                onChange={e => setWebsite(e.target.value)}
                            />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}