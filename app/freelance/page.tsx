'use client';

import ProjectCard from '@/components/project-card.tsx/project-card';
import SkeletonLoading from '@/components/sketeton';
import { ProjectEdge, getPosts } from '@/service';
import { useEffect, useState } from 'react';

export default function Home() {
	const [data, setData] = useState<ProjectEdge[]>();
	useEffect(() => {
		const fetcher = async () => {
			let res = await getPosts();
			res = res.filter(
				(project) => project.node.categories[0].title === 'freelance'
			);
			setData(res);
		};
		fetcher();
	}, []);

	return (
		<>
			{!data ? (
				<SkeletonLoading />
			) : (
				data?.map((project, index) => (
					<ProjectCard
						key={index}
						id={index}
						title={project.node.title}
						subtitle={project.node.subtitle}
						photo={project.node.photo.url}
						description={project.node.description}
						stacks={project.node.stacks}
						slug={project.node.slug}
						designRoles={project.node.designRoles}
						developerRoles={project.node.developerRoles}
						sectors={project.node.sectors}
						timeline={project.node.timeline}
						card={project.node.card}
					/>
				))
			)}
		</>
	);
}
