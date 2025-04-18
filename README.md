This project is a simple document manager where you can upload the document in the cloud storage file system, here in our case it is a s3 bucket simple storage service in aws and the metadata corresponding to that is stored in the dynamo db which is a no sql database.
How to spin up the server 
npm install 
maintain the .env variables #example env structure is noted below
npm start


#example of env
#AWS_ACCESS_KEY_ID=
#AWS_SECRET_ACCESS_KEY=
#AWS_REGION=
#S3_BUCKET_NAME=
#DYNAMODB_TABLE_NAME=
#PORT=
