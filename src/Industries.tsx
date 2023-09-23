import { Paper, Group, Box, Divider, Card, Text, Button, Image } from "@mantine/core";
import React from "react";
import Industries1 from "./Assets/Industries1.png";
import Industries2 from "./Assets/industries2.png";
import Industries3 from "./Assets/industries3.png";
const TertiaryButton = ({ ...props }) => (
	<Button
		styles={{
			root: {
				backgroundColor: "#FFFFFF",

				fontWeight: 700,
				lineHeight: "22.4px",
				fontSize: "12px",

				"&:hover": {
					backgroundColor: "#FFFFFF", // Override hover background color to match default state
				},
			},
			label: {
				color: "#555459",
				textTransform: "uppercase",
			},
		}}
		{...props}
	/>
);
type Props = {};

const Industries = (props: Props) => {
	return (
		<Paper w={1500} withBorder>
			<Group noWrap spacing={0}>
				<Box w="100%">
					<Divider
						size="md"
						my={"60px"}
						label={
							<Text size={"32px"} ml={140}>
								Industries we serve
							</Text>
						}
						labelPosition="left"
					/>
				</Box>
				<TertiaryButton>View All</TertiaryButton>
			</Group>

			<Group position="center" spacing="lg">
				<Card h={500} w={391}>
					<Card.Section>
						<Image src={Industries1} height={391} width={391} />

						<Text weight={600} pt={16}>
							Glass Manufacture
						</Text>

						<Text size="sm" color="dimmed" lineClamp={5} pt={4}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
					</Card.Section>
				</Card>

				<Card h={500} w={391}>
					<Card.Section>
						<Image src={Industries2} height={391} width={391} />

						<Text weight={600} pt={16}>
							Jewelry Manufacture
						</Text>

						<Text size="sm" color="dimmed" lineClamp={5} pt={4}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
					</Card.Section>
				</Card>

				<Card h={500} w={391}>
					<Card.Section>
						<Image src={Industries3} height={391} width={391} />

						<Text weight={600} pt={16}>
							Steel Plants
						</Text>

						<Text size="sm" color="dimmed" lineClamp={5} pt={4}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
					</Card.Section>
				</Card>
			</Group>
		</Paper>
	);
};

export default Industries;
