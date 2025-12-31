type EnvType = Record<keyof typeof _ENV, string | undefined>;

const _ENV = {
	API_URL: import.meta.env.VITE_API_URL,
};

export const ENV: EnvType = _ENV;
