/* eslint-disable @next/next/no-img-element */
import { App } from "@lib/apps";
import { AppStore, GooglePlay } from "@lib/components";

type Props = {
  app: App;
};

export function DownloadButtons(props: Props) {
  return (
    <div className="flex flex-row md:flex-col justify-around gap-y-6">
      {props.app.stores?.google_play && (
        <GooglePlay
          className="h-12 md:w-40 md:h-auto"
          href={props.app.stores?.google_play}
        />
      )}
      {props.app.stores?.app_store && (
        <AppStore
          className="h-12 md:w-40 md:h-auto"
          href={props.app.stores?.app_store}
        />
      )}
    </div>
  );
}
