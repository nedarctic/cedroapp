import { SearchIcon } from "lucide-react"

import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupInlineStart({placeholder}: {placeholder: string}) {
  return (
    <Field className="max-w-sm">
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder={placeholder} />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
