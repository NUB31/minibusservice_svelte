export type APIResponse = {
	status: 'success' | 'error';
	message: string | null;
	data: any | null;
};
