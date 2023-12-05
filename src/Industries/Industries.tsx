import {
	Paper,
	Card,
	Text,
	Image,
	SimpleGrid,
	Divider,
	Group,
	UnstyledButton,
	Button,
} from "@mantine/core";
import React from "react";
import Industries1 from "../Assets/Industries1.png";
import Industries2 from "../Assets/industries2.png";
import Industries3 from "../Assets/industries3.png";

type Props = {};

const Industries = (props: Props) => {
	return (
		<>
			<Group wrap="nowrap" gap={0} mt={{ lg: 73, base: 56, sm: 80 }}>
				<Text
					fw={600}
					fz={{ base: 20, lg: 32, sm: 32 }}
					ml={{ base: 16, lg: 114, sm: 144 }}
					style={{ color: "#262728", lineHeight: "40px" }}
				>
					Industries We Serve
				</Text>
				<Divider size="sm" w={{ lg: 801 }} ml={{ lg: 16 }} visibleFrom="md" />
				<Divider
					size="sm"
					w={{ lg: 801, sm: 356 }}
					ml={{ lg: 16, sm: 14 }}
					visibleFrom="xs"
					hiddenFrom="md"
				/>

				{
					<UnstyledButton visibleFrom="md" ml={32}>
						View All
					</UnstyledButton>
				}
				{
					<UnstyledButton visibleFrom="xs" hiddenFrom="md" ml={15}>
						View All
					</UnstyledButton>
				}
			</Group>
			<Paper w={{ base: 360, sm: 1024, lg: 1440 }} mt={30}>
				<SimpleGrid
					cols={{ base: 1, sm: 1, lg: 3 }}
					mt={{ lg: 30, base: 24, sm: 40 }}
					ml={{ lg: 114, base: 16, sm: 144 }}
				>
					<Card w={{ lg: 391, base: 328, sm: 735 }}>
						<Card.Section mt={{ lg: 30, base: 24, sm: 40 }}>
							<Image
								src={Industries1}
								w={{ lg: 391, base: 328, sm: 735 }}
								h={{ lg: 391, base: 284, sm: 449 }}
							/>
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Glass Manufacture
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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

					<Card w={{ lg: 391, base: 328, sm: 735 }}>
						<Card.Section mt={{ lg: 30, base: 24, sm: 40 }}>
							<Image
								src={Industries2}
								w={{ lg: 391, base: 328, sm: 735 }}
								h={{ lg: 391, base: 284, sm: 449 }}
							/>
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Jewelry Manufacture
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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

					<Card w={{ lg: 391, base: 328, sm: 735 }}>
						<Card.Section mt={{ lg: 30, base: 24, sm: 40 }}>
							<Image
								src={Industries3}
								w={{ lg: 391, base: 328, sm: 735 }}
								h={{ lg: 391, base: 284, sm: 449 }}
							/>
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Steel Plants
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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
				</SimpleGrid>
				<Button variant="outline" color="#555459" w={176} ml={92} mt={40} hiddenFrom="xs">
					View All
				</Button>
			</Paper>

			{/**Mobile View */}
			{/* <Group gap={0} wrap="nowrap" hiddenFrom="xs">
				<Box w={1270}>
					<Text fw={600} fz={20} ml={16} c={"#262728"}>
						Industries we serve
					</Text>
				</Box>
			</Group>
			<Grid maw={360} mx={16} mt={30} hiddenFrom="xs" justify="center" align="flex-start" pb={56}>
				<Grid.Col span={12}>
					<Card w={391} h={400}>
						<Card.Section>
							<Image src={Industries1} w={328} h={284} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Glass Manufacture
							</Text>
							<Text pt={4} fz={12} fw={400} lineClamp={3} c={"#555459"}>
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
				<Grid.Col span={12}>
					<Card w={391} h={400}>
						<Card.Section>
							<Image src={Industries2} w={328} h={284} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Jewelry Manufacture
							</Text>
							<Text pt={4} fz={12} fw={400} lineClamp={3} c={"#555459"}>
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
				<Grid.Col span={12}>
					<Card w={391} h={400}>
						<Card.Section>
							<Image src={Industries3} w={328} h={284} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Steel Plants
							</Text>
							<Text pt={4} fz={12} fw={400} lineClamp={3} c={"#555459"}>
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
				<Button variant="outline" color="#555459" w={176} mt={40}>
					View All
				</Button>
			</Grid> */}

			{/**Tablet View */}

			{/* <Group wrap="nowrap" gap={0} w={768} hiddenFrom="md" visibleFrom="xs" ml={90} mt={64}>
				<Text fz={26} fw={600} c={"#262728"}>
					Our Product
				</Text>
				<Divider orientation="horizontal" size={"sm"} w={302} ml={15} />

				{<UnstyledButton ml={21}>View All</UnstyledButton>}
			</Group>
			<Grid
				w={768}
				mx={90}
				mt={30}
				hiddenFrom="md"
				visibleFrom="xs"
				justify="center"
				align="flex-start"
				pb={56}
			>
				<Grid.Col span={12}>
					<Card w={588} h={500}>
						<Card.Section>
							<Image src={Industries1} w={588} h={355} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Glass Manufacture
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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
				<Grid.Col span={12}>
					<Card w={588} h={500}>
						<Card.Section>
							<Image src={Industries2} w={588} h={355} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Jewelry Manufacture
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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
				<Grid.Col span={12}>
					<Card w={588} h={500}>
						<Card.Section>
							<Image src={Industries3} w={588} h={355} />
							<Text pt={16} fz={18} fw={600} c={"#262728"}>
								Steel Plants
							</Text>
							<Text pt={4} fz={14} fw={400} lineClamp={3} c={"#555459"}>
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
			</Grid> */}
		</>
	);
};

export default Industries;
