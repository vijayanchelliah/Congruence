import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type FormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store the submission in your database
      await apiRequest<{ success: boolean }>("/api/contact", {
        method: "POST",
        data: data
      });
      
      // Also open a mailto link in a new tab to send an email directly
      // This is a simple solution that doesn't require an email service
      const subject = `New Contact Form: ${data.projectType} Inquiry`;
      const body = `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}

Message:
${data.message}
      `;
      
      // Create a mailto link 
      const mailtoLink = `mailto:${encodeURIComponent("info@congruenceinfra.com")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the mailto link in a new tab
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Form submitted!",
        description: "Thank you for your message. Your default email client has been opened with the form details.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="font-heading font-bold text-2xl text-primary mb-6">Contact Form</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter Your Full Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Please Enter Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter Your Contact Number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Project Type</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
                        <SelectValue placeholder="Select Project Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential Projects</SelectItem>
                      <SelectItem value="commercial">Commercial Projects</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure Projects</SelectItem>
                      <SelectItem value="design_build">Design-Build</SelectItem>
                      <SelectItem value="bim">Building Information Modeling (BIM)</SelectItem>
                      <SelectItem value="project_management">Project Management</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Project Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Write your message here" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary" 
                    rows={5}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="bg-secondary hover:bg-secondary/90 text-white font-heading font-semibold py-3 px-8 rounded-md transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
              </>
            ) : (
              'Submit Request'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
