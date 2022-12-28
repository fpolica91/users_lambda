import { DynamoDB } from 'aws-sdk';


 const document = new DynamoDB.DocumentClient({
    region: 'us-east-1'
 });
 export default document;