# Next js pages

A page is a [React component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory.

```
 function About(){
   return (
     <h1>About Page</h1>
   )
 }
```

<br/>
# Pages with dynamic routes

Next.js supports pages with dynamic routes.
For example, If you creaet a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`,`posts/2`, etc.

<br/>

# Pre-rendering

By default, Next.js **pre-renders** every page. This means next js generate html for every page in advance, instead of having it all done by client-side javascript.
Pre-rendering can result in better performance and SEO.

Each page generated HTML is associated with minimal javascript code necessary for that page. When a page loaded by the browser, its javscript code runs and makes the page fully interective. (This process is called hydration.)

<br/>

# Two forms of Pre-rendering

Next.js has two forms of pre-rendering: **`Static Generation`** and **`Server-side Rendering`**
The difference is in **when** it generates the HTML for a page.

\- **Static Generation (Recommonded):** The HTML is generated at build time and will be reused on each request.

\- **Server-side Rendering:** The HTML is generated on each request.

**Importantly**, Next.js lets you choose which pre-rendering from you'd like to use for each page. you can create a "hybrid" Next.js app by using `Static Generation` for most pages and using `Server-side Rendering` for others.

We **recommend** using **`Static Generation`** over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

<br/>

# Client side rendering with data

```
import { useState, useCallback, useEffect } from "react"
import Link from 'next/link'


export default function Posts() {
  const [posts, setPosts] = useState([])

  // fetch posts
  const loadPosts = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data)
  }, [])

  useEffect(() => {
    loadPosts()
  }, [])


  const renderPost = posts.map(post => <div style={{ padding: 10, display: 'block', border: '1px solid #eee', marginBottom: 10 }} key={post.id}>{post.title} <Link href={`/posts/${post.id}`}>Details</Link></div>)

  return <div style={{ maxWidth: 600, margin: 'auto' }}>
    {renderPost}
  </div>
}
```

# Static Generation without data

By default, Next.js pre-renders pages using Static Generation without fetching data. Here's an example:

```
function About() {
  return <div>About</div>
}

export default About
```

Next.js generates a single HTML file per page during build time.

<br/>

# Static generation with data

Some pages require fetching external data for pre-rendering. There are two scenarios, and one or both might apply. In each case, you can use these functions that Next.js provides:

1. Your page content depends on external data: Use getStaticProps.

2. Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).
