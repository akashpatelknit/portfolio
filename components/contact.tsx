import { Github, Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
	return (
		<div className=" flex flex-col md:flex-row gap-5 md:gap-10 md:items-center justify-center  pt-10">
			<div>
				<Image
					src="https://avatars.githubusercontent.com/u/86844027?v=4"
					alt="avatar"
					height={200}
					width={200}
					className=" rounded-full"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className=" md:pb-3 text-3xl font-semibold">
					Let&apos;s connect
				</h1>
				<div className=" flex flex-col gap-2  ">
					<div className=" flex gap-4 md:pb-3 items-center">
						<Github className=" w-7 h-7 " />
						<Link
							href="https://github.com/akashpatelknit"
							target="_blank"
							className=" underline md:text-xl text-gray-600"
						>
							Akash Patel
						</Link>
					</div>
					<div className=" flex gap-4 md:pb-3 items-center">
						<Linkedin className=" w-7 h-7 " />
						<Link
							href="https://www.linkedin.com/in/akash-patel-9330aa201/"
							target="_blank"
							className=" underline md:text-xl text-gray-600"
						>
							Akash Patel
						</Link>
					</div>
					<div className=" flex gap-3 items-center ">
						<MailIcon className=" w-7 h-7" />
						<Link
							href="mailto:akashpatel20606@gmail.com
						"
							className=" underline md:text-xl text-gray-600"
						>
							akashpatel20606@gmail.com
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
