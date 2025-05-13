## TODO:

### Implement User-Friendly Timestamps

* **Task**: Currently, message timestamps are ISO strings. Refactor the `MessageItem` component to display timestamps in a more human-readable format (e.g., "10:30 AM" or relative time like "5 minutes ago").
* **Skills Shown**: Data manipulation, component props, date formatting libraries (or custom logic), UI improvement.

### Refactor Message Sending Logic into a Custom Hook

* **Task**: The `handleSendMessage` logic currently resides in `App.js`. Extract this logic (including generating new message ID, timestamp, and updating the `friends` state) into a custom hook (e.g., `useChatMessages`).
* **Skills Shown**: Custom hooks, separation of concerns, state management patterns, code reusability.

### Optimize Message List Rendering

* **Task**: If the `MessageList` or `MessageItem` components re-render unnecessarily when new messages are added or other state changes, apply `React.memo` to `MessageItem` and ensure any props (like event handlers) are stable using `useCallback`.
* **Skills Shown**: Performance optimization, understanding React's rendering behavior, `React.memo`, `useCallback`.

### Add PropType Validation (or Basic TypeScript Types)

* **Task**: Introduce `PropTypes` to key components like `ChatWindow`, `MessageList`, `MessageItem`, `Sidebar`, and `FriendListItem`. If using TypeScript, add basic type definitions instead.
* **Skills Shown**: Code robustness, debugging, understanding component APIs, `PropTypes` or TypeScript basics.

### Improve Accessibility: Keyboard Navigation for Sidebar

* **Task**: Ensure users can navigate through `FriendListItem`s using keyboard (up/down arrows) and select a friend with "Enter" or "Space". Add `tabIndex` and appropriate event handlers.
* **Skills Shown**: Accessibility (a11y), event handling, DOM manipulation/focus management.

### Convert Styling of One Component to CSS Modules or Styled-Components

* **Task**: Choose one component (e.g., `MessageItem` or `MessageInput`) and refactor its CSS from the global stylesheet to use CSS Modules or `styled-components`.
* **Skills Shown**: CSS-in-JS/scoping strategies, modern styling techniques, refactoring CSS.

### Disable Send Button When Input is Empty

* **Task**: Modify the `MessageInput` component so the "Send" button is disabled if the text input is empty or only contains whitespace.
* **Skills Shown**: Conditional rendering/styling, component state management, basic form validation UX.

### Write More Specific Unit Tests

* **Task**: Current tests focus on `App.js`. Write unit tests for `FriendListItem` to verify:

  * It renders friend’s name and last message correctly.
  * It triggers `onSelectFriend` callback on click.
  * It handles hover style changes if possible using React Testing Library (RTL).
* **Skills Shown**: RTL, unit testing principles, component-level testing, mocking callbacks.

### Simulate "Receiving" a New Message (Client-Side)

* **Task**: After sending a message, simulate a "reply" from the friend after 1–2 seconds. The message should appear in the chat window and update the sidebar.
* **Skills Shown**: State management, `useEffect` with cleanup, `setTimeout`, simulating async behavior.

### Introduce React Context for `currentUser`

* **Task**: Refactor to use the React Context API to provide `currentUser` data app-wide, avoiding prop drilling from `App` to `Sidebar` and `ChatWindow`.
* **Skills Shown**: React Context API, state management, app architecture, avoiding prop drilling.

---

## Follow Up Concepts

### Data Fetching & API Interaction

* **What it is**: Fetching data from APIs (e.g., REST, GraphQL).
* **Why it's important**: Enables dynamic content.
* **Key Concepts**: `axios`, `fetch`, async/await, loading/error states, transforming/displaying data.
* **React Tools**: React Query (TanStack Query), SWR.

### Client-Side Routing

* **What it is**: Enables multi-view SPAs.
* **Why it's important**: For navigation without page reloads.
* **Key Concepts**: `react-router-dom`, route definitions, nested routes, protected routes, programmatic navigation.

### Advanced State Management

* **What it is**: Centralized and complex state solutions.
* **Why it's important**: Needed for large-scale apps.
* **Key Concepts**: `useReducer`, Redux (actions, reducers, store), Zustand, Recoil, Jotai.

### Form Handling & Validation (Advanced)

* **What it is**: Managing complex forms with validation logic.
* **Why it's important**: Critical for user input UX.
* **Key Concepts**: Controlled vs. uncontrolled components, error handling, accessibility.
* **Libraries**: React Hook Form, Formik.

### Error Boundaries

* **What it is**: Catch runtime errors in React components.
* **Why it's important**: Prevents app crashes and improves UX.
* **Key Concepts**: `componentDidCatch`, fallback UI, error logging.

### Performance Optimization (Deeper Dive)

* **What it is**: Strategies for faster rendering and responsiveness.
* **Why it's important**: Smooth UX on all devices.
* **Key Concepts**:

  * Code Splitting (`React.lazy`, `Suspense`)
  * Lazy Loading (components, images)
  * List Virtualization (`react-window`, `react-virtualized`)
  * Profiling (React DevTools)
  * Bundle size analysis

### Working with Browser APIs & Web Platform Features

* **What it is**: Utilizing native browser features.
* **Why it's important**: Adds advanced capabilities.
* **Key Concepts**: `localStorage`, Intersection Observer, WebSockets, Geolocation API.

### Authentication & Authorization Concepts (Client-Side)

* **What it is**: Client-side security mechanisms.
* **Why it's important**: Protects data and users.
* **Key Concepts**: JWTs, storing tokens, protected routes, session management.

### Build Process & Tooling (Conceptual Understanding)

* **What it is**: Under-the-hood tooling in modern React apps.
* **Why it's important**: Helps debugging and optimization.
* **Key Concepts**: Webpack, Babel, tree shaking, environment variables, bundling.

### Testing Asynchronous Operations & API Mocks

* **What it is**: Testing components that fetch or depend on async data.
* **Why it's important**: Ensures feature reliability.
* **Key Concepts**: Mocking APIs (`jest.mock`, MSW), async RTL queries (`waitFor`, `findBy*`), loading/error states.

### WebSockets / Real-time Communication

* **What it is**: Real-time bi-directional communication.
* **Why it's important**: Used in chat, notifications, live updates.
* **Key Concepts**: WebSocket API, Socket.IO, connection lifecycle, event handling.

### Advanced JavaScript (ES6+)

* **What it is**: Modern JS syntax and features.
* **Why it's important**: Cleaner, efficient React code.
* **Key Concepts**: Promises, async/await, array methods, destructuring, spread/rest, ESM, classes, iterators.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
