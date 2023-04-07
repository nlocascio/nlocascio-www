BUCKET_URL ?=
CLOUDFRONT_DISTRIBUTION_ID ?=

install:
	npm install

run:
	NODE_OPTIONS=--openssl-legacy-provider gridsome develop

build:
	NODE_OPTIONS=--openssl-legacy-provider gridsome build

deploy: publish invalidate-cache

publish:
	aws s3 sync ./dist ${BUCKET_URL}

invalidate-cache:
	aws cloudfront create-invalidation \
    --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} \
    --paths "/*"
