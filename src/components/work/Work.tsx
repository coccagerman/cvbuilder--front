import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ExperienceRecord from "./experienceRecord/ExperienceRecord";

export default function Work() {

    const { jobExperiences, setJobExperiences } = useContext(Context)

    const addAnotherJobExperience = () => {
        setJobExperiences([...jobExperiences, {
            id: jobExperiences.length,
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: "",
        }])
    }

    return (
        <Box width="60%" mx="auto">
            <Card sx={{ py: 1, my: 1 }}>
                <CardContent>
                    <Box
                        component="form"
                        autoComplete="on"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                    >   
                        <Typography variant="h4" component="div" gutterBottom>Work experience</Typography>

                        <Button
                            variant="contained"
                            size="small"
                            sx={{ position: "absolute", top: 5, right: 0 }}
                            onClick={() => addAnotherJobExperience()}
                        >
                            Add new experience
                        </Button>

                        {jobExperiences.map(rec =>
                            <ExperienceRecord
                                key={rec.id}
                                record={rec}
                                jobExperiences={jobExperiences}
                                setJobExperiences={setJobExperiences}
                            />
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}