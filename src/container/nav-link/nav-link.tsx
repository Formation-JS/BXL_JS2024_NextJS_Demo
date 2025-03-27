// npm install @heroicons/react
import {
    HomeIcon, PuzzlePieceIcon, InformationCircleIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

type LinkData = {
    name: string;
    route: `/${string}`;
    Icon: React.ElementType;
};

const links: LinkData[] = [
    {
        name: 'Accueil',
        route: '/',
        Icon: HomeIcon
    },
    {
        name: 'Jeux',
        route: '/game',
        Icon: PuzzlePieceIcon
    },
    {
        name: 'À propos',
        route: '/about',
        Icon: InformationCircleIcon
    },
];


type NavLinkItemProps = LinkData & {};
function NavLinkItem({ name, route, Icon } : NavLinkItemProps) {
    return (
        <li className='h-[70%]'>
            <Link href={route} className='flex flex-row h-full gap-1' aria-label={name}>
                <Icon />
                <span className='self-center text-nowrap hidden sm:block'>{name}</span>
            </Link>
        </li>
    )
}

export default function NavLink() {

    return (
        <ul className='flex flex-row gap-3 items-center'>
            {links.map(link => (
                <NavLinkItem key={link.route} {...link} />
            ))}
        </ul>
    );
};