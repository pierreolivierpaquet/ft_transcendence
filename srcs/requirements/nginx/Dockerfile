
# https://hub.docker.com/_/nginx
FROM nginx:1.26-alpine-slim

WORKDIR /

COPY ./tools/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# # Starts thw nginx server as a foreground process.
# CMD ["nginx", "-g", "daemon off"]

# UNCOMMENT for debugging purposes.
CMD ["tail", "-f", "/dev/urandom"]
