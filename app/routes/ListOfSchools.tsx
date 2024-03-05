import { Form, Link, useLoaderData } from "@remix-run/react";

import { ActionFunctionArgs,} from "@remix-run/node";
import * as edgedb from "edgedb";



let FilteredSchoolDetails = [];

export async function loader(){

    return FilteredSchoolDetails;

}


// we are requesting all the data from EdgeFB

export async function action({
    request,
        }: ActionFunctionArgs) {
    const client = edgedb.createClient();
    const formData = await request.formData();
    const homeCity = String(formData.get("Town_City"));
    const schoolDetails = await client.query(`select SchoolDetails {
        schoolName,
        StreetAddress,
        Town_City,
        Country,
        id,
    };`);
    
    
    const result = schoolDetails.filter((word) => (word.Town_City.toLowerCase()).includes(homeCity.toLowerCase()));
    
    FilteredSchoolDetails = result;
    return result;
}

//This is a component for Searching/Filtering data by City
export default function FilterSchoolByTown(){
    
    const currentSchoolData = useLoaderData();
    
    return(
        <>
            <Form method="post" className="max-w-sm mx-auto">
            <h1 >Filter List of Schools By Your City/Town</h1>
            <p >
                
                
                <input  type="text" id="Town_City" name="Town_City" placeholder="Enter Your Home Town/City" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            
            </p>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </Form>
            
            
            <div className="max-w-sm mx-auto">
            {currentSchoolData.length?(<ul>
                {currentSchoolData.map(i=> <li key={i.id}>{i.schoolName}  </li> )}
            </ul>):(
                <p>No Schools Found With the City/Town Provided</p>
            )}
            < Link to="/">Add Another School</Link>
            </div>
                 
        </>
    )
}