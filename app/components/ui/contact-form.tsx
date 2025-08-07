"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./button"
import { Input } from "./input"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "./modal"

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  triggerText?: string
  title?: string
  description?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "bizzie"
  size?: "default" | "sm" | "lg" | "icon" | "xl"
}

export function ContactForm({ 
  triggerText = "Contact Us", 
  title = "Get in Touch",
  description = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  variant = "bizzie",
  size = "default"
}: ContactFormProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Contact form submitted:", data)
    
    // Reset form and close modal
    reset()
    setIsSubmitting(false)
    setIsOpen(false)
    
    // You can add toast notification here
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="label-enhanced" htmlFor="name">
              Name *
            </label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your full name"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="label-enhanced" htmlFor="email">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your.email@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="label-enhanced" htmlFor="company">
              Company
            </label>
            <Input
              id="company"
              {...register("company")}
              placeholder="Your company name (optional)"
            />
          </div>

          <div className="space-y-2">
            <label className="label-enhanced" htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about your project or how we can help..."
              className="input-enhanced min-h-[100px] resize-none"
              rows={4}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="bizzie"
              loading={isSubmitting}
              className="flex-1"
            >
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
