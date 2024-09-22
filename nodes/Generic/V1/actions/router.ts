import { INodeExecutionData, INodeProperties, NodeExecutionOutput, NodeExecutionWithMetadata, type IExecuteFunctions } from 'n8n-workflow';

import { options, descriptions, handlers } from './resources';

export const description: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: options,
		default: options[0].value,
		description: 'How input data should be merged',
	},
	...descriptions
];

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
	let resourceMode = this.getNodeParameter('resource', 0) as string

	const handle = handlers[resourceMode];

	if (!handle) {
		throw new Error(`The resource "${resourceMode}" is not supported!`);
	}

	const returnData = await handle.call(this);

	return returnData;
}
