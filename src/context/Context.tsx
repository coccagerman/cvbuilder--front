import { createContext, Dispatch, SetStateAction } from 'react'
import { JobExperiences, SetJobExperiences, EducationRecords, SetEducationRecords } from "../types/Types"


interface ContextInterface {
    firstName: string
    setFirstName: Dispatch<SetStateAction<string>>
    lastName: string
    setLastName: Dispatch<SetStateAction<string>>
    country: string
    setCountry: Dispatch<SetStateAction<string>>
    city: string
    setCity: Dispatch<SetStateAction<string>>
    telephone: string
    setTelephone: Dispatch<SetStateAction<string>>
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    linkedin: string
    setLinkedin: Dispatch<SetStateAction<string>>
    github: string
    setGithub: Dispatch<SetStateAction<string>>
    website: string
    setWebsite: Dispatch<SetStateAction<string>>
    intro: string
    setIntro: Dispatch<SetStateAction<string>>
    jobExperiences: JobExperiences
    setJobExperiences: SetJobExperiences
    educationRecords: EducationRecords
    setEducationRecords: SetEducationRecords
}

const defaultState = {
    firstName: "",
    setFirstName: (): void => {throw new Error('setFirstName function must be overridden')},
    lastName: "",
    setLastName: (): void => {throw new Error('setLastName function must be overridden')},
    country: "",
    setCountry: (): void => {throw new Error('setCountry function must be overridden')},
    city: "",
    setCity: (): void => {throw new Error('setCity function must be overridden')},
    telephone: "",
    setTelephone: (): void => {throw new Error('setTelephone function must be overridden')},
    email: "",
    setEmail: (): void => {throw new Error('setEmail function must be overridden')},
    linkedin: "",
    setLinkedin: (): void => {throw new Error('setLinkedin function must be overridden')},
    github: "",
    setGithub: (): void => {throw new Error('setGithub function must be overridden')},
    website: "",
    setWebsite: (): void => {throw new Error('setWebsite function must be overridden')},
    intro: "",
    setIntro: (): void => {throw new Error('setIntro function must be overridden')},
    jobExperiences: [{
        id: 0,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
    }],
    setJobExperiences: (): void => {throw new Error('setJobExperiences function must be overridden')},
    educationRecords: [{
        id: 0,
        institution: "",
        title: "",
        startDate: "",
        endDate: ""
    }],
    setEducationRecords: (): void => {throw new Error('setEducationRecords function must be overridden')},
}

const Context = createContext <ContextInterface>(defaultState)

export default Context