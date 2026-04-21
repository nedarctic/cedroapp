import { SearchIcon } from "lucide-react"

import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import React from "react";

type SearchInputType = {
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export function InputGroupInlineStart({
  placeholder,
  onChangeHandler,
  value,
  name
}: SearchInputType) {
  return (
    <Field className="w-full">
      <InputGroup className="rounded-none">
        <InputGroupInput onChange={onChangeHandler} id="inline-start-input" placeholder={placeholder} value={value} name={name} />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
