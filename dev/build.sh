#!/usr/bin/env bash

context=$(cd $(dirname $0)/..; pwd)
imgName=ewaight/isi-api
imgFullName=${imgName}:latest

docker build ${context} -t ${imgFullName}
docker push ${imgFullName}