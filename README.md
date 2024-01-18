# REACT
1)what is emmet
    Emmet is a plugin or developer tool kit that helps make your work faster and substantially enhances HTML and CSS workflows
    
2)Difference b/w library and framework?
     libraries target a specific functionality, while a framework tries to provide everything required to develop a complete 
     application.
     Library can applied to a small portion of applications also
     
3)what is cdn? why do we use it
   Content-delivery-network.
   dis adv: 1)we have to make a network call
             2)if the version changes we need to change the CDN links
             
4)what is cross-origin in a script tag

5)diff b/w react and react-dom
       
       react-dom is used to deal with browsers
6)what are async and defer

7)diff b/w react.development.js and react.production.js files via cdn

PARCEL:

  Features-
  
    1)hot module reloading- as fast u make a change to the code it will automatically change the browser without refreshing
    parcel uses file watching algo written in C++

    2)parcel caching  -faster builds
    
    3)Image optimization
    
    4)minification
    
    5)bundling
    
    parcel needs all other package dependencies to do all of these things
    
    6)consistent hashing
    
    7)code splitting
    
    8)differential bundling  -support old browsers
    
        -internet explorer
        
        -google chrome
        
   9)Good error-handling suggestions
   
   10)give the ability to host our app as HTTPS
   
   11)Tree shaking algo --remove unused code
   
JSX  - html like syntax but not HTML in javascript
JSX (transpiled before it reaches js engine)

JSX=>React.createElement=>React element(objct)=>Html ele(render)
Babel uses an abstract syntax tree(AST) 

Components
1)class --old way
2)functional --new way

functional component always starts with a capital letter

**COMPONENT COMPOSITION
    -- composing two components in one another
    ex:  const Title=()=><h2>This is title </h2>
         const Heading=()=>(
               <Title/>
               <h3>This is Heading</h3>
               )
    
**CONFIG DRIVEN UI
    --UI is driven by config/data. That means our UI is changed according to the data

REACT SLICK
  -- A slider library to make our react app much better 

exports-1)default-only 1 file is allowed to export default
        2)Named: can export more than 1 thing in a single file

ASSIGNMENT-2
   1) we should not touch/make any changes in package.lock.json. this file has locked versions of all the packages that we have installed and their dependency packages. If we change anything in  our package.lock  whole our app might break at different levels.
   2) As we keep locking all our packages and their dependencies in package-lock JSON  so there is no need to push our node modules in git.
   3) Browser list is most important to make run our app even in old browsers
Assignment-4
    1)Vdom is representaton of actual dom.
      Vdom is nothing but an object
      When we update anything then diff algo finds the difference between prev dom and the updated dom and then updates the actual dom
2 TYPES OF WEB ROUTING
   1) server-side routing(SSR)-> we need to make an API call to fetch the page and the whole application gets refreshed or loaded once again
   2) client-side routing(CSR)-> all components are already loaded no need to get pages from some other places. React is client-side routing and is also known as single page application bcoz everything is on only one page

CSR enables better UX compared to SSR bcoz we don't need load the entire doc from server  and wait for the request to succeed

createBrowserRouter takes 1)List of paths or 2)<Route path='' element={</>}/>
dynamic segments =>:   ex:'/prjcrs/:id'

