import { Linkedin, MailIcon } from 'lucide-react';
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
						<Link href="/" className="">
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
					<div>
						<MailIcon />
					</div>
					<div>
						<Linkedin />
					</div>
				</div>
			</div>
		</>
	);
}
