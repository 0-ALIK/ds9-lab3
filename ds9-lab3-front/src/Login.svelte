<script>
    import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';

	let email = '';
	let password = '';

	const handleSubmit = () => {
		fetch('https://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		}).then(response => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Login failed');
		}).then(data => {
			console.log(data);
		}).catch(error => {
			console.error(error);
		});
	};

</script>

<div class="flex items-center justify-center h-full">
    <Card>
        <form class="flex flex-col space-y-6" action="/" on:submit|preventDefault={ handleSubmit }>
          	<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
			<Label class="space-y-2">
				<span>Email</span>
				<Input type="email" name="email" placeholder="name@company.com" bind:value={email} required/>
			</Label>
			<Label class="space-y-2">
				<span>Your password</span>
				<Input type="password" name="password" placeholder="•••••" bind:value={password} required />
			</Label>
			<div class="flex items-start">
				<Checkbox>Remember me</Checkbox>
				<a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
			</div>
			<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
			</div>
        </form>
    </Card>
</div>