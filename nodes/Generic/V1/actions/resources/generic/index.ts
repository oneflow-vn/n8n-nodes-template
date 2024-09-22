import { INodeExecutionData, INodeProperties, INodePropertyOptions, NodeExecutionOutput, NodeExecutionWithMetadata, type IExecuteFunctions } from 'n8n-workflow';

import { options, handlers } from './operators';

export const option: INodePropertyOptions = {
	name: 'Generic',
	value: 'generic',
};

export const descriptions: INodeProperties[] = [{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
	options: options,
	default: options[0].value,
}]

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
	const operationMode = this.getNodeParameter('operation', 0) as string;

	const handle = handlers[operationMode];

	if (!handle) {
		throw new Error(`The operation "${operationMode}" is not supported!`);
	}

	const returnData = await handle.call(this);

	return returnData;
}
