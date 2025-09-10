import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type TextAreaInputProps = {
    name: string;
    label?: string;
    defaultValue?: string;
}

const TextAreaInput = ({name , label , defaultValue} : TextAreaInputProps) => {
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize my-2">
            {label || name}
        </Label>
    <Textarea id={name} name={name} defaultValue={defaultValue} 
    rows={5}
    required/>
    </div>
  )
}

export default TextAreaInput