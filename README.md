# Playwright-Container
# playwright commands:
# npm init playwright@latest
# npx playwright codegen http://localhost:3000/
# npx playwright test
# options: --debug, --project-firefox, etc
# npx playwright show-report
# Docker stuff:
# docker build . --file Dockerfile.jammy -t playwright
# docker run -it -d --name playwrightcontainer playwright /bin/bash
# docker exec -it playwrightcontainer /bin/bash
# npx playwright test