import { Button } from "@/components/ui/button"

const CommonButton = ({children}) => {
  return (
    <Button className="rounded-3xl bg-color-1 font-SfProMed">{children}</Button>
  )
}

export default CommonButton