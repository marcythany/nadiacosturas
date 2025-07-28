import Head from 'next/head';

export const StructuredData = <T extends object>({ data }: { data: T }) => (
	<Head>
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	</Head>
);
