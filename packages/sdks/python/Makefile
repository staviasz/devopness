IMAGE=devopness-sdk-python
TAG?=latest
PWD=$(shell pwd)
WORKDIR=sdk

.DEFAULT_GOAL=help

build-image: ## Build Docker Image
	$(info Docker - Building Image ...)
	@docker build -f Dockerfile -t $(IMAGE) .

build-sdk-python: build-image ## Build Python SDK
	$(info Docker - Building Devopness SDK - Python ...)
	@docker run --rm \
	-v $(PWD):/$(WORKDIR) \
	--name devopness-sdk-python-build \
	$(IMAGE):$(TAG) \
	/bin/bash scripts/build.sh

help: ## Show this help.
# `help' function obtained from GitHub gist: https://gist.github.com/prwhite/8168133?permalink_comment_id=4160123#gistcomment-4160123
	@echo Devopness SDK - Python
	@awk 'BEGIN {FS = ": .*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[$$()% 0-9a-zA-Z_-]+(\\:[$$()% 0-9a-zA-Z_-]+)*:.*?##/ { gsub(/\\:/,":", $$1); printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
