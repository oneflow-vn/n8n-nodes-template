import * as generic from './generic';

export const options = [
	generic.option,
];

export const description = [
	...generic.descriptions,
];

export const handlers = {
	[generic.option.value.toString()]: generic.execute,
};
