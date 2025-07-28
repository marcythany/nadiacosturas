'use client';
import { motion, MotionProps } from 'framer-motion';
import React, { ElementType, ForwardedRef, forwardRef } from 'react';

type MotionPolymorphicProps<T extends ElementType> = Omit<
	React.ComponentPropsWithoutRef<T>,
	'key' | 'ref'
> & {
	as?: T;
} & MotionProps;

const MotionComponent = <T extends ElementType = 'div'>(
	{ as, children, ...props }: MotionPolymorphicProps<T>,
	ref: ForwardedRef<HTMLElement>
) => {
	const Component = as || 'div';

	// Create motion component with proper typing
	const MotionComp = motion(Component as ElementType);

	return (
		<MotionComp ref={ref} {...props}>
			{children}
		</MotionComp>
	);
};

export const MotionWrapper = forwardRef(MotionComponent) as <
	T extends ElementType = 'div'
>(
	props: MotionPolymorphicProps<T> & { ref?: ForwardedRef<HTMLElement> }
) => React.ReactElement | null;

(MotionWrapper as React.FC).displayName = 'MotionWrapper';
