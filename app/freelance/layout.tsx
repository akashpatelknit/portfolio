import Hero from '@/components/hero';

interface ProjectLayoutProps {
	children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
	return (
		<div className=" md:px-10">
			<Hero />
			{children}
		</div>
	);
};

export default ProjectLayout;
