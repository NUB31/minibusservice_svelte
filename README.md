## Developing

Install dependencies, create env file, generate prisma client and start the development server with the commands below

```bash
# Install dependencies
npm install

# Create env
touch .env

# Add the mysql connection string to the .env file
echo 'DATABASE_URL="mysql://{your_username}:{your_password}@{your_database_hostname}:{your_port}/{your_database}"' > .env

# Generate the prisma client
npx prisma generate

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
