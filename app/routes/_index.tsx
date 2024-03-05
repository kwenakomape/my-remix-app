

import * as edgedb from "edgedb";

import { getValidatedFormData } from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";

import { schema } from "~/utils/types";
import SchoolDetails from "~/components/SchoolDetails";

type FormData = zod.infer<typeof schema>;
const resolver = zodResolver(schema);


//This function renders SchoolDetails Component which is Form

export default function Index() {
  return (
    <>
      <SchoolDetails/>
      
    </>
    
  );
}
// Action in remix run on server, the data recieved from user inputs is then validated again on the Server side
//The code also catches any error , ensuring data is inserted correctly in the database.
export const action = async ({ request }: ActionFunctionArgs) => {
  
  const client = edgedb.createClient();
  const { errors, data, receivedValues: defaultValues } =
    await getValidatedFormData<FormData>(request, resolver);
  if (errors) {
    
    return json({ errors, defaultValues });
  }


  //Adding the user fields inputs data to the database(EdgeDB)

  await client.execute(`
      insert SchoolDetails {
          Town_City := "${data.Town_City}",
          schoolName := "${data.schoolName}",
          StreetAddress:= "${data.StreetAddress}",
          Country:= "${data.Country}",
      };
  `);
  return json({ ok: true });
 
}