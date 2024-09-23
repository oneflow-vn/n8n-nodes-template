/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { NodeConnectionType, type INodeTypeDescription } from 'n8n-workflow';

import { descriptions  } from './resources';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Merge',
	name: 'merge',
	group: ['transform'],
	description: 'Merges data of multiple streams once data from both is available',
	version: [1],
	defaults: {
		name: 'Merge',
	},
	inputs: [NodeConnectionType.Main],
	outputs: [NodeConnectionType.Main],
	requiredInputs: [],
	properties: descriptions,
};
