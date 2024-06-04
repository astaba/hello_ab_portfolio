import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

function Form() {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" id="name" name="name" placeholder="Name" />
        <User size={20} className="absolute right-6" />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" name="email" placeholder="Email" />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type your message here" />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let&apos;s Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}

export default Form;
