'use client';
import { LayoutGridDemo } from '@/components/animation/LayoutGridDemo';

import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import ProjectCard from '@/components/project-card.tsx/project-card';
import { ProjectEdge, getPosts } from '@/service';
import { Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
	const [data, setData] = useState<ProjectEdge[]>();
	useEffect(() => {
		const fetcher = async () => {
			const res = await getPosts();
			setData(res);
			// console.log(res);
		};
		fetcher();
	}, []);
	return (
		<>
			<Hero />
			{data?.map((project, index) => (
				<ProjectCard
					key={index}
					id={index}
					title={project.node.title}
					subtitle={project.node.subtitle}
					photo={project.node.photo.url}
					description={project.node.description}
					stacks={project.node.stacks}
					slug={project.node.slug}
				/>
			))}
			<Contact />
		</>
	);
}
