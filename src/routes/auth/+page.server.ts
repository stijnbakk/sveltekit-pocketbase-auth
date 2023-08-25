import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};
		try {
			await locals.pocketbase.collection('users').authWithPassword(data.email, data.password);
			console.log('login success');
		} catch (e) {
			return {
				error: true,
				email: data.email
			};
		}
		throw redirect(303, '/');
	}
};
