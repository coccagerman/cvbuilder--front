export interface JobExperienceRecord {
    id: number
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
}

export type JobExperiences = {
    id: number
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
}[]

export type SetJobExperiences = React.Dispatch<React.SetStateAction<{
    id: number
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
}[]>>

export interface EducationRecord {
    id: number
    institution: string
    title: string
    startDate: string
    endDate: string
}

export type EducationRecords = {
    id: number
    institution: string
    title: string
    startDate: string
    endDate: string
}[]

export type SetEducationRecords = React.Dispatch<React.SetStateAction<{
    id: number
    institution: string
    title: string
    startDate: string
    endDate: string
}[]>>