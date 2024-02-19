'use client';
import {
	FollowPointer,
	FollowerPointerCard,
} from '@/components/animation/following-pointer';
import Contact from '@/components/contact';
import { ProjectEdge, getPostDetails } from '@/service';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SingleProject = () => {
	const params = useParams();
	const [data, setData] = useState<ProjectEdge[]>();
	useEffect(() => {
		const fetcher = async () => {
			const res = await getPostDetails({
				slug: params.project as string,
			});
			setData(res);
		};
		fetcher();
	}, [params.project]);

	if (!data) {
		return <div>Loading...</div>;
	}
	console.log(data[0]);

	return (
		<>
			<div className=" flex flex-col md:flex-row lg:flex-row items-center  justify-between gap-4 py-10">
				<div className=" flex-1 max-w-2xl ">
					{/* // projectname */}
					<p className=" text-[1.125rem]  font-semibold">
						{data[0]?.node.title}
					</p>
					{/* // projectdescription */}
					<p className="text-[1.5rem] md:text-[2rem] font-normal leading-[100%] py-5">
						{data[0]?.node.subtitle}
					</p>

					<div className=" flex flex-wrap gap-3 py-5">
						{data[0]?.node.stacks.map((tech) => (
							<span
								className=" bg-gray-300 p-1 px-2 rounded-md w-fit"
								key={tech.title}
							>
								{tech.title}
							</span>
						))}
					</div>

					<div className="py-3">
						<p className="font-semibold">TIMELINE</p>
						<p>{data[0].node.timeline}</p>
					</div>
					<div className="py-3 ">
						<p className="font-semibold text-[1.125rem]">SECTOR</p>
						{
							<div className=" flex flex-row gap-3">
								{data[0]?.node.sectors.map((role) => (
									<span
										key={role.title}
										className=" bg-red-300 w-fit px-2 py-1 rounded-md"
									>
										{role.title}
									</span>
								))}
							</div>
						}
					</div>
					<div className="py-3">
						<p className="font-semibold text-[1.125rem]">
							DESIGN ROLE
						</p>
						{
							<div className="flex flex-wrap gap-3">
								{data[0]?.node.designRoles.map((role) => (
									<span
										key={role.title}
										className=" bg-red-300 w-fit px-2 py-1 rounded-md"
									>
										{role.title}
									</span>
								))}
							</div>
						}
					</div>
					<div className="py-3">
						<p className="font-semibold text-[1.125rem] pb-2">
							DEVELOPMENT ROLE
						</p>
						{
							<div className=" flex flex-wrap gap-3">
								{data[0]?.node.developerRoles.map((role) => (
									<span
										key={role.title}
										className=" bg-red-300 w-fit px-2 py-1 rounded-md"
									>
										{role.title}
									</span>
								))}
							</div>
						}
					</div>
					<div className=" py-3">
						<Link href="/projects" className=" ">
							Live Link
						</Link>
						<Image
							src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c43f43df3f8284def0e3_underline.svg"
							alt="line"
							width="80"
							height="10"
						/>
					</div>
				</div>

				<div className=" flex-1 flex flex-col gap-3 max-w-2xl">
					{/* <FollowerPointerCard title="Akash Patel"> */}
					<div>
						<Image
							src={data[0]?.node.photo.url}
							alt="project-image"
							width={980}
							height={600}
						/>
					</div>
					<div>
						<Image
							src={data[0]?.node.photo.url}
							alt="project-image"
							width={980}
							height={600}
							className="hidden md:block lg:flex xl:flex 2xl:hidden"
						/>
					</div>
					<div>
						<Image
							src={data[0]?.node.photo.url}
							alt="project-image"
							width={980}
							height={600}
							className="hidden md:block lg:hidden"
						/>
					</div>
				</div>
			</div>
			<div className=" max-w-6xl mx-auto px-0 md:px-6 lg:px-8 pt-20 flex flex-col gap-10">
				<div>
					<div className=" flex items-center gap-3">
						<div className=" h-3 w-3 rounded-full  flex items-center ">
							<Image
								src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c39c92e236b2edfaffca_41.svg"
								alt="msg"
								height="40"
								width="40"
							/>
						</div>
						<span className="text-xl font-medium text-gray-500">
							About Project
						</span>
					</div>
					<div className=" py-5">
						<p className=" bg-green-200 p-3">
							{data[0].node.description}
						</p>
					</div>
				</div>

				<div>
					<div className=" flex items-center gap-3">
						<div className=" h-5 w-5 rounded-full flex items-center">
							<Image
								src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c39d92e236b2edfb00fb_140.svg"
								alt="msg"
								height="50"
								width="50"
							/>
						</div>
						<span className="text-xl font-medium text-gray-500">
							Features
						</span>
					</div>
					<div className=" py-5 ">
						<div
							dangerouslySetInnerHTML={{
								__html: data[0].node.feature.html,
							}}
							className="p-3 px-10 bg-pink-200"
						/>
					</div>
				</div>

				<div>
					<div className=" flex items-center gap-3">
						<div className=" h-7 w-7 rounded-full flex items-center">
							<Image
								src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c3b1cf29328d42aefd79_142.svg"
								alt="msg"
								height="50"
								width="50"
							/>
						</div>
						<span className="text-xl font-medium text-gray-500">
							Challenges
						</span>
					</div>
					<div className="py-5">
						<div
							dangerouslySetInnerHTML={{
								__html: data[0].node.challenges.html,
							}}
							className="p-3 px-10 bg-blue-100"
						/>
					</div>
				</div>

				<div>
					<div className=" flex items-center gap-3">
						<div className=" h-5 w-5 rounded-full flex items-center">
							<Image
								src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a9058b08bfaa50ce6d553a_63.svg"
								alt="msg"
								height="50"
								width="50"
							/>
						</div>
						<span className="text-xl font-medium text-gray-500">
							Outcomes
						</span>
					</div>
					<div className=" py-5">
						<div
							dangerouslySetInnerHTML={{
								__html: data[0].node.outcomes.html,
							}}
							className="p-3 px-10 bg-gray-200"
						/>
					</div>
				</div>

				<div>
					<div className=" flex items-center gap-3">
						<div className=" h-5 w-5 rounded-full flex items-center">
							<Image
								src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c39d92e236b2edfb00fb_140.svg"
								alt="msg"
								height="50"
								width="50"
							/>
						</div>
						<span className="text-xl font-medium text-gray-500">
							Learning
						</span>
					</div>
					<div className="py-5">
						<div
							dangerouslySetInnerHTML={{
								__html: data[0].node.learning.html,
							}}
							className="p-3 px-10 bg-yellow-100"
						/>
					</div>
				</div>
			</div>
			<div className="py-5 md:pt-20">
				<p className=" text-xl font-medium text-center">
					You have reached the end...why not take a look at my other
					projects?
				</p>
			</div>
		</>
	);
};

export default SingleProject;
