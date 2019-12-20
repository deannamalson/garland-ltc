import React from "react";
import ContactCard from "./cards/ContactCard";

const Contact = () => {
  const contactData = [
    {
      icon: "icon",
      text: "Phone"
    },
    {
      icon: "icon",
      text: "Email"
    }
  ];
  return (
    <div>
      <h2>Contact</h2>
      <p>
        I have been a Texas Concealed Handgun instructor since the programs
        conception and have taught and qualified thousands of students. I
        strongly believe in the value of getting proper education from the most
        qualified instructors available.
      </p>
      <p>
        I also teach PRIVATE LESSONS in the basics of using a rifle, pistol, or
        shotgun. These lessons consist of a one hour session in the classroom
        and a one hour session on the range. The classroom session involves
        learning how the firearm works, reviewing the safety rules involving the
        use of firearms, and talking about ammunition and the basics of
        marksmanship. The range session provides hands on experience. For more
        information, feel free to contact me at the phone or email address
        above.
      </p>
      {contactData.map(data => (
        <ContactCard key={data.text} {...data} />
      ))}
    </div>
  );
};

export default Contact;
