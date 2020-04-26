FROM gitpod/workspace-full

## Avoid using 'root', as it's bad for your dev environments!
USER gitpod

RUN npm install pnpm
