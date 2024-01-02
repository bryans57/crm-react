# Customer Relationship Managment

## Learning

- React Router DOM
- React Hooks
- Tailwind CSS

### React Router DOM

I learned how to use React Router DOM to create a single page application. I use the `BrowserRouter` component to wrap the `App` component. I use the `Route` component to render the `Home` component when the path is `/` and the `NewClient` component when the path is `/clients/new`. I use the `Link` component to create a link to the `NewClient`, `Home` component and others.

I also learned that `NavLink` component, this component is similar to the `Link` component but it has a `activeClassName` prop that will add a class to the element when the path is active. But I don't use it because in some cases it not work as expected.

### React Hooks

- I learned how to use basic React Hooks and learn new hook called `useLocation` to get the current path.
- I learned how to use `useNavigate` hook to navigate to a path and return to the previous path more easily.
- I learned `redirect` but it's better use it with loader or actions
