import { INodeProperties } from "n8n-workflow";

export default function runHook(properties: INodeProperties[]): {
    properties: INodeProperties[]
} {
    return {
        properties,
    }
}
