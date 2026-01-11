import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur", // Validate on blur for better UX
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  disabled={isSubmitting}
                  aria-describedby={form.formState.errors.name ? "name-error" : "name-description"}
                />
              </FormControl>
              <FormDescription id="name-description">
                Enter your full name
              </FormDescription>
              <FormMessage id="name-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                  disabled={isSubmitting}
                  aria-describedby={form.formState.errors.email ? "email-error" : "email-description"}
                />
              </FormControl>
              <FormDescription id="email-description">
                We'll never share your email with anyone else
              </FormDescription>
              <FormMessage id="email-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Subject <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="How can we help you?"
                  {...field}
                  disabled={isSubmitting}
                  aria-describedby={form.formState.errors.subject ? "subject-error" : "subject-description"}
                />
              </FormControl>
              <FormDescription id="subject-description">
                Brief summary of your inquiry
              </FormDescription>
              <FormMessage id="subject-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[120px] resize-y"
                  {...field}
                  disabled={isSubmitting}
                  aria-describedby={form.formState.errors.message ? "message-error" : "message-description"}
                />
              </FormControl>
              <FormDescription id="message-description">
                Minimum 10 characters. {field.value?.length || 0}/1000 characters
              </FormDescription>
              <FormMessage id="message-error" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
