# CT tech test

I used CRA to start the project and [CSSModules](https://github.com/css-modules/css-modules) to style the elements. I started this project with TypeScript and used minimal other dependencies. I tried to keep the code as modular as possible and used generic components where I could. The UI design aims to be simple, clean and fluid. The code is highly extensible.

## Features

#### Typed schema

I wrote out types for what the API returns. This was helpful in building the components and passing useful information.

#### Fetching

I save the data.json locally, but read it as I would with `fetch`.

#### Loading screen

I purposefully delay the response to show a loading screen with multiple messages sent out to the end user.

#### Code re-use

I reused the same code for the small and large version of the car details. I recursively add the fullscreen mode to `FeedItem.tsx`.

#### Ordering

I abstracted the feed generation to `Feed.tsx`, which handles parsing and flattening of the API response and applying any user-defined orderings. Orderings can be ascending or descending, with the default being price ascending.

#### Animations

I added some animations when the UI reorders to make the interface more fluid to the end-user.

#### Shadow elements

Before the API loads, there is a shadow version of the car details to show the user the skeleton of the UI.

#### Testing

To show how testing would work in the app, I added a few tests and mock data to Feed.tsx, which is likely the most difficult component.

#### Mobile mode

Mobile mode is supported (i.e. it works) but it could look nicer as I was running out of time (I used CSS media queries).

## Instructions

`npm run test` to run the test "suite".

`npm run deploy` to deploy to GitHub Pages.

`npm run build` to get a deployment-ready build for production.
