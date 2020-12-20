#!/usr/bin/env bash

inGlitch=${PROJECT_ID+true}

if [ "$NODE_ENV" = "production" ]; then
  if [ "$REBUILD" = "true" ] || [ ! -d "dist" ]; then 
    echo Building Project...
    rimraf dist
    npm run build; 
  fi;
  echo FIRECAKE$inGlitch
  if [ "$inGlitch" = "true" ]; then
    echo BLAR${APP_TYPES_DIR}
    cd dist
    ${APP_TYPES_DIR}/static/start.sh
  fi;
else
  rimraf dist
  npm run dev
fi