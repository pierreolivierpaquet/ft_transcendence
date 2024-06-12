
# https://hub.docker.com/_/python
# https://github.com/docker-library/python/blob/b968d488efc09fd34672fc6238182e1222ae005e/3.12/bullseye/Dockerfile
FROM python:3.12

WORKDIR /usr/src/app

# Required package(s) installation.
COPY ./tools/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Container's dependencie(s) installations.
COPY ./tools/dependencies.sh /usr/local/bin
RUN chmod +x /usr/local/bin/dependencies.sh && \
	/usr/local/bin/dependencies.sh

# # Specify the application source code to copy into the container.
# COPY . .

EXPOSE 8000

# Setting up ENTRYPOINT script.
COPY ./tools/entrypoint.sh /usr/local/bin
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["python", "./ft_transcendence/manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["tail", "-f", "/dev/urandom"]
