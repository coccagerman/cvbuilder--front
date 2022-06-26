import { useState } from "react";
import { EducationRecord, EducationRecords, SetEducationRecords } from "../../../types/Types"

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface EducationRecordProps {
    record: EducationRecord
    educationRecords: EducationRecords
    setEducationRecords: SetEducationRecords
}

type inputType = "institution"|"title"|"startDate"|"endDate"

export default function EducationRecordComp({ record, educationRecords, setEducationRecords }: EducationRecordProps) {

    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    const removeRecord = () => {
        const prevEducationRecords = educationRecords.slice()
        const edRecords = prevEducationRecords.filter(rec => rec.id !== record.id)
        setEducationRecords(edRecords)
    }

    const handleInputChange = (inputName: inputType, value: string) => {
        const prevEducationRecords = educationRecords.slice()
        const edRecord = prevEducationRecords.filter(rec => rec.id === record.id)[0]
        edRecord[inputName] = value
        setEducationRecords([
            ...prevEducationRecords.slice(0, record.id),
            edRecord,
            ...prevEducationRecords.slice(record.id+1)
        ])
    }

    const handleDateChange = (isStartDate: boolean, value: string|number|Date|null) => {
        if (value) {
            if (isStartDate) handleInputChange("startDate", `${new Date(value).toISOString().split('T')[0]}`)
            else handleInputChange("endDate", `${new Date(value).toISOString().split('T')[0]}`)
        }
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
                    id="institution-name"
                    variant="outlined"
                    placeholder="Institution name..."
                    sx={{ mx: 1 }}
                    onChange={e => handleInputChange("institution", e.target.value)}
                />
                
                <TextField
                    id="degree-name"
                    variant="outlined"
                    placeholder="Degree name..."
                    sx={{ mx: 1 }}
                    onChange={e => handleInputChange("title", e.target.value)}
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

           {educationRecords.length > 1 && (
                <Button
                        variant="outlined"
                        size="small"
                        sx={{ position: "absolute", bottom: 20, right: -200 }}
                        onClick={() => removeRecord()}
                    >
                        Remove record
                </Button>
            )}
        </Box>
    )
}