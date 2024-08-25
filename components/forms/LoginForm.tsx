"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import appwriteService from "@/lib/appwrite.config";
import useAuth from "@/context/useAuth";

const LoginForm = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth(); // Assuming useAuth provides setAuthStatus
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    setError(null);

    try {
      const session = await appwriteService.login(values.email, values.password);
      if (session) {
        setAuthStatus(true); // Update authentication status
        router.push("/profile"); // Redirect to profile page after successful login
      }
    } catch (error: any) {
      setError(error.message || "Login failed"); // Display error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your Email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="password"
          label="Password"
          placeholder="Enter your Password"
        />
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        <SubmitButton isLoading={isLoading}>Login</SubmitButton>
      </form>
    </Form>
  );
};

export default LoginForm;
