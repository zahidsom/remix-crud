import { db } from "~/db/config.server";
import { ActionFunctionArgs, json} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { items } from "~/db/schema.server";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { z } from 'zod';


export async function loader() {
          // use drizzle to get the dataset(s)
  const dataSets =  db.select().from(items).all()
  return json(dataSets); 
}


export async function action({
  request,
}: ActionFunctionArgs) {

  const schema = zfd.formData({
   _id:  zfd.numeric(z.number()),
   _action: zfd.text(),
   _title: zfd.text(),
  _description: zfd.text().optional(),
  });
  
  const { _action, _id,_title, _description } = schema.parse(
    await request.formData()
  );

   if (_action == "create")
   {
        db.insert(items).values({
        title: _title,
        description: _description,
        createdAt: String(new Date().toLocaleDateString("en-GB",)),
        updatedAt: String(new Date().toLocaleDateString("en-GB"))
        }).run()
        return {
          success: true,
      } 
  }             

   if(_action == "delete")
   {
       return   await db.delete(items).where(eq(items.id, _id));
   }             

   return {
     success: true,
   }
}

            // front end rendering
export default function DisplayItems() {

const Items = useLoaderData <typeof loader>(); // Items =  dataset(s) of type json

    return (
      <main>
          <h1>Items</h1>
         {Items.length ? (
            <ul>
                { Items.map((item) => ( 
                <li key={item.id}>
                   {item.id} {" "} {item.title} {item.description}

                   <Form style={{display: "inline",}} method="post">
                    <input type="hidden" name="_id" value={item.id} />  {/* for use in delete,  where clause */}
                    <input type="hidden" name="_title" value={item.title} />  {/* to satisfy zod */}
                      <button
                       type="submit"
                       aria-label="delete"
                       name="_action"
                       value="delete"
                       style={{margin: "0 0 0 1rem"}}>
                        x
                      </button>
                   </Form>

                </li>
             ))}
            </ul>
           ) : (
            <p> Empty List of Items</p>
          )} 

          <Form method="post" >
            <input type="hidden" name="_id" value={1} />  {/* satisfy zod required */}
            <input type="text" name="_title" placeholder="Enter title" required /> {" "}
            <input type="text" name="_description" placeholder="Enter description" required /> {" "}
            <button type="submit" name="_action" value="create">Add</button>
          </Form>

         <Link to="/">Home</Link>
      </main> 
  ); // return
}
import { db } from "~/db/config.server";
import { ActionFunctionArgs, json} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { items } from "~/db/schema.server";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { z } from 'zod';

export async function loader() {
          // use drizzle to get the dataset(s)
  const dataSets =  db.select().from(items).all()
  return json(dataSets); 
}


export async function action({
  request,
}: ActionFunctionArgs) {

  const schema = zfd.formData({
   _id:  zfd.numeric(z.number()),
   _action: zfd.text(),
   _title: zfd.text(),
  _description: zfd.text().optional(),
  });
  
  const { _action, _id,_title, _description } = schema.parse(
    await request.formData()
  );

   if (_action == "create")
import { db } from "~/db/config.server";
import { ActionFunctionArgs, json} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { items } from "~/db/schema.server";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { z } from 'zod';

export async function loader() {
          // use drizzle to get the dataset(s)
  const dataSets =  db.select().from(items).all()
  return json(dataSets); 
}


export async function action({
  request,
}: ActionFunctionArgs) {

  const schema = zfd.formData({
   _id:  zfd.numeric(z.number()),
   _action: zfd.text(),
   _title: zfd.text(),
  _description: zfd.text().optional(),
  });
  
  const { _action, _id,_title, _description } = schema.parse(await request.formData());

   if (_action == "create")
   {
        db.insert(items).values({
        title: _title,
        description: _description,
        createdAt: String(new Date().toLocaleDateString("en-GB",)),
        updatedAt: String(new Date().toLocaleDateString("en-GB"))
        }).run()
        return {
          success: true,
      } 
  }             

   if(_action == "delete")
   {
       return   await db.delete(items).where(eq(items.id, _id));
   }             

   return {
     success: true,
   }
}

            // front end rendering
export default function DisplayItems() {

const Items = useLoaderData <typeof loader>(); // Items =  dataset(s) of type json

    return (
      <main>
          <h1>Items</h1>
         {Items.length ? (
            <ul>
                { Items.map((item) => ( 
                <li key={item.id}>
                   {item.id} {" "} {item.title} {item.description}

                   <Form style={{display: "inline",}} method="post">
                    <input type="hidden" name="_id" value={item.id} />  {/* for use in delete,  where clause */}
                    <input type="hidden" name="_title" value={item.title} />  {/* to satisfy zod */}
                      <button
                       type="submit"
                       aria-label="delete"
                       name="_action"
                       value="delete"
                       style={{margin: "0 0 0 1rem"}}>
                        x
                      </button>
                   </Form>

                </li>
             ))}
            </ul>
           ) : (
            <p> Empty List of Items</p>
          )} 

          <Form method="post" >
            <input type="hidden" name="_id" value={1} />  {/* satisfy zod's required error  */}
            <input type="text" name="_title" placeholder="Enter title" required /> {" "}
            <input type="text" name="_description" placeholder="Enter description" required /> {" "}
            <button type="submit" name="_action" value="create">Add</button>
          </Form>

         <Link to="/">Home</Link>
      </main> 
  ); // return
}
