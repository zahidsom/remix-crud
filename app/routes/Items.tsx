/*************************************************************
 * 
 *    Naming Conventions cures most headaches
 * 
************************************************************ */

import { db } from "~/db/config.server";
import { ActionFunctionArgs, json} from "@remix-run/node";
import {  Link, useFetcher, useLoaderData, useNavigation} from "@remix-run/react";
import { items } from "~/db/schema.server";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { z } from 'zod';
import { useEffect, useRef } from "react";

export async function loader() {
          // use drizzle to get the dataset(s)
  const dataSets =  db.select().from(items).all()
  return json(dataSets); 
} // loader()

export async function action({
  request,
}: ActionFunctionArgs) {

              //  data received from browser HTML form fields in the request object
  const {...values} = Object.fromEntries(await request.formData());

              //  form data Validation via zod
  const actionSchema = zfd.formData({_action: zfd.text(),});
  const { _action, } = actionSchema.parse(values);

  switch(_action) {
    case "create":
          const createSchema = zfd.formData({
            _title: zfd.text(),
            _description: zfd.text(),
            });  
          const { _title, _description } = createSchema.parse(values);

          db.insert(items).values({
          title: _title,
          description: _description,
          createdAt: String(new Date().toLocaleDateString("en-GB",)),
          updatedAt: String(new Date().toLocaleDateString("en-GB"))
          }).run()

         return {
          success: true,
      }

     case "delete":
        const deleteSchema = zfd.formData({
          _id:  zfd.numeric(z.number()),
        });  
        const { _id, } = deleteSchema.parse(values);
        return await db.delete(items).where(eq(items.id, _id)); 
     default:
        return {
          success: true,
        }

    } // switch

  } // action()
             
export default function ItemsPage() {

  
  const  ItemsDataSets  = useLoaderData <typeof loader>(); 

    return (
      <main>
        <h1>Items</h1>
        {ItemsDataSets.length ? (
            <ul>
                { ItemsDataSets.map((item) => (
                  <DeleteItemForm id={item.id} 
                                  title={item.title} 
                                  description={item.description}
                                  key={item.id} /> 
             ))}
            </ul>
           ) : (
            <p> Empty Items List </p>
          )} 
        <CreateItemForm />
        <Link to="/">Home</Link>

      </main> 
  ); 
} 

type ItemProps = {
  id: number,    
  title: string,
  description : string | null  
};


function DeleteItemForm  ({id,title,description}  : ItemProps )  {

   const deleteFetcher = useFetcher()
   let isDeleting = deleteFetcher.state  === 'submitting';

   return (
      <li key={id}>

       <span style={{opacity: isDeleting ? 0.25 : 1 }}>
          <label>{id}</label>{" "}
          <label>{title}</label>{" "}
          <label>{description}</label>
       </span>
      <deleteFetcher.Form style={{display: "inline",}} method="post">
        <input 
            type="hidden"
            name="_id"
            value={id} 
            />  {/* for use in delete,  where clause */}
          
          <button
            type="submit"
            disabled={isDeleting}
            aria-label="delete"
            name="_action"
            value="delete"
            style={{marginLeft: "0.25rem"}}>
            {isDeleting ? 
              "deleting...":
              "x"
        }
       </button>
  </deleteFetcher.Form>
</li>
)
}

function CreateItemForm() {

  let createFetcher =  useFetcher(); 
  let isAdding = createFetcher.state  === 'submitting';
  let formRef = useRef<HTMLFormElement>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
      if (!isAdding) {
          formRef.current?.reset();  // reset form
          inputRef.current?.focus(); // set focus as per ref 
      }
  }, [isAdding]);

  return (
    <createFetcher.Form ref={formRef}  method="post" >
    <input type="text"
         ref={inputRef}
         name="_title"
         placeholder="Enter title"
         required 
         /> {" "}

    <input
     type="text"
     name="_description" 
     placeholder="Enter description" 
     required /> {" "}

    <button 
      disabled={isAdding}
      type="submit"
      name="_action"
      value="create">
      {isAdding
      ? "Adding..."
      : "Add" } 
    </button>
  </createFetcher.Form>
  )
}
