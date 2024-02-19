import { request, gql } from 'graphql-request';

// Explicitly type the GRAPH_API environment variable for safety and clarity
declare const GRAPH_API: string;
interface GetPostDetailsParams {
	slug: string;
}
export interface Project {
	description: string;
	multiplePhotos: { url: string }[];
	content: { html: string };
	photo: { url: string };
	subtitle: string;
	title: string;
	slug: string;
	stacks: { title: string }[];
	sectors: { title: string }[];
	designRoles: { title: string }[];
	developerRoles: { title: string }[];
	timeline: string;
	card: { url: string }[];
	challenges: { html: string };
	challengesImg: { url: string }[];
	feature: { html: string };
	featureImg: { url: string }[];
	learning: { html: string };
	learningImg: { url: string }[];
	outcomeImg: { url: string }[];
	outcomes: { html: string };
}

export interface ProjectEdge {
	node: Project;
}

export interface ProjectsConnection {
	edges: ProjectEdge[];
}

export interface MyQueryResponse {
	projectsConnection: ProjectsConnection;
}

export const getPosts = async (): Promise<ProjectEdge[]> => {
	const query = gql`
		query MyQuery {
			projectsConnection {
				edges {
					node {
						description
						multiplePhotos {
							url
						}

						photo {
							url
						}
						subtitle
						title
						slug
						stacks {
							title
						}
						sectors {
							title
						}
						designRoles {
							title
						}
						developerRoles {
							title
						}
						timeline
						card {
							url
						}
						challenges {
							html
						}
						challengesImg {
							url
						}
						feature {
							html
						}
						featureImg {
							url
						}
						learning {
							html
						}
						learningImg {
							url
						}
						outcomeImg {
							url
						}
						outcomes {
							html
						}
					}
				}
			}
		}
	`;

	const result: MyQueryResponse = await request(
		'https://api-ap-south-1.hygraph.com/v2/cllgn0cwm0bb101utfra8ao15/master',
		query
	);
	return result.projectsConnection.edges;
};

export const getPostDetails = async (
	params: GetPostDetailsParams
): Promise<ProjectEdge[] | undefined> => {
	const query = gql`
		query MyQuery($slug: String!) {
			projectsConnection(where: { slug: $slug }) {
				edges {
					node {
						description
						multiplePhotos {
							url
						}
						content {
							html
						}
						photo {
							url
						}
						subtitle
						title
						slug
						stacks {
							title
						}
						sectors {
							title
						}
						designRoles {
							title
						}
						developerRoles {
							title
						}
						timeline
						card {
							url
						}
						challenges {
							html
						}
						challengesImg {
							url
						}
						feature {
							html
						}
						featureImg {
							url
						}
						learning {
							html
						}
						learningImg {
							url
						}
						outcomeImg {
							url
						}
						outcomes {
							html
						}
					}
				}
			}
		}
	`;

	const result: MyQueryResponse = await request(
		'https://api-ap-south-1.hygraph.com/v2/cllgn0cwm0bb101utfra8ao15/master',
		query,
		{
			slug: params.slug,
		}
	);

	// Handle cases where no project is found using optional chaining
	const edges = result.projectsConnection?.edges;
	return edges;
};
