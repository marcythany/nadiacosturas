'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactForm() {
	return (
		<section id='contact' className='py-16'>
			<div className='max-w-md mx-auto px-4'>
				<form className='grid gap-4'>
					<Input placeholder='Seu nome' />
					<Input type='email' placeholder='Email' />
					<Textarea placeholder='Mensagem' rows={4} />
					<Button type='submit'>Enviar</Button>
				</form>
			</div>
		</section>
	);
}
