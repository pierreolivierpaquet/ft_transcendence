#!/bin/bash

cd ./ft_transcendence
python manage.py startapp avocado
cd -

exec $@
