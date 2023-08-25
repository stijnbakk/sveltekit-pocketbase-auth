import { serializeNonPOJOs } from '$lib/helper';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	console.log('layout locals:', locals);
	if (locals.user) {
		return {
			user: serializeNonPOJOs(locals.user)
		};
	}
}) satisfies LayoutServerLoad;
