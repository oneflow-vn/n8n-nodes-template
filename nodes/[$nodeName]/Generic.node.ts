import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { GenericV1 } from './V1/GenericV1.node';

export class Merge extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Merge',
			name: 'merge',
			icon: 'file:merge.svg',
			group: ['transform'],
			subtitle: '\=\{\{$parameter\[\"mode\"\]\}\}',
			description: 'Merges data of multiple streams once data from both is available',
			defaultVersion: 3,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new GenericV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
