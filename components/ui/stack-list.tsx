// components/RandomColorSpan.tsx

interface Props {
	title: string;
}

const RandomColorSpan: React.FC<Props> = ({ title }) => {
	// Generate a random light color hex string
	const lightColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

	// Adjust lightness to ensure it's sufficiently light
	let adjustedLightness;
	if (lightColor.match(/^[0-9a-fA-F]{6}$/)) {
		const red = parseInt(lightColor.substring(0, 2), 16);
		const green = parseInt(lightColor.substring(2, 4), 16);
		const blue = parseInt(lightColor.substring(4, 6), 16);
		const maxComponent = Math.max(red, green, blue);
		const total = red + green + blue;
		const avg = total / 3;

		// Choose an adjustment threshold based on your preference (higher means lighter)
		const lightnessThreshold = 200;
		if (avg < lightnessThreshold) {
			adjustedLightness = `#${(maxComponent + lightnessThreshold - avg)
				.toString(16)
				.padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue
				.toString(16)
				.padStart(2, '0')}`;
		} else {
			adjustedLightness = lightColor;
		}
	} else {
		adjustedLightness = lightColor; // Fallback if color hex is invalid
	}

	return (
		<span
			key={title}
			className={`bg-${adjustedLightness}-100 w-fit px-2 py-1 rounded-md`}
			style={{ backgroundColor: adjustedLightness }}
		>
			{title}
		</span>
	);
};

export default RandomColorSpan;
