import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import * as generic from './generic';

export const options: INodePropertyOptions[] = [
	generic.option,
];

export const descriptions: INodeProperties[] = [
	...generic.descriptions,
];

export const handlers = {
	[generic.option.value.toString()]: generic.router,
};
