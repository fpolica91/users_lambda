import { APIGatewayProxyHandler } from "aws-lambda";
import {randomBytes} from "crypto";
import document from "../utils/dynamodb.client";
export const handler: APIGatewayProxyHandler = async (event) => {
    console.log(typeof event);
    const response = await document.put({
        TableName: 'users_certificates',
        Item: {
            id: randomBytes(20).toString('hex'),
            name: event.body['name'],
            grade: event.body['grade'],
            email: event.body['email'],
        }
    }).promise();
    console.log(response);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
        }),
    }
}