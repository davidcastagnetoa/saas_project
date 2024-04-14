import React from "react";
import { CONNECTIONS } from "@/lib/constant";
import { currentUser } from "@clerk/nextjs";
import ConnectionCard from "./_components/connection-card";
// import ConnectionCard from './_components/connection-card'
// import { onDiscordConnect } from './_actions/discord-connection'
// import { onNotionConnect } from './_actions/notion-connection'
// import { onSlackConnect } from './_actions/slack-connection'
// import { getUserData } from './_actions/get-user'

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Connections = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect these apps regularly to
          refresh verification
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              //   connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
