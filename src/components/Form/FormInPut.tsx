import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormInPutProps } from "@/utils/types";

const FormInPut = (props:FormInPutProps) => {
    const {name, type, label, defaultValue, placeholder} = props
    return (
        <div className="my-2">
            <Label htmlFor={name} className="block text-sm font-medium text-gray-700 my-2">{label}</Label>
            <Input type={type} name={name} 
            defaultValue={defaultValue} 
            placeholder={placeholder} />
        </div>
    )
}

export default FormInPut