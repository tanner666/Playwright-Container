# Running Playwright in a Container:
## Playwright Commands:
- npm init playwright@latest
- npx playwright codegen http://localhost:3000/
- npx playwright test
  - options: --debug, --project-firefox, etc
- npx playwright show-report
## Docker Commands:
- docker build . --file Dockerfile.jammy -t <image_name>
  - builds image
- docker run -it -d --name <container_name> <image_name> /bin/bash
  - builds container
- docker exec -it <container_name> /bin/bash
  - use docker container terminal
- npx playwright test
  - run test inside of container  (after previous command)
