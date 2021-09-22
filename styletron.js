import { Client, Server } from 'styletron-engine-atomic';

const isClient = typeof window !== 'undefined';

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_');

export const styletron = isClient
  ? new Client({
      hydrate: getHydrateClass()
    })
  : new Server();
