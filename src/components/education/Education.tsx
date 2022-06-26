import { useContext } from "react";
import Context from "../../context/Context";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import EducationRecordRecord from "./educationRecord/EducationRecord";

export default function Education() {

    const { educationRecords, setEducationRecords } = useContext(Context)

    const addAnotherEducationRecord = () => {
        setEducationRecords([...educationRecords, {
            id: educationRecords.length,
            institution: "",
            title: "",
            startDate: "",
            endDate: ""
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
                        <Typography variant="h3" component="div" gutterBottom>Education</Typography>

                        <Button
                            variant="contained"
                            size="small"
                            sx={{ position: "absolute", top: 5, right: 0 }}
                            onClick={() => addAnotherEducationRecord()}
                        >
                            Add new record
                        </Button>

                        {educationRecords.map(rec =>
                             <EducationRecordRecord
                                key={rec.id}
                                record={rec}
                                educationRecords={educationRecords}
                                setEducationRecords={setEducationRecords}
                            />
                        )}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}