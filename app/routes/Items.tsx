import { db } from "~/db/config.server";
import { ActionFunctionArgs, json} from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { items } from "~/db/schema.server";
import { eq } from "drizzle-orm";

          // backend  function 
export async function loader() {
          // use drizzle to get the dataset(s)
  const dataSets =  db.select().from(items).all()
  return json(dataSets); // key value pairs
}

          // backend  function 
export async function action({
  request,
}: ActionFunctionArgs) {

  const formData = await request.formData();  
  const {_action, ...values} = Object.fromEntries(formData);  

                //    let {...values} = Object.fromEntries(formData);  

                //  let title = String(formData.get("title"));
                //  let desc = String(formData.get("description"));

 
              //  console.log(" content of values:"  + JSON.stringify(values)  )
              // console.log("result:", values);
  console.log("content of values:", values, "title:", values.title, "description:", values.description);
              // console.log("action is :",_action)

   if(_action =="create")
   {
              // db.insert(items).values(
              //                 { ...values }).run()

              // export async function action() {
              //   db.insert(items).values({ title: "Item title 12" }).run()
              //   return {
              //     success: true,
              //   }
              // }

        db.insert(items).values({
        title: values.title,
        description: values.description,
        createdAt: String(new Date().toLocaleDateString("en-PK",)),
        updatedAt: String(new Date().toLocaleDateString("en-PK"))
        }).run()
        return {
          success: true,
      } 
  }             

   if(_action =="delete")
   {
       return   await db.delete(items).where(eq(items.id, values.id));
   }             

   return {
     success: true,
   }
}

            // front end rendering
export default function DisplayItems() {

  const Items = useLoaderData <typeof loader>();

    return (
      <main>
          <h1>Items</h1>
         {Items.length ? (
            <ul>
                { Items.map((item) => ( // map json key value pair 
                <li key={item.id}>
                   {item.id} {" "} {item.title} {item.description}

                   <Form style={{display: "inline",}} method="post">
                    <input type="hidden" name="id" value={item.id} />
                    <input type="hidden" name="createAt" value={item.createdAt} />
                      <button
                       type="submit"
                       aria-label="delete"
                       name="_action"
                       value="delete"
                       style={{margin: "0 0 0 1em"}}>
                        x
                      </button>
                   </Form>

                </li>
             ))}
            </ul>
           ) : (
            <p> No Items</p>
          )} 

          <Form method="post" >
            <input type="text" name="title" placeholder="Enter title" required /> {" "}
            <input type="text" name="description" placeholder="Enter description" required /> {" "}            
            <button type="submit" name="_action" value="create">Add</button>
          </Form>

         <Link to="/">Home</Link>
      </main> 
  ); // return
}
