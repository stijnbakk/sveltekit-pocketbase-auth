<script lang="ts">
</script>

<form
	method="post"
	action="/auth?/login"
	class="flex flex-col w-56 mx-auto gap-3 p-4 rounded border-2 mt-3"
>
	<input name="email" type="email" placeholder="john.doe@gmail.com" />
	<input name="password" type="password" placeholder="••••••••••" />
	<button type="submit" class="bg-black text-white w-full p-2 hover:opacity-25">Login</button>
</form>
