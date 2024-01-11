import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"

const TextAreaComp = () => {
      return (
            <div className="grid w-full gap-1.5 p-4">
                  <Label htmlFor="message-2">Your Message</Label>
                  <Textarea className="my-2" placeholder="Type your message here." id="message-2" />
                  <p className="text-sm text-muted-foreground">
                        Your message will be copied to the support team.
                  </p>
                  <div className="flex justify-end">
                        <Button type="submit" className=" w-1/3">
                              Submit
                        </Button>
                  </div>
            </div>
      )
}

export default TextAreaComp
