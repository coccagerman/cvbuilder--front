import { useState } from "react";
import { JobExperienceRecord, JobExperiences, SetJobExperiences } from "../../../types/Types"

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface ExperienceRecordProps {
    record: JobExperienceRecord
    jobExperiences: JobExperiences
    setJobExperiences: SetJobExperiences
}

type inputType = "company"|"position"|"startDate"|"endDate"|"description"

export default function ExperienceRecord({ record, jobExperiences, setJobExperiences }: ExperienceRecordProps) {

    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    const handleInputChange = (inputName: inputType, value: string) => {
        const prevExperienceRecords = jobExperiences.slice()
        const experienceRecord = prevExperienceRecords.filter(exp => exp.id === record.id)[0]
        experienceRecord[inputName] = value
        setJobExperiences([
            ...prevExperienceRecords.slice(0, record.id),
            experienceRecord,
            ...prevExperienceRecords.slice(record.id+1)
        ])
    }

    const handleDateChange = (isStartDate: boolean, value: string|number|Date|null) => {
        if (value) {
            if (isStartDate) handleInputChange("startDate", `${new Date(value).toISOString().split('T')[0]}`)
            else handleInputChange("endDate", `${new Date(value).toISOString().split('T')[0]}`)
        }
    }

    const removeExperience = () => {
        const prevExperienceRecords = jobExperiences.slice()
        const experienceRecords = prevExperienceRecords.filter(exp => exp.id !== record.id)
        setJobExperiences(experienceRecords)
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            py={2}
        >   
            <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
                <TextField
                    id="company-name"
                    variant="outlined"
                    placeholder="Company name..."
                    sx={{ mx: 1 }}
                    onChange={e => handleInputChange("company", e.target.value)}
                />
                
                <TextField
                    id="position-name"
                    variant="outlined"
                    placeholder="Position name..."
                    sx={{ mx: 1 }}
                    onChange={e => handleInputChange("position", e.target.value)}
                />
            </Box>

            <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
                <Box width={235} mx={1}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start date"
                            value={startDate}
                            onChange={date => {
                                setStartDate(date)
                                handleDateChange(true, date)
                            }}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>

                <Box width={235} mx={1}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="End date"
                            value={endDate}
                            onChange={date => {
                                setEndDate(date)
                                handleDateChange(false, date)
                            }}
                            renderInput={params => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>

            <TextField
                placeholder="Description... (max 500 chars.)"
                multiline
                rows={4}
                fullWidth
                inputProps={{ maxLength: 500 }}
                sx={{ maxWidth: 490 }}
                onChange={e => handleInputChange("description", e.target.value)}
            />

           {jobExperiences.length > 1 && (
                <Button
                        variant="outlined"
                        size="small"
                        sx={{ position: "absolute", bottom: 20, right: -200 }}
                        onClick={() => removeExperience()}
                    >
                        Remove experience
                </Button>
            )}
        </Box>
    )
}