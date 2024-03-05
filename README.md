

## Development


From your terminal:

```sh
npm ci
npm run dev
edgedb project init
edgedb configure set listen_addresses 127.0.0.1 ::1    // Only run  this  "if A client connection error occurred; reconnecting because of "waitUntilAvailable=30000"" error occur

Note That you have to add several school details in order to be able to filter



Streched goals of the Project
1. Security
   I implemented one of security  meausures such as input validation, that is when user enter details about school on the
   form validate and sanitize the inputs using Zod wich helps catch errors early in the development process and ensures that data conforms to expected schema.
   Other Security measure that I couldn't implement due to time constrained are Authentication and Authorization: Here I will create an interface where users register
 their details I will then apply robust authentication mechanisms e.g Multi factor authentication to verify user identities and control access to resources. and for
  Authorization I will create access controls based on roles and permissions to limit exposure to sensitive functionality.
2. Validation
    I implemented data validation not only from the client side as mentioned above, but also from the server side using Zod
    library, meaning the user inputs are going through Serialization from the cleint and deserialization from the server,these ensures input dtat adheres to
   expected formats and constrains. I also Implemented error handling, e.g if the
    user does not provide inputs they wont be able to submit to the server.

3. Test
   I did unit testing where I broke my program into smaller,logically isolated units,fucntions,methods,objects and modules to verify that each unit work. I also did Intergration
 testing to verify that different components work together. I further did end to end, where I send user inputs to the EdgeDB data through the remix server , to comfirm that the data is recieved at the backend,
I the pulled the data from EdgeDb to show it on display .

3. Progressive Enhancement:
   My application is very responsive since I used remix reack hook form as opposed to controlled from, this reduces to much rendering like states in react,this reduces server loading.
I used act and loader in remix, this helps  as remix communicate with server and client easily.

4.Caching:
 Due to time constrained I couldn't implement caching, but this is how I can achieve it:
 I will Cache entire pages (HTML, CSS, JavaScript) to reduce server load and improve response times.
 When a user requests a page, check if it’s already cached. If so, serve the cached version; otherwise, generate and cache.
 I can also cache frequently executed database queries. When a query is executed, store the results in the cache. Subsequent requests can use the cached data instead of hitting the database
