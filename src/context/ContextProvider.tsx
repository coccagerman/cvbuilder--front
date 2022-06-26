import { useState } from 'react'
import Context from './Context'

interface ContextProps {
    children: React.ReactNode
}

const ContextProvider: React.FC<ContextProps> = ({ children }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [telephone, setTelephone] = useState("")
    const [email, setEmail] = useState("")

    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [website, setWebsite] = useState("")

    const [intro, setIntro] = useState("")

    const [jobExperiences, setJobExperiences] = useState([{
        id: 0,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
    }])

    const [educationRecords, setEducationRecords] = useState([{
        id: 0,
        institution: "",
        title: "",
        startDate: "",
        endDate: ""
    }])

    return (
        <Context.Provider value={{
            firstName, setFirstName,
            lastName, setLastName,
            country, setCountry,
            city, setCity,
            telephone, setTelephone,
            email, setEmail,
            linkedin, setLinkedin,
            github, setGithub,
            website, setWebsite,
            intro, setIntro,
            jobExperiences, setJobExperiences,
            educationRecords, setEducationRecords,
        }} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider