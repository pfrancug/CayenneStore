npm run build
(
    cd ../garden-backend
    realm-cli pull --remote="garden-jhzva" -y
)
rm -rf ../garden-backend/hosting/files/*
mv ./build/* ../garden-backend/hosting/files
(
    cd ../garden-backend
    git add .
    git commit -m $1
    git push
)
rm -rf ./build