import { Paper, Group, Card, Text, Image, UnstyledButton, Grid, Box, Divider } from "@mantine/core";
import React from "react";
import Industries1 from "../Assets/Industries1.png";
import Industries2 from "../Assets/industries2.png";
import Industries3 from "../Assets/industries3.png";

type Props = {};

const Industries = (props: Props) => {
	return (
		<Paper mt={40} w={1440}>
			<Group wrap="nowrap" gap={0}>
				<Box w={1270}>
					<Divider
						size="sm"
						my={"60px"}
						mr={"17px"}
						label={
							<Text fw={600} fz={32} ml={114} style={{ color: "#262728", lineHeight: "40px" }}>
								Industries we serve
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{<UnstyledButton ml={0}>View All</UnstyledButton>}
			</Group>

			<Grid px={114} mt={30} justify="center" align="flex-start">
				<Grid.Col span={4}>
					<Card>
						<Card.Section>
							<Image src={Industries1} />
							<Text pt={16} fz={18} fw={600} style={{ color: "#262728" }}>
								Glass Manufacture
							</Text>
							<Text
								pt={4}
								fz={14}
								fw={400}
								lineClamp={5}
								style={{ color: "#555459", flexShrink: 0 }}
							>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc. The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
						</Card.Section>
					</Card>
				</Grid.Col>
				<Grid.Col span={4}>
					<Card>
						<Card.Section>
							<Image src={Industries2} />
							<Text pt={16} fz={18} fw={600} style={{ color: "#262728" }}>
								Jewelry Manufacture
							</Text>
							<Text
								pt={4}
								fz={14}
								fw={400}
								lineClamp={5}
								style={{ color: "#555459", flexShrink: 0 }}
							>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc. The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
						</Card.Section>
					</Card>
				</Grid.Col>
				<Grid.Col span={4}>
					<Card>
						<Card.Section>
							<Image src={Industries3} />
							<Text pt={16} fz={18} fw={600} style={{ color: "#262728" }}>
								Steel Plants
							</Text>
							<Text
								pt={4}
								fz={14}
								fw={400}
								lineClamp={5}
								style={{ color: "#555459", flexShrink: 0 }}
							>
								Libratherm has supplied various types of temperature controllers, thyristor power
								controllers and control panels to the industries manufacturing Files, Diamond Tools,
								Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
								blades etc. The temperature of the electrical or fuel fired heating systems, used
								for annealing, hardening, steam bluing and similar such processes, has been in use
								for precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300,
								PID-723, DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or
								infrared non contact sensors.
							</Text>
						</Card.Section>
					</Card>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default Industries;
