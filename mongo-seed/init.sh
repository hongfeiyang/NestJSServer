#!/bin/bash

mongoimport --host mongodb --db user-service --collection users --file users.json --jsonArray
mongoimport --host mongodb --db company-service --collection companies --file companies.json --jsonArray