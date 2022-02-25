interface Exposed {
	readonly nodeCrypto: Readonly<typeof import('./src/nodeCrypto').nodeCrypto>;
	readonly versions: Readonly<typeof import('./src/versions').versions>;
}

interface Window extends Exposed {}
