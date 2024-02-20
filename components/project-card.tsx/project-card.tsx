import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LayoutGridDemo } from '../animation/LayoutGridDemo';
import { FollowerPointerCard } from '@/components/animation/following-pointer';
interface ProjectCardProps {
	title: string;
	subtitle: string;
	id: number;
	photo: string;
	description: string;
	stacks: { title: string }[];
	slug: string;
	designRoles: { title: string }[];
	developerRoles: { title: string }[];
	sectors: { title: string }[];
	timeline: string;
	card: { url: string }[];
}
const colors = {
	red: 'red-500',
	blue: 'blue-500',
	green: 'green-500',
	yellow: 'yellow-500',
	purple: 'purple-500',
	indigo: 'indigo-500',
	pink: 'pink-500',
	gray: 'gray-500',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	subtitle,
	id,
	photo,
	description,
	stacks,
	slug,
	designRoles,
	developerRoles,
	sectors,
	timeline,
	card,
}) => {
	return (
		<div className=" lg:h-screen flex flex-col md:flex-row gap-10 items-center my-10 py-10 lg:my-0 max-w-7xl mx-auto">
			<div className="flex-2 text-xl w-full max-w-lg">
				<div className=" flex gap-3 items-center">
					<div className=" h-4 w-4 bg-red-500 rounded-full"></div>
					<div className="flex items-center">
						<p>No. </p>
						<p className=" underline ml-3">{id + 1}</p>
					</div>
				</div>
				<h3 className="py-3  font-semibold">{title}</h3>
				<div className=" flex flex-wrap gap-3 max-w-2xl py-5 md:py-10">
					{stacks?.map((tech) => (
						<span
							className="bg-gray-300 p-1 px-2 rounded-md"
							key={tech.title}
						>
							{tech.title}
						</span>
					))}
				</div>
				<div className=" max-w-xl ">
					<p className="font-normal">{subtitle}</p>
				</div>
				<div className="py-5 md:py-10">
					<Link href={`/${slug}`} className=" underline">
						View Project
					</Link>
				</div>
			</div>

			<div className=" flex-4 lg:hidden overflow-hidden w-full h-full relative">
				<Image src={photo} alt={title} width={1080} height={720} />
			</div>
			<div className=" flex-4 hidden lg:flex overflow-hidden w-full h-full relative">
				<LayoutGridDemo card={card} />
			</div>
		</div>
	);
};

export default ProjectCard;
