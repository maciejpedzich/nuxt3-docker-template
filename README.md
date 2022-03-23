# Nuxt 3 x Docker template

Minimal Nuxt 3 starter application including a persisted Pinia store and Docker image setup

## ⚠️ DISCLAIMER ⚠️

Nuxt 3 is **still in development**, therefore it is not recommended for use in production, and **neither is this project**. I am **not** a member of Nuxt/Docker development team or associated with either of these in any other way.

## Local development - Nuxt

We recommend to look at the [documentation](https://v3.nuxtjs.org).

### Setup

Make sure to install the dependencies

```bash
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Local development - Docker

You can pull the latest version of the image by running:

```bash
docker pull maciejpedzich/nuxt3-docker-template:latest
```

### Building the image

Once in the project's directory in your CLI, simply run: 

```bash
docker build .
```

### Running a container with locally built image

If you want to start the app on, say `http://localhost:8080` and in detached mode, use the following command:

```bash
docker run -p 8080:3000 -d LOCALLY_BUILT_IMAGE_ID
```

## License

MIT
