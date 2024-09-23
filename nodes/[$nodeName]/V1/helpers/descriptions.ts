import type { INodeProperties } from 'n8n-workflow';

// {
// 	name: 'status',
// 	in: 'query',
// 	required: true,
// 	type: 'array',
// 	items: {
// 		type: 'string',
// 		enum: ['available', 'pending', 'sold'],
// 		default: 'available',
// 	},
// 	collectionFormat: 'multi',
// },

export const generateNodeProperty = (parameter: any) => {
	const property: INodeProperties = {
		name: parameter.name,
		required: parameter.required,
		type: 'string',
		displayName: parameter.name,
		default: ''
	};

	return property;
}

export const generateNodeProperties = (parameters: any[]) => {
	const properties: INodeProperties[] = [];
	for (const parameter of parameters) {
		properties.push(generateNodeProperty(parameter));
	}
	return properties;
}
