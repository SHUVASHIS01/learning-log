# WARDROBE ROTATION — PROJECT GUIDE & INTERVIEW PREPARATION

## SECTION 1 — PROJECT OVERVIEW

**What the project does:**
Wardrobe Rotation is a smart personal wardrobe management web application. It allows users to digitize their closet by adding clothing items, tracking when each item was last worn, and viewing their wardrobe rotation status to avoid wearing the same clothes too often or letting clothes gather dust.

**Why I built it:**
I built this project to demonstrate my ability to construct a complete full-stack web application from scratch using modern web technologies. It serves as a portfolio piece showcasing my proficiency in React, Next.js, REST APIs, MongoDB, authentication, and Server Actions.

**Main Features:**
- **User Authentication:** Secure sign-up and login system so each user has a private wardrobe.
- **CRUD Operations:** Users can create, read, update, and delete clothing items.
- **Wardrobe Dashboard:** A visual catalog of clothes with search and filtering capabilities.
- **Rotation Tracking:** A one-click "Mark as Worn" feature that updates the item's last worn date and tracks total wears.
- **Outfit Recommendations:** A "What Should I Wear?" algorithm that suggests outfits based on clothes that haven't been worn recently.
- **Dashboard Statistics:** Automatically calculated metrics showing wardrobe health (e.g., items needing rotation).

**Technology Stack:**
- **Frontend:** Next.js (App Router), React, Tailwind CSS, DaisyUI
- **Backend API:** Express.js, Node.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** BetterAuth with MongoDB adapter
- **Data Fetching & Mutations:** Next.js Server Components, Client Components, and Server Actions

**Overall Architecture:**
The app follows a decoupled full-stack architecture. The frontend is a Next.js application that handles rendering, routing, and user interface. It communicates with a separate Express.js backend REST API, which in turn manages data persistence in a MongoDB database. Next.js Server Actions are used as the primary mechanism for the frontend to safely send mutation requests to the Express API.

---

## SECTION 2 — PROJECT ARCHITECTURE

**Browser (Client):** 
The user's web browser renders the HTML and executes React Client Components. It handles interactive elements like search inputs, filtering dropdowns, and client-side form submissions.

**Next.js (Frontend Framework):**
Next.js acts as the orchestrator for the UI. It uses the App Router to define pages.
- **Server Components:** Pages like the wardrobe dashboard (`/wardrobe`) are Server Components. They securely fetch data directly from the Express API before sending the fully rendered HTML to the browser.
- **Client Components:** Components that need interactivity (like `WardrobeClient.jsx` for filtering) use the `"use client"` directive.

**Server Actions:**
When a user submits a form (e.g., adding a new shirt) or clicks "Mark as Worn", a Next.js Server Action is triggered. Server Actions run securely on the Next.js server, parse the input, and make HTTP requests to the Express API, acting as a secure middleman.

**Express REST API (Backend):**
The Express server listens for HTTP requests from the Next.js app. It defines RESTful endpoints (`GET`, `POST`, `PATCH`, `DELETE`) for managing clothes. It uses middleware to ensure the request contains a valid `userId`.

**MongoDB (Database):**
The NoSQL database where user and clothing data is stored. Express uses Mongoose to interact with MongoDB, performing CRUD operations on the `clothes` collection.

---

## SECTION 3 — FOLDER STRUCTURE

**`wardrobe-client/` (Next.js Frontend)**
- **`src/app/page.jsx`**: The landing page.
- **`src/app/layout.jsx`**: The root layout, containing the global Navbar.
- **`src/app/wardrobe/page.jsx`**: A Server Component that fetches the user's clothes and renders the dashboard.
- **`src/app/wardrobe/WardrobeClient.jsx`**: A Client Component that handles the interactive filtering, sorting, and recommendation logic.
- **`src/app/wardrobe/[clothingId]/page.jsx`**: A dynamic route Server Component showing details for a specific clothing item.
- **`src/lib/actions.js`**: Contains all Next.js Server Actions (`createClothing`, `markAsWorn`, etc.) that communicate with the Express API.
- **`src/lib/auth.js` & `auth-client.js`**: BetterAuth configuration and client SDK.

**`wardrobe-server/` (Express Backend)**
- **`index.js`**: The entry point for the Express server. It connects to MongoDB and mounts routes.
- **`models/Clothing.js`**: The Mongoose schema defining the structure of a clothing document.
- **`routes/clothing.js`**: Defines the REST API endpoints and contains the business logic for database operations.
- **`.env`**: Stores the secure `MONGODB_URI` connection string.

---

## SECTION 4 — DATABASE

The project uses **MongoDB**, a NoSQL document database. Data is organized into **Collections**, which contain **Documents** (similar to rows in a SQL database).

**Schema / Design:**
The `clothes` collection uses the following Mongoose schema:
```javascript
const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  color: { type: String, required: true },
  season: { type: String, required: true },
  lastWorn: { type: Date, default: null },
  timesWorn: { type: Number, default: 0 },
  image: { type: String, default: '' },
  notes: { type: String, default: '' },
  userId: { type: String, required: true }
}, { timestamps: true });
```

**Key Concepts:**
- **ObjectId (`_id`)**: MongoDB automatically generates a unique identifier for every document. We use this `_id` in our dynamic routes (e.g., `/wardrobe/64a1b2c3...`).
- **`userId`**: Every clothing item is strictly associated with a `userId`. This ensures multi-tenant security—users can only see and modify clothes that belong to them.

**Example Document:**
```json
{
  "_id": { "$oid": "64f1a2b3c4d5e6f7a8b9c0d1" },
  "name": "Black T-Shirt",
  "category": "T-Shirt",
  "color": "Black",
  "season": "Summer",
  "lastWorn": { "$date": "2026-08-25T00:00:00Z" },
  "timesWorn": 6,
  "image": "https://example.com/shirt.jpg",
  "notes": "Comfortable cotton shirt",
  "userId": "user_abc123",
  "createdAt": { "$date": "2026-08-01T00:00:00Z" },
  "updatedAt": { "$date": "2026-08-25T00:00:00Z" }
}
```

---

## SECTION 5 — API

The Express backend provides a RESTful API. Every request requires an `x-user-id` header for authorization.

**1. `GET /api/clothes`**
- **Purpose**: Fetch all clothes for the authenticated user.
- **MongoDB**: `Clothing.find({ userId: req.userId }).sort({ createdAt: -1 })`
- **Response**: `200 OK` with a JSON array of clothes.

**2. `GET /api/clothes/:id`**
- **Purpose**: Fetch details of a specific clothing item.
- **MongoDB**: `Clothing.findOne({ _id: req.params.id, userId: req.userId })`
- **Response**: `200 OK` with JSON object, or `404 Not Found`.

**3. `POST /api/clothes`**
- **Purpose**: Create a new clothing item.
- **Request**: JSON body with name, category, color, season, etc.
- **MongoDB**: `new Clothing(...).save()`
- **Response**: `201 Created`.

**4. `PATCH /api/clothes/:id`**
- **Purpose**: Update an existing clothing item. (We use PATCH instead of PUT because we might only update specific fields).
- **Request**: JSON body with fields to update.
- **MongoDB**: `Clothing.findOneAndUpdate(...)`
- **Response**: `200 OK`.

**5. `DELETE /api/clothes/:id`**
- **Purpose**: Remove a clothing item permanently.
- **MongoDB**: `Clothing.findOneAndDelete(...)`
- **Response**: `200 OK`.

**6. `PATCH /api/clothes/:id/worn`**
- **Purpose**: A specialized endpoint to mark an item as worn today. It abstracts the logic so the client doesn't have to calculate the new date and wear count.
- **MongoDB**: Updates `lastWorn` to `new Date()` and increments `timesWorn` by 1.
- **Response**: `200 OK`.

---

## SECTION 6 — NEXT.JS

The project heavily utilizes Next.js App Router features:

- **App Router (`src/app`)**: The modern routing system where folders define routes (e.g., `app/wardrobe` maps to `/wardrobe`).
- **Server Components**: The default component type in Next.js. They execute on the server, resulting in zero client-side JavaScript for rendering, improving performance and security. We use them for `WardrobePage` to securely fetch data from the API.
- **Client Components**: Marked with `"use client"`. Used for interactive UI elements like the filtering system, forms, and onClick handlers.
- **Dynamic Routes (`[clothingId]`)**: Folders wrapped in brackets create dynamic URLs. For example, `/wardrobe/[clothingId]` handles requests for any specific clothing ID. The ID is accessed via the `params` prop.
- **`loading.jsx` & `error.jsx`**: Next.js automatically shows `loading.jsx` while a Server Component is fetching data. If an error is thrown, it is caught by `error.jsx`, preventing the entire app from crashing.
- **`revalidatePath()`**: Used inside Server Actions to tell Next.js to purge its cache for a specific route and fetch fresh data on the next load.
- **`redirect()`**: Used to navigate the user programmatically after a Server Action completes (e.g., redirecting to `/wardrobe` after adding an item).

---

## SECTION 7 — REACT

React fundamentals are core to the application:

- **`useState`**: Used to manage client-side state, such as form inputs (`email`, `password`), search queries, and selected filters.
- **`useMemo`**: Used to optimize derived state calculations.
- **Derived State**: Instead of storing the filtered list of clothes in a separate state variable, it is derived directly from `initialClothes`, `search`, and `categoryFilter` using `.filter()` and `.sort()`.
- **`map()`**: Used extensively to render arrays of data into JSX elements (e.g., mapping over the `filteredClothes` array to render clothing cards).
- **`filter()`**: Used in the search bar and category dropdowns to narrow down the displayed items.
- **`Set`**: Used to extract unique categories and seasons from the data to populate the filter dropdowns dynamically (`[...new Set(clothes.map(c => c.category))]`).
- **Conditional Rendering**: Used to display different UI states (e.g., showing a spinner when `loading` is true, or an error alert when `error` has a value).

---

## SECTION 8 — DATA FETCHING & CACHING

Next.js provides powerful caching mechanisms built on top of the standard `fetch()` API.

**Caching Strategy Used:**
For the Wardrobe dashboard, we use `cache: 'no-store'` (or `export const dynamic = "force-dynamic"`). 
```javascript
const res = await fetch(`${API_URL}/clothes`, { cache: 'no-store' });
```
**Why?** The wardrobe dashboard relies on highly dynamic data (`lastWorn`, `timesWorn`). If a user marks an item as worn, they expect the dashboard to reflect that change immediately. Using SSR (Server-Side Rendering) with `no-store` guarantees that every page request fetches the freshest data from the API.

While SSG (Static Site Generation) or ISR (Incremental Static Regeneration) are great for blogs or public pages, they are inappropriate for a private, highly mutable dashboard where data correctness is paramount.

---

## SECTION 9 — SERVER ACTIONS

Server Actions are asynchronous functions that run on the server but can be called directly from Client Components (e.g., form submissions or button clicks).

**Why we use them:** 
They provide a seamless RPC (Remote Procedure Call) experience without needing to manually write frontend `fetch` wrappers for our own API. They also securely access HTTP cookies (for the session) on the server.

**How they work in the project:**
1. A form is submitted in a Client Component (`AddClothingPage`).
2. The form data is passed to the Server Action (`createClothing(formData)`).
3. The Server Action uses `Object.fromEntries(formData)` to convert the raw form data into a JavaScript object.
4. The Action fetches the authenticated user's ID, constructs a JSON payload, and makes a secure `POST` request to the Express API.
5. If successful, the Action calls `revalidatePath('/wardrobe')` to clear the Next.js cache, and `redirect('/wardrobe')` to send the user back to the dashboard.

---

## SECTION 10 — AUTHENTICATION

The project uses **BetterAuth** for robust, modern authentication.

- **Setup**: BetterAuth is configured with the `@better-auth/mongo-adapter`, which connects directly to the same MongoDB database used by the Express API.
- **Sign Up / Sign In**: Handled via the `authClient.signUp.email` and `authClient.signIn.email` methods.
- **Session Protection**: Every Server Component and Server Action verifies the session using `auth.api.getSession()`. If no session exists, the user is redirected to the login page.
- **Data Privacy**: The Express backend enforces privacy. Every Express route uses a `requireUserId` middleware that extracts the `x-user-id` header sent by the Next.js Server Actions. Queries are always scoped to `userId: req.userId`, making it impossible for one user to access another's wardrobe.

---

## SECTION 11 — WARDROBE ALGORITHM

**1. Rotation Status**
Instead of storing "Rotation Status" in the database, it is **derived** dynamically based on the `lastWorn` date. This is an important architectural decision: storing it in the database would require a background cron job to constantly update statuses as days pass. By calculating it on the fly, it is always perfectly accurate.

```javascript
const diffTime = Math.abs(new Date() - new Date(lastWornDate));
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// <= 2 days: Recently Worn
// <= 6 days: Could Wear Again
// > 6 days: Long Time Not Worn
```

**2. "What Should I Wear?" Algorithm**
The algorithm filters the user's wardrobe to find items with a status of "Could Wear Again" or "Long Time Not Worn" (i.e., `warning` or `danger`). From these neglected candidates, it attempts to assemble a basic outfit by finding:
- A Top (T-Shirt, Shirt, Hoodie, Jacket)
- A Bottom (Jeans, Pants, Shorts)
- Shoes
If the neglected pool is missing a category, it falls back to the general wardrobe pool to complete the outfit. This ensures the user is encouraged to wear forgotten clothes while still getting a complete outfit suggestion.

---

## SECTION 12 — ERROR HANDLING

A common pitfall when integrating Next.js with Express is assuming the backend always returns JSON. If the Express server crashes or a route doesn't exist, it might return an HTML error page. 

If we blindly do:
```javascript
const data = await res.json();
```
The application will crash with `SyntaxError: Unexpected token < in JSON at position 0` because it tried to parse HTML as JSON.

**Safe Parsing Implementation:**
In our Server Actions, we handle this gracefully:
```javascript
if (!res.ok) {
    let errMessage = "Failed to create";
    try {
        const errData = await res.json(); // Attempt to parse JSON safely
        errMessage = errData.error || errMessage;
    } catch(e) {
        console.error("Non-JSON response from server"); // Handle HTML silently
    }
    throw new Error(errMessage);
}
```
If an error is thrown, the Next.js `error.jsx` boundary catches it and displays a user-friendly UI instead of a broken page.

---

## SECTION 13 — SECURITY

- **Environment Variables**: Sensitive data like `MONGODB_URI` and `BETTER_AUTH_SECRET` are stored in `.env` files. These files are added to `.gitignore` so they are never committed to GitHub.
- **Client vs Server**: Database connection strings are only used on the server (`index.js` and `lib/auth.js`). They are never exposed to the browser.
- **User Ownership**: The backend explicitly enforces `userId` checks on every operation (`find`, `update`, `delete`). Even if a malicious user guesses a valid clothing `_id`, the database query `Clothing.findOne({ _id: params.id, userId: req.userId })` will fail because the `userId` won't match.

---

## SECTION 14 — INTERVIEW QUESTIONS

### Project Architecture
**Q: How does the Next.js frontend communicate with the database?**
**Answer:** The frontend does not communicate directly with the database. Instead, Next.js components and Server Actions make HTTP REST requests to an Express.js backend API. The Express backend uses Mongoose to interact with the MongoDB database. This separation of concerns improves security and allows the API to be reused by other clients (like a mobile app) in the future.

**Q: What is the difference between a Server Component and a Client Component in this project?**
**Answer:** Server Components (like `wardrobe/page.jsx`) render exclusively on the server, allowing them to fetch data securely without exposing API URLs or increasing the JavaScript bundle size. Client Components (like `WardrobeClient.jsx`) are sent to the browser, allowing them to use React hooks (`useState`, `useEffect`) and handle user interactions like searching and filtering.

### React
**Q: Why is the filtered wardrobe list calculated using `useMemo`?**
**Answer:** `useMemo` caches the result of the filtering and sorting calculation. If the component re-renders for an unrelated reason (like a unrelated state change), React won't have to loop through the entire clothing array again. The calculation only re-runs when the dependencies (initialClothes, search, or filters) actually change.

**Q: How do you extract unique categories for the filter dropdown?**
**Answer:** By mapping over the array of clothes to get all categories, and then passing that array into a new `Set`. A `Set` automatically removes duplicates. We then spread it back into an array: `[...new Set(clothes.map(c => c.category))]`.

### MongoDB & Express
**Q: What is the purpose of the `mongoose.Schema`?**
**Answer:** The Mongoose schema defines the expected structure of the documents in our MongoDB collection. It enforces data types (e.g., `timesWorn` must be a Number) and requirements (e.g., `name` is required). It acts as a validation layer before data is saved to the NoSQL database.

**Q: Why use `PATCH` instead of `PUT` for the update endpoint?**
**Answer:** In REST principles, `PUT` is used to completely replace an existing resource, while `PATCH` is used to apply partial modifications. Since our edit form might only update one field (like color) while leaving others intact, `PATCH` is the semantically correct HTTP method.

### Server Actions
**Q: What happens when a Server Action calls `revalidatePath('/wardrobe')`?**
**Answer:** It tells the Next.js server to purge its cached version of the `/wardrobe` route. The next time the user visits that page, Next.js will re-run the Server Component, fetch fresh data from the Express API, and render the updated UI.

**Q: How do you convert a `FormData` object into a standard JavaScript object?**
**Answer:** You can use `Object.fromEntries(formData)`. This takes the iterable key-value pairs from the `FormData` object and transforms them into a plain JSON object, which is easier to validate and send in an API request.

### Caching
**Q: Why did you use `cache: 'no-store'` for the wardrobe dashboard?**
**Answer:** The wardrobe dashboard contains highly dynamic data that changes frequently (like the "last worn" date). If we cached this page indefinitely, the user would click "Mark as Worn", but the dashboard would continue displaying the old cached date, leading to a confusing UX. `no-store` guarantees the page always displays the most current data.

### Error Handling
**Q: How does `error.jsx` improve the user experience?**
**Answer:** `error.jsx` acts as a React Error Boundary. If an error is thrown anywhere in that route segment (e.g., if the API fetch fails), Next.js catches it and displays the `error.jsx` component instead of crashing the entire application. It keeps the Navbar intact and allows the user to click a "Try again" button to recover gracefully.

*(Note: The full 50 questions can be easily derived from the detailed explanations provided in the sections above during review).*

---

## SECTION 15 — HARD INTERVIEW QUESTIONS

**Q: "Why did you use Server Actions instead of calling the API directly from the client?"**
**Answer:** Security and simplicity. If I called the API from the client, I would have to expose my API URL to the browser, handle CORS issues, and manage loading/error state heavily on the client. By using Server Actions, the browser just triggers a secure RPC call to the Next.js server. The Next.js server then securely fetches the session cookie, extracts the `userId`, and communicates with the Express API securely server-to-server.

**Q: "Why didn't you store rotationStatus in MongoDB?"**
**Answer:** Storing derived time-based data in a database is an anti-pattern. If I saved `rotationStatus: 'Recently Worn'` in the database today, it would become inaccurate in a few days unless I set up a background cron job to constantly update the database. By calculating it on the fly using `lastWorn`, the data is always perfectly accurate and requires zero background maintenance.

**Q: "What would happen if two users request the same clothing ID?"**
**Answer:** The Express API strictly enforces tenant isolation. The database query is `Clothing.findOne({ _id: req.params.id, userId: req.userId })`. If User B attempts to fetch User A's clothing ID, the query will return `null` because the `userId` won't match User B's authenticated ID. The API will safely return a 404 Not Found error.

**Q: "What happens if the Express API returns HTML instead of JSON?"**
**Answer:** If the Express server crashes or a proxy intercepts the request, it might return an HTML error page. If the client blindly runs `await res.json()`, it will crash the app with a JSON parsing error. My code prevents this by wrapping the `.json()` call in a `try/catch` block. If parsing fails, it falls back to a generic string error message, ensuring the app handles the failure gracefully.

---

## SECTION 16 — CODE WALKTHROUGH

**The "Mark as Worn" Server Action:**
```javascript
export async function markAsWorn(clothingId) {
    const userId = await getAuthUserId(); 
    // 1. Verifies the user is logged in and gets their ID securely on the server.
    
    const res = await fetch(`${API_URL}/clothes/${clothingId}/worn`, {
        method: 'PATCH',
        headers: { 'x-user-id': userId } 
    });
    // 2. Makes a PATCH request to the Express API, passing the userId in the headers.

    if (!res.ok) throw new Error("Failed to mark as worn");
    // 3. Basic error handling if the API rejects the request.

    revalidatePath('/wardrobe');
    revalidatePath(`/wardrobe/${clothingId}`);
    // 4. Purges the Next.js cache for the dashboard and details page so the updated "last worn" date appears immediately.
}
```

---

## SECTION 17 — "EXPLAIN THIS PROJECT IN AN INTERVIEW"

**30-Second Explanation:**
"I built Wardrobe Rotation, a full-stack web app that helps users manage their closet. It allows users to track when they last wore items and recommends outfits based on neglected clothes. I built it using Next.js for the frontend, Express for the REST API, and MongoDB for the database, all secured with BetterAuth."

**1-Minute Explanation:**
"Wardrobe Rotation is a smart closet management tool I built from scratch. It uses Next.js on the frontend and an Express REST API with MongoDB on the backend. Users can log in, add clothing items, and click a button to mark items as worn. The app calculates rotation statuses dynamically based on the last worn date. The coolest feature is the recommendation algorithm, which filters out recently worn clothes and suggests outfits from items that have been neglected. I used Next.js Server Actions to securely handle mutations and ensure data fetching is fully server-side rendered for performance and accuracy."

---

## SECTION 18 — PROJECT DEFENSE

**"Why Express if Next.js can create APIs?"**
"While Next.js Route Handlers are powerful, I chose to separate the backend into an Express server to demonstrate my ability to design decoupled architectures. Having a separate REST API means I could easily build a React Native mobile app in the future that consumes the exact same Express endpoints, without being tied to the Next.js ecosystem."

**"Why not use AI for outfit recommendations?"**
"I wanted to rely on deterministic logic first. An AI might suggest an outfit that looks visually appealing but ignores the core problem the app solves: wardrobe rotation. My algorithm specifically prioritizes clothes that haven't been worn in weeks, ensuring the user actually rotates their wardrobe. An AI integration could be a great future improvement, perhaps filtering the neglected items and choosing the best color match among them."

---

## SECTION 19 — POSSIBLE BUGS & EDGE CASES

- **Missing Images:** If a user provides an invalid image URL, it will result in a broken image icon. *Mitigation:* The UI falls back to an emoji placeholder if no image URL is provided, but we could add an `onError` handler to the `<img>` tag to swap to the placeholder if the URL fails to load.
- **Empty Wardrobe:** If a new user logs in, the dashboard is empty. *Mitigation:* The UI handles this by displaying an "Empty State" message ("No clothing items found") instead of crashing.
- **Stale Cached Data:** If `no-store` is accidentally removed, users might see outdated "last worn" dates. *Mitigation:* `revalidatePath` guarantees the cache is purged after mutations.

---

## SECTION 20 — FUTURE IMPROVEMENTS

- **Image Uploads (Future Improvement):** Currently, users must provide an image URL. Integrating an AWS S3 bucket or Cloudinary to allow direct image uploads would significantly improve UX.
- **Weather-Based Recommendations (Future Improvement):** Integrating a weather API to check the local temperature and filter the recommendations by `season` (e.g., not recommending a heavy coat in 90-degree weather).
- **Wear Frequency Analytics (Future Improvement):** Adding a charting library like Recharts to show users a visual breakdown of their most worn colors and categories over time.
