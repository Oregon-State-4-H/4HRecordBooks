// ./src/app/api/auth/[auth]/route.js

import { handleAuth } from '@auth0/nextjs-auth0';



export const GET = handleAuth(async (req, res) => {
  console.log("=====in route.js")
});
