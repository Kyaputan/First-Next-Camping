import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { provinces } from "@/utils/provinces"

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = "provinces"
    return (
        <div className="my-2">
            <Label htmlFor={name} className="block text-sm font-medium my-2 capitalize">{name}</Label>
            <Select name={name} defaultValue={defaultValue || provinces[0].PROVINCE_NAME}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a province" />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((province, index: number) => (
                            <SelectItem key={index} value={province.PROVINCE_NAME}>
                                <span className="capitalize flex items-center justify-center gap-2">
                                    {province.PROVINCE_NAME}
                                </span>
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default ProvincesInput