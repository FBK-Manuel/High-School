// component
import Teacher from "./Teacher";

// type
import { teacher } from "../../DataTypes/DataTypes";

// images
import { teacher1,teacher2,teacher3, teacher4, teacher5, teacher6 } from "../../assets/images";


const MeetTeachers = () => {
    const teachers: teacher[] = [
        {
            image: teacher1,
            fullName: "Cory Campbell",
            subject: "IT",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            image: teacher2,
            fullName: "Cory Campbell",
            subject: "Mathematics",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            image: teacher3,
            fullName: "Cory Campbell",
            subject: "English",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            image: teacher4,
            fullName: "Cory Campbell",
            subject: "Biology",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            image: teacher5,
            fullName: "Cory Campbell",
            subject: "Chemistry",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
        {
            image: teacher6,
            fullName: "Cory Campbell",
            subject: "Physics",
            social: {
                ig: "https://www.instagram.com/",
                twitter: "https://twitter.com",
                facebook: "https://www.facebook.com",
                linkedin: "https://www.linkedin.com"
            }
        },
    ]
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-20 w-[94%] mx-auto my-6 md:my-8 lg:my-12">
        <div className="flex flex-col gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#333333] text-center font-medium capitalize">
                Meet our <span className="text-[#1054c8]">teachers</span>
            </h1>
            <p className="text-[#54585f] text-center text-sm sm:text-base sm:max-w-[60%] sm:mx-auto tracking-widest md:tracking-[0.1875em]">Meet our brilliant team of dedicated, friendly, and creative teachers from all kinds of teaching fields.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map(({image,fullName,subject, social}, index)=>(
                <Teacher 
                    key={index} 
                    image={image} 
                    fullName={fullName} 
                    subject={subject} 
                    social={social} 
                />
            ))}
        </div>
    </section>
  )
}

export default MeetTeachers;