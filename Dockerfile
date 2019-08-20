FROM arangodb:3.4
COPY setup_db.js /docker-entrypoint-initdb.d/
