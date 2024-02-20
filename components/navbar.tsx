import { Github, Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<div className=" flex justify-between items-center">
				<div className=" flex items-center gap-4">
					<div>
						<Link href="/" className="">
							Feature Projects
						</Link>
						<Image
							src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c43f43df3f8284def0e3_underline.svg"
							alt="line"
							width="130"
							height="10"
						/>
					</div>
					<div>
						<Link href="/freelance" className="">
							Freelance Work
						</Link>
						<Image
							src="https://assets-global.website-files.com/64a24a477b774d01d169b819/64a2c43f43df3f8284def0e3_underline.svg"
							alt="line"
							width="130"
							height="10"
						/>
					</div>
				</div>
				<div className=" flex items-center justify-center gap-3">
					<Link
						href="https://github.com/akashpatelknit"
						target="_black"
					>
						<Github />
					</Link>
					<Link
						href="https://www.linkedin.com/in/akash-patel-9330aa201/"
						target="_black"
					>
						<Linkedin />
					</Link>
					<Link href="mailto:akashpatel20606@gmail.com">
						<MailIcon />
					</Link>
				</div>
			</div>
		</>
	);
}
