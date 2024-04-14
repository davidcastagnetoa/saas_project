import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/clerk-webhook",
    "/api/drive-activity/notification",
    "/api/payment/success",
  ],
  ignoredRoutes: [
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "/api/flow",
    "/api/cron/wait",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
// https://dashboard.clerk.com/ --> User & Authentication > Social Connections

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly

// Authorized redirect URI
// https://engaging-sheepdog-81.accounts.dev/sign-in
