# nlocascio-www

This is the website source code for [https://nlocascio.com/](https://nlocascio.com/).

It is a static HTML site built using [Gridsome](https://gridsome.org/) and deployed via AWS S3 & CloudFront.

## External dependencies

npm, Node, & aws-cli.

## Project Setup

```sh
make install
```

## Development

```sh
make run
```

## Build & Deploy

See `.envrc.example` for the environment variables which must be set before deploying.

```sh
make build deploy
```
