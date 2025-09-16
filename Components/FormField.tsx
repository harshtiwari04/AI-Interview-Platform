import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Button } from "@/Components/ui/button";
import {
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/Components/ui/form";

import { Input } from "@/Components/ui/input";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;  // ✅ fixed syntax
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type = "text"
                                          }: FormFieldProps<T>) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormItem>
                <FormLabel className={"label"}>{label}</FormLabel>
                <FormControl>
                    <Input
                        className={"input"}
                        placeholder={placeholder}
                        type={type}
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
