import { IExecuteSingleFunctions, IHttpRequestOptions, } from 'n8n-workflow'

export async function preSendActionCustonBody (
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const { customBody } = requestOptions.body;
	requestOptions.body = {
		...requestOptions.body,
		...customBody,
	}

	// delete customBody from body
	delete requestOptions.body.customBody;

	return Promise.resolve(requestOptions);
}
