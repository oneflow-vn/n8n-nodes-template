import { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

{{#each operations}}
{{importOperation this}}
{{/each}}

export const options: INodePropertyOptions[] = [
	{{#each operations}}
	{{appendOperationOption this}}
	{{/each}}
];

export const descriptions: INodeProperties[] = [
	{{#each operations}}
	{{appendOperationDescription this}}
	{{/each}}
];

export const handlers = {
	{{#each operations}}
	{{appendOperationHandler this}}
	{{/each}}
};
