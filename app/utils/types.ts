
import * as zod from "zod";

export const schema = zod.object({

    schoolName:zod.string().min(1,"Please Enter School ,Field is Required"),
    StreetAddress:zod.string().min(1,"Please Enter Street Address ,Field is Required"),
    Town_City:zod.string().min(1,"Please Enter Town/City ,Field is Required"),
    Country:zod.string().min(1,"Please Enter Country ,Field is Required"),
  })


export type FormData = zod.infer<typeof schema>;