import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = () => {
	return (
		<div className=" lg:h-screen flex flex-col md:flex-row gap-10 items-center my-10 py-10 lg:my-0 max-w-7xl mx-auto">
			<div className="flex-2 text-xl w-full max-w-lg">
				<div className=" flex gap-3 items-center">
					<div className=" h-4 w-4 bg-red-500 rounded-full"></div>
					<div className="flex items-center">
						<Skeleton width={50} height={20} />
					</div>
				</div>
				<h3 className="py-3  font-semibold">
					<Skeleton width={'100%'} height={40} />
				</h3>
				<div className=" flex flex-wrap gap-3 max-w-2xl py-5 md:py-10">
					{Array(5)?.map((_, i) => (
						<span
							className="bg-gray-300 p-1 px-2 rounded-md"
							key={i}
						>
							<Skeleton width={'100%'} height={40} />
						</span>
					))}
				</div>
				<div className=" max-w-xl ">
					<Skeleton width={'100%'} height={40} />
				</div>
				<div className="py-5 md:py-10">
					<Skeleton width={'100%'} height={40} />
				</div>
			</div>

			<div className=" flex-4 lg:hidden overflow-hidden w-full h-full relative">
				<Skeleton width={'100%'} height={720} />
			</div>
			<div className=" grid overflow-hidden w-full h-full relative grid-cols-2">
				<Skeleton width={'100%'} height={'100%'} />
				<Skeleton width={'100%'} height={'100%'} />
				<Skeleton width={'100%'} height={'100%'} />
				<Skeleton width={'100%'} height={'100%'} />
			</div>
		</div>
	);
};

export default SkeletonLoading;
