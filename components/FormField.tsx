import { 
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  
  import { Input } from "@/components/ui/input"
  import { Control, Controller, FieldValues, Path, useFormContext  } from 'react-hook-form'
  import { cn } from "@/lib/utils" // função utilitária do shadcn para combinar classes
  
  interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' ;
  }
  
  const FormField = <T extends FieldValues>({
    control, name, label, placeholder, type="text"
  }:FormFieldProps<T>) => {

    const { formState: { errors } } = useFormContext()

    const errorMessage = errors[name]?.message as string | undefined
    
    return(
      <Controller 
        name={name} 
        control={control} 
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input 
                type={type}
                placeholder={placeholder}
                {...field}
                className={cn(
                  "input", 
                  fieldState.invalid && "border-red-500 focus-visible:ring-red-500"
                )}
              />
            </FormControl>
            <FormMessage>{errorMessage}</FormMessage>
          </FormItem>
        )}
      />
    )
  }
  
  export default FormField
  