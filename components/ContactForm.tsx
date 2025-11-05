"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-primary">Kontakt Forma</h2>
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Ime i Prezime <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Unesite vaše ime i prezime" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">Telefon</FormLabel>
                  <FormControl>
                    <Input placeholder="+381 (0) 64 123 4567" {...field} />
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
                  <FormLabel className="text-base font-medium">
                    Email Adresa <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="vas.email@primer.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-medium">
                    Poruka <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Napišite vašu poruku ovde..."
                      className="text-gray-800 min-h-[150px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-colors ease-in-out duration-500"
              size="lg"
            >
              {isLoading ? "Šalje se..." : "Pošalji Poruku"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
