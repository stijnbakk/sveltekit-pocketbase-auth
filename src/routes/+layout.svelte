<script lang="ts">
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col">
	<div class="w-full bg-gray-600 text-white flex flex-row justify-end p-3 gap-4">
		{#if data.user}
			<span>{data.user.name} [{data.user.email}]</span>
			<form action="/auth/logout" method="POST">
				<button>Logout</button>
			</form>
		{:else}
			<a href="/login">Login</a>
		{/if}
	</div>

	<div class="container mx-auto">
		<slot />
	</div>
</div>
