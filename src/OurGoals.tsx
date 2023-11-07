import { Paper, Grid, SimpleGrid, Image, Text, Stack, Group } from "@mantine/core";
import React from "react";
import Goal1 from "./Assets/goal1.png";
import Goal2 from "./Assets/goal2.png";
import Goal3 from "./Assets/goal3.png";
import Goal4 from "./Assets/goal4.png";
type Props = {};

const OurGoals = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360 }} mt={{ base: 30 }} h={{ base: 555 }} bg={"#000"}>
				<Grid pt={{ base: 30 }}>
					<Grid.Col span={{ base: 12 }}>
						<Stack ml={{ base: 20 }}>
							<Group>
								<Image src={Goal1} h={{ base: 120 }} w={{ base: 150 }} />
								<Image src={Goal2} h={{ base: 120 }} w={{ base: 150 }} />
							</Group>
							<Group>
								<Image src={Goal3} h={{ base: 120 }} w={{ base: 150 }} />
								<Image src={Goal4} h={{ base: 120 }} w={{ base: 150 }} />
							</Group>
						</Stack>
					</Grid.Col>
					<Grid.Col span={{ base: 12 }}>
						<Text fz={{ base: 20 }} w={374} fw={600} ml={{ base: 16 }} style={{ color: "#FFFFFF" }}>
							Our Goal
						</Text>
						<Text
							c={"#e4e8ed"}
							mt={24}
							fz={{ base: 12 }}
							fw={400}
							ml={{ base: 16 }}
							w={{ base: 328 }}
						>
							Launching a business isn't easy, which is why having a co-founder can often make
							things a little smoother, especially if that co-founder is your best friend. While
							many professionals warn against choosing a close friend as your business partner,
							there are plenty of examples that prove it can work. The best example is of Airbnb..
						</Text>
					</Grid.Col>
				</Grid>
			</Paper>

			{/**MOBILE */}
			{/* <Paper w={360} h={696} bg={"#000"} hiddenFrom="xs">
				<Grid ml={20}>
					<Grid.Col span={12}>
						<Stack mt={109}>
							<Group>
								<Image src={Goal1} h={120} w={150} />
								<Image src={Goal2} h={120} w={150} />
							</Group>
							<Group>
								<Image src={Goal3} h={120} w={150} />
								<Image src={Goal4} h={120} w={150} />
							</Group>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={20} fw={600} mt={24} c={"#f6f6f6"}>
							Our Goal
						</Text>
						<Text fz={12} fw={400} mt={16} c={"#e4e8ed"} w={328}>
							Libratherm has been catering to various industries by supplying the standard and
							customized process control instruments and systems to meet and satisfy their
							requirement.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**TABLET */}
			{/* <Paper w={768} h={1096} bg={"#000"} visibleFrom="xs" hiddenFrom="md">
				<Grid ml={90}>
					<Grid.Col span={12}>
						<Stack mt={109}>
							<Group>
								<Image src={Goal1} h={224} w={294} />
								<Image src={Goal2} h={224} w={294} />
							</Group>
							<Group>
								<Image src={Goal3} h={224} w={294} />
								<Image src={Goal4} h={224} w={294} />
							</Group>
						</Stack>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text fz={32} fw={600} mt={30} c={"#f6f6f6"}>
							Our Goal
						</Text>
						<Text fz={14} fw={400} mt={24} w={588} c={"#e4e8ed"}>
							Libratherm has been catering to various industries by supplying the standard and
							customized process control instruments and systems to meet and satisfy their
							requirement.
							<br />
							<br />
							Our products are widely used in Engineering Industries, Heat Treatment Plants, Glass
							Industries, Furnace & Oven Industries, Pharmaceutical Industries, Jewellery
							Industries, Power Generating Industries, Sponge Iron Industries, Environmental
							Chambers, Petroleum Industries, Steel Industries, Textile Industries, BOD Incubators,
							HVAC Industries, AHU Industries, APFC Industries, Packaging Industries, Automation
							Industries, Plastic Industries, Food Industries, Pollution Control Industries,
							Petrochemical Industries, Water Treatment Plants, Research and Defence Institutes.
						</Text>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default OurGoals;
