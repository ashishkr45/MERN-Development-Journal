## Linke
We'll use "Links" if the user want to brouse throught different pages
```javaScript
	<Link to="/neet/online-class-11">Class 11</Link>
```
In this to will contain the routing address and we'll wrap the name what we want to be visible on the page.

# Here way are we not using the anchor tag for same pourpous
- The <a> will be getting the html form the backend whenever we are using the tag, which breaks the major function of react *Single page applications*

## useNavigate Hook
to implement custom logic if we want the use to go to a certain page after staying at a page for few seconds
```javaScript
	function Class11Program() {
	const navigate = useNavigate();
	function redirectUser() {
		navigate("/");
	}

	return <div>
		Class 11 neet focks cum here!!! <br /><br />
		<button onClick={redirectUser}>LOJ</button>
	</div>
	}
```
Whenever the user click the LOJ button the user is redirected to the landing page.

## Implementing a 404 page
If the user is trying to go to some random route which we have not defined we can use this ```/*``` route to redirect the user to a page which we have defined to handel 404 routes
```javaScript
	<Route path="*" element={<NoPage />}/>
```
We can further design this **NoPage** routeComponent to handel those cases

## Layouts
Layouts let you wrap every route inside a certain component (think headers and footers)
```javaScript
	<Route path="/" element={<Layout />}>
		<Route index element={<Home />} />
		<Route path="blogs" element={<Blogs />} />
		<Route path="contact" element={<Contact />} />
		<Route path="*" element={<NoPage />} />
    </Route>
```