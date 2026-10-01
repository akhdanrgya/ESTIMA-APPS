import { getAuth } from "@/server/auth";
async function handle(request: Request) {
  try { return await getAuth().handler(request); }
  catch {
    console.error("Authentication service unavailable. Check database and auth configuration.");
    return Response.json({ code: "AUTH_UNAVAILABLE", message: "Sign-in is temporarily unavailable." }, { status: 503 });
  }
}
export const GET = handle;
export const POST = handle;
