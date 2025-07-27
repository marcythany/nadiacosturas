import {
	SiFacebook,
	SiInstagram,
	SiWhatsapp,
} from '@icons-pack/react-simple-icons';

interface BrandIconProps {
	name: 'whatsapp' | 'instagram' | 'facebook';
	size?: number;
	className?: string;
}

export default function BrandIcon({
	name,
	size = 24,
	className,
}: BrandIconProps) {
	const icons = {
		whatsapp: <SiWhatsapp size={size} className={className} />,
		instagram: <SiInstagram size={size} className={className} />,
		facebook: <SiFacebook size={size} className={className} />,
	};

	return icons[name];
}
