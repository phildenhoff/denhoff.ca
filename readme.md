# denhoff.ca

A public-facing website for me.

## Deploy instructions

### Prerequisites

First,
- install [Hugo](https://gohugo.io)
  - NixOS: `nix-env -iA nixos.hugo`
- instal NodeJS / npm
- install `firebase-tools`
- clone & build [start-page](https://github.com/phildenhoff/start-page)

### Building
- run `hugo`
- Copy the contents of  `start-page/dist` into `public/start`
- run `firebase deploy`
