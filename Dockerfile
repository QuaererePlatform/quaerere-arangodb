FROM arangodb:3.6
COPY setup_db.js /docker-entrypoint-initdb.d/
