import {
	INodePropertyOptions,
	NodeExecutionWithMetadata,
	NodeOperationError,
	type IExecuteFunctions,
	type INodeExecutionData,
	type INodeProperties,
} from 'n8n-workflow';


export const properties: INodeProperties[] = [];

const displayOptions = {
	show: {
		mode: ['append'],
	},
};

export const option: INodePropertyOptions = {
	name: 'generic',
	value: 'generic',
}

export const descriptions = [];

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
	const items = this.getInputData();

	for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
		const item: INodeExecutionData = items[itemIndex];

		try {
			// Implement your logic here
			items[itemIndex] = item;
		} catch (error) {
			// This node should never fail but we want to showcase how
			// to handle errors.
			if (this.continueOnFail()) {
				items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
			} else {
				// Adding `itemIndex` allows other workflows to handle this error
				if (error.context) {
					// If the error thrown already contains the context property,
					// only append the itemIndex
					error.context.itemIndex = itemIndex;
					throw error;
				}
				throw new NodeOperationError(this.getNode(), error, {
					itemIndex,
				});
			}
		}
	}

	return this.prepareOutputData(items);
}
