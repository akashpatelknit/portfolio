interface ProjectLayoutProps {
	children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
	return <div className=" md:px-10">{children}</div>;
};

export default ProjectLayout;
