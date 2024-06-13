#!/bin/bash

# Creates the application. (not the main project).
cd ./ft_transcendence
python manage.py startapp avocado
cd -

exec $@
