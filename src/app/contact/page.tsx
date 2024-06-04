import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and illustrations */}
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Let&apos;s Work Together</h1>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          {/* illustrations */}
          <div className="hidden w-full bg-contact-illustration-light bg-contain bg-top bg-no-repeat xl:flex dark:bg-contact-illustration-dark"></div>
        </div>
        {/* info text & form */}
        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          {/* info & text */}
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>youremail@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>45H7B Sima Lane, Cumsolom 45 Vianey Ntia</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>++607 34 53 66 641</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
