// component
import Process from "./Process";

// images
import { academics1, academics2, academics3 } from "../../assets/images";
import { admissionProcess } from "../../DataTypes/DataTypes";

const Processes = () => {
    const academicProcess: admissionProcess[] = [
        {
            image: academics3,
            digit: 1,
            title: "Validation Time",
            description: "We need a 30-day time period to check and validate all your provided information, then we will decide whether or not your kids are eligible.",
            flip: false
        },
        {
            image: academics2,
            digit: 2,
            title: "Validation Time",
            description: "We need a 30-day time period to check and validate all your provided information, then we will decide whether or not your kids are eligible.",
            flip: true
        },
        {
            image: academics1,
            digit: 3,
            title: "Validation Time",
            description: "We need a 30-day time period to check and validate all your provided information, then we will decide whether or not your kids are eligible.",
            flip: false
        },
    ]
  return (
    <section className="flex flex-col gap-10 lg:gap-20 w-[94%] max-w-[32.25rem] lg:max-w-full mx-auto my-6 md:my-8 lg:my-24">
        {academicProcess.map(({image, digit, title, description, flip}, index) => (
            <Process key={index} image={image} digit={digit} title={title} description={description} flip={flip} />
        ))}
    </section>
  )
}

export default Processes;