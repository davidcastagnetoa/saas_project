This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Multiple Selector UI
https://shadcnui-expansions.typeart.cc/docs/multiple-selector

[Youtube Tutorial](https://youtu.be/XkOXNlHJP6M?si=ELlG8UALrCBvI1ST&t=11827)
[Github Repository](<https://github.com/webprodigies/fuzzie-production/blob/main/src/app/(main)/(pages)/connections/page.tsx>)

https://app.uploadcare.com/ --> To Upload Images for user settings
https://console.neon.tech/ --> To create DB and tables with Prisma
https://dashboard.clerk.com/ --> User & Authentication > Social Connections

COMMANDS FOR PRISMA
npx prisma generate
npx prisma db push
npx prisma studio --> http://localhost:5555

https://dashboard.ngrok.com/
https://dashboard.ngrok.com/get-started/setup/windows

COMMANDS FOR ngrok console
ngrok config add-authtoken
ngrok http http://localhost:3000 --> copy link and create a webhook endpoint in dashboard/clerk webhooks
