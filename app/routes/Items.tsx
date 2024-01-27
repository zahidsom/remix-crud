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
} // loader()

export async function action({
  request,
}: ActionFunctionArgs) {

              //  data received from browser HTML form fields in the request object
      const   {...values} = Object.fromEntries(await request.formData());
            //  let   values = Object.fromEntries(await request.formData());
      
      //  form data Validation via zod 
      const actionSchema = zfd.formData({
        _action: zfd.text(),
      });
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
                  return   await db.delete(items).where(eq(items.id, _id));``
     default:
            return {
              success: true,
            }

    } // switch

  } // action()
             
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
            <p> Empty Items List </p>
          )} 

          <Form method="post" >
              <input type="text" name="_title" placeholder="Enter title" required /> {" "}
              <input type="text" name="_description" placeholder="Enter description" required /> {" "}
              <button type="submit" name="_action" value="create">Add</button>
          </Form>

         <Link to="/">Home</Link>
      </main> 
  ); // return
}
