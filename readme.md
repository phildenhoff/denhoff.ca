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
- make a new file in `public/.well-known/matrix/server` with the content
  - ```json
    {
        "m.server": "matrix.denhoff.ca:8448"
    }
    ```
- make a new file in `public/.well-known/matrix/client` with content:
    ```json
    {
        "m.homeserver": {
            "base_url": "https://matrix.denhoff.ca"
        },
        "m.identity_server": {
            "base_url": "https://matrix.denhoff.ca"
        }
    }
    ```
- run `firebase deploy`
