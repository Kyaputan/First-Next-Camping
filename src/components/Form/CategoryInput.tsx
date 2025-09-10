import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories } from "@/utils/Category"

const CategoryInput = ({ defaultValue } : {defaultValue?: string}) => {
    const name = "category"
    return (
        <div className="my-2">
            <Label htmlFor={name} className="block text-sm font-medium my-2 capitalize">{name}</Label>
            <Select name={name} defaultValue={defaultValue || categories[0].label}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((category, index: number) => (
                            <SelectItem key={index} value={category.label}>
                                <span className="capitalize flex items-center justify-center gap-2">
                                    <category.icon className="mr-2 h-4 w-4" />
                                    {category.label}
                                </span>
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default CategoryInput