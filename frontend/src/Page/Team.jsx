import React from "react";
import Profile from "../Component/Profile/Profile";

function Team() {
  return (
    <section className="w-full flex flex-col gap-y-[80px] items-center bg-gradient-to-b from-[#aea0ff] via-[#C7BFF0] via-500% to-[#B0A5F1]">
      <div className="py-[50px] flex flex-col justify-center items-center gap-y-5">
        <h2 className="text-3xl font-bold text-[#4C3EA0] tracking-tighter sm:text-4xl md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-[700px] text-[#4C3EA0] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
          Get in touch with our experts for any questions or inquiries.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 pb-[150px]">
        <Profile
          name="Pradeep..."
          role="Founder & CEO"
          linkedin="https://www.linkedin.com/in/itsyourap/"
          twitter="https://twitter.com/itsyourap"
          github="https://github.com/itsyourap"
          image="https://media.licdn.com/dms/image/D4D03AQEBDxLwNyF9mg/profile-displayphoto-shrink_800_800/0/1693194284867?e=1724889600&v=beta&t=Z_dDRaFsa-pQT5UpbCjMkW-p4gRyDbs3-H9YGAGCcD8"
        />
        <Profile
          name="Mohammed Rila"
          role="Data Scientist"
          linkedin=""
          twitter="https://www.google.co.in/"
          github=""
          image=""
        />
        <Profile
          name="Pradeep"
          role="Developer"
          linkedin=""
          twitter=""
          github=""
          image=""
        />
        <Profile
          name="Vaishnavi"
          role="Lead Designer and Lead Engineer"
          linkedin=""
          twitter=""
          github=""
          image=""
        />
      </div>
    </section>
  );
}

export default Team;
