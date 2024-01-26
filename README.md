# App Name: REMIX-CRUD

Fullstack  CRUD Application Demonstrating  integration of 
drizzle ORM https://orm.drizzle.team/docs/select ,
SQLite ,
Remix , 
CRUD Operations , 
AND Multiple Forms on single page.  

- [Remix Docs](https://remix.run/docs)

haven't included  CRUD Update because there is no new concepts for updates,
it is repeat of delete for capturing  form data  with drizzle  sql statement
and same where clause.

From your terminal:

```sh
npm install
```
## Development 

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
