<script lang="ts">
	import Modal from '$lib/components/modal.svelte';
	import Button from '$lib/components/button.svelte';

	let modalOpen = false;
	let buttonDisabled = false;

	let name = '';
	let email = '';
	let phone = '';
	let message = '';

	let error: string | null = null;
	let success: string | null = null;

	async function sendMessage() {
		// if fields are not empty
		if (!(name && email && phone && message)) {
			error = 'Please fill in all fields';
			return;
		}

		error = null;
		success = null;

		buttonDisabled = true;
		modalOpen = true;

		try {
			let res = await fetch('/api/v1/message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					message
				})
			});

			if (res.ok) {
				try {
					let data = await res.json();
					success = data.message;
				} catch (err) {
					throw 'Could not parse response';
				}
			} else {
				try {
					let data = await res.json();
					if (data.message) {
						error = data.message;
					}
				} catch (err) {
					throw 'Could not parse response';
				}
			}
		} catch (err) {
			console.error(err);
			// We let the user try again if something went wrong. Else we just leave the button disabled
			buttonDisabled = false;
			error = 'Something went wrong sending message';
		} finally {
			modalOpen = false;
		}
	}
</script>

<Modal visible={modalOpen} closableByUser={false}>Sending message</Modal>

<div class="md:text-lg flex flex-col md:flex-row mt-2 gap-8">
	<div class="flex-1 flex flex-col">
		<p class="opacity-70 font-medium pt-2 block md:hidden">
			Questions?<br />Contact us by phone, email or by using the form below
		</p>
		<p class="opacity-70 font-medium pt-2 hidden md:block">
			Questions?<br />Contact us by phone, email or by using the form to the right
		</p>
		<a
			class="text-light-accent dark:text-dark-accent hover:underline font-bold block"
			href="tel:45256161"
		>
			Phone: +47 45 25 61 61
		</a>
		<a
			class="text-light-accent dark:text-dark-accent hover:underline font-bold block"
			href="mailto:minibusstur@hotmail.com"
		>
			Email: minibusstur@hotmail.com
		</a>

		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.3400114684273!2d6.808636516233512!3d62.48304906129275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b121221a7743%3A0x27e6f60384509a8b!2sMinibusservice%20Stene%20AS!5e0!3m2!1sen!2sno!4v1676820496505!5m2!1sen!2sno"
			class="grow mt-5 border-2 rounded-md overflow-hidden hidden md:block border-light-contrast dark:border-dark-contrast"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Map"
		/>
	</div>

	<form
		on:submit={(e) => {
			e.preventDefault();
			sendMessage();
		}}
		class="pt-4 md:pt-0 flex-1 text-xl"
	>
		{#if error}
			<div
				class="bg-red-600 px-4 py-3 rounded-md border-2 border-light-contrast text-light-background dark:border-dark-contrast"
			>
				{error}
			</div>
		{/if}
		{#if success}
			<div
				class="bg-green-600 px-4 py-3 rounded-md border-2 border-light-contrast text-light-background dark:border-dark-contrast"
			>
				{success}
			</div>
		{/if}
		<div class="mt-3">
			<div class="font-semibold">Name:</div>
			<input
				bind:value={name}
				placeholder="Name"
				class="mt-1 p-2 border-2 rounded-md w-full bg-light-secondary-background border-light-contrast dark:border-dark-contrast dark:bg-dark-secondary-background"
				type="text"
			/>
		</div>
		<div class="mt-3 ">
			<div class="font-semibold">Email:</div>
			<input
				bind:value={email}
				placeholder="Email"
				class="mt-1 p-2 border-2 rounded-md w-full bg-light-secondary-background border-light-contrast dark:border-dark-contrast dark:bg-dark-secondary-background"
				type="text"
			/>
		</div>
		<div class="mt-3">
			<div class="font-semibold">Phone number:</div>
			<input
				bind:value={phone}
				placeholder="Phone number"
				class="mt-1 p-2 border-2 rounded-md w-full bg-light-secondary-background border-light-contrast dark:border-dark-contrast dark:bg-dark-secondary-background"
				type="text"
			/>
		</div>
		<div class="mt-3">
			<div class="font-semibold">Message:</div>
			<textarea
				bind:value={message}
				class="border-2 mt-1 p-2 rounded-md h-60 bg-light-secondary-background w-full border-light-contrast dark:border-dark-contrast dark:bg-dark-secondary-background"
				placeholder="Message"
			/>
		</div>
		<div class="mt-3">
			<Button disabled={buttonDisabled} type="submit">Send</Button>
		</div>
	</form>

	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1843.3400114684273!2d6.808636516233512!3d62.48304906129275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616b121221a7743%3A0x27e6f60384509a8b!2sMinibusservice%20Stene%20AS!5e0!3m2!1sen!2sno!4v1676820496505!5m2!1sen!2sno"
		class="grow mt-5 border-2 border-light-contrast rounded-md overflow-hidden block md:hidden h-56"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Map"
	/>
</div>
