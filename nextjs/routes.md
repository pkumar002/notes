# Dynamic routes

In Next.js you can add brackets to a page (`[param]`) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).

consider the following pages `pages/posts/[id].js`

```
 import { userRouter } from 'next/router';

 const PostDetail=()=>{
   const router=userRouter();
   const {id}=router.query;

   return (
     <p>posts: {id} </p>
   )

 }
```

Any routes like `post/1`, `post/abc`, etc. will be matched by `pages/posts/[id].js`.
The matched path parameter will be sent as a query parameter to the page, and it will be merged with the other query parameters.

For example, the route` /post/abc` will have the following query object:

<pre>
  { "pid": "abc" } 
</pre>

Similarly, the route `/post/abc?foo=bar` will have the following query object:

<pre>
  { "foo": "bar", "pid": "abc" }
</pre>

However, route parameters will override query parameters with the same name. For example, the route `/post/abc?pid=123` will have the following `query` object:

<pre>
  { "pid": "abc" } 
</pre>

Multiple dynamic route segments work the same way. The page `pages/post/[pid]/[comment].js` will match the route `/post/abc/a-comment` and its query object will be:

```
{ "pid": "abc", "comment": "a-comment" }
```

Client-side navigations to dynamic routes are handled with `next/link`.

```
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/post/abc">
          <a>Go to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc?foo=bar">
          <a>Also goes to pages/post/[pid].js</a>
        </Link>
      </li>
      <li>
        <Link href="/post/abc/a-comment">
          <a>Go to pages/post/[pid]/[comment].js</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
```

# [Catch all routes](#catch-all-routes)
