# React Router
# `<BrowserRouter>`

```
<BrowserRouter>
    {/* Routes and components go here */}
</BrowserRouter>
  ```
`<BrowserRouter>` is a component provided by React Router that wraps your entire application. It enables the use of routing features and ensures that your application knows how to handle different URLs.

# `<Routes>`

```
<Routes>
   {/* Individual route configurations go here */}
</Routes>
  ```
`<Routes>` is a component that holds your route configurations. It acts as a container for defining the various routes in your application.

# `<Route>`

```
<Route path="/" element={<Home />} />
<Route path="About" element={<About />} />
<Route path="Contact" element={<Contact />} />
  ```
`<Route>` is used inside <Routes> to define specific routes and their corresponding components. In this example:

- The path / is associated with the Home component.
- The path /About is associated with the About component.
- The path /Contact is associated with the Contact component.

When a user navigates to different URLs, React Router will match the URL to the specified paths and render the corresponding components.

# `<Link>`

```
<li>
  <Link to={"/"}>
    <a className='cursor-pointer'>
      Home
    </a>
  </Link>
</li>
  ```
`<Link>` is a component provided by React Router for creating navigation links. In this example, a link to the `"Home"` page is created. When the link is clicked, the application will navigate to the specified URL (`/` in this case) and render the associated component (`<Home />`).