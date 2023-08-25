import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';
export const handle = async ({ event, resolve }) => {
	event.locals.pocketbase = new PocketBase(PUBLIC_POCKETBASE_URL);

	event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pocketbase.authStore.isValid) {
		event.locals.user = event.locals.pocketbase.authStore.model;
	}

	const response = await resolve(event);

	// TODO: secure before deploying
	response.headers.set(
		'set-cookie',
		event.locals.pocketbase.authStore.exportToCookie({ secure: false })
	);

	return response;
};
