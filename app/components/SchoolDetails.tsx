
/*

    This componet is a Form , where user can enter their details
    The details will then be stored in EdgeDB
*/


import { useRemixForm} from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema,FormData } from "~/utils/types";
import { Form, Link, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";


const resolver = zodResolver(schema);

export default function SchoolDetails(){

    const actionData = useActionData();
    const form = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if (actionData?.ok) {
        form.current?.reset();
        }
    }, [actionData]);

    const {
        handleSubmit,
        formState: { errors },
        register,
      } = useRemixForm<FormData>({
        mode: "onSubmit",
        resolver,
        defaultValues:{
            schoolName:"",
            StreetAddress:"",
            Town_City:"",
            Country:"",
        }
      });
    
    
    return(
        <>
            <h1 className="max-w-sm mx-auto">School Management App </h1>
            
            <Form ref={form} onSubmit={handleSubmit} method="post" action="/post" className="max-w-sm mx-auto">
            
            <p >
            <label htmlFor="schoolName">Enter School Name</label>
                <br />
                <input 
                    type="text"  
                    {...register("schoolName")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="School Name?"
                />
                {errors.schoolName && <p className="text-red-500">{errors.schoolName.message}</p>}
            </p>

            <p>
            <label htmlFor="Town_City">Town/City</label>
                <br />
                <input 
                    type="text" 
                    {...register("Town_City")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Town/City?"
                />
                {errors.Town_City && <p className="text-red-500">{errors.Town_City.message}</p>}
            </p>
            <p>
            <label htmlFor="StreetAddress">Street Adress</label>
                <br />
                <input 
                type="text" 
                    {...register("StreetAddress")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="StreetAddress?"
                />
                {errors.StreetAddress && <p className="text-red-500">{errors.StreetAddress.message}</p>}
            </p>
            <p>
            <label htmlFor="Country">Country</label>
                <br />
                <input 
                    type="text" {...register("Country")} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Country?"
                />
                {errors.Country && <p className="text-red-500">{errors.Country.message}</p>}
            </p>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </Form>
            <br />
            <div className="max-w-sm mx-auto">
            <h3 >Click the follwing link to filter schools by your Home Town</h3>
            <Link to="/ListOfSchools">Filter</Link>
            </div>
            
            
        </>
            
    )

}


