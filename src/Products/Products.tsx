import {
	Card,
	Text,
	Image,
	Grid,
	Group,
	UnstyledButton,
	Paper,
	Box,
	Divider,
	Button,
	rem,
	Center,
} from "@mantine/core";
import React from "react";
import Panel from "../Assets/panel.png";

const Products = () => {
	return (
		<>
			<Group wrap="nowrap" gap={0} visibleFrom="md">
				<Box w={1270}>
					<Divider
						size="sm"
						my={"60px"}
						mr={"17px"}
						label={
							<Text fw={600} fz={32} ml={114} style={{ color: "#262728", lineHeight: "40px" }}>
								Our Products1
							</Text>
						}
						labelPosition="left"
					/>
				</Box>

				{<UnstyledButton ml={0}>View All</UnstyledButton>}
			</Group>

			<Grid m={30}>
				{Array.from({ length: 4 }, (_, index) => index).map((i) => {
					return (
						<Grid.Col key={i} span={{ base: 12, xs: 6, md: 3 }}>
							<Card withBorder>
								<Text fz={14} fw={600} c={"#555459"} maw={250}>
									Three Phase Thyristor Power Controller – POW-3-PA
								</Text>

								<Image src={Panel} w={137} h={173} mx="auto" mt={33} />

								<Text ta="center" c={"#414141"} mt={30}>
									₹12,600 – ₹14,700
								</Text>
							</Card>
						</Grid.Col>
					);
				})}
			</Grid>
			{/* <Grid  mt={30} align="flex-start">
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} maw={"9.75rem"}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={"3.6rem"} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, xs: 6, md: 3 }}>
					<Card withBorder h={{ xs: 212, md: 364 }} w={{ xs: 156, md: 284 }}>
						<Card.Section>
							<Text fz={14} fw={600} c={"#555459"} w={260} mt={24.66} ml={12.57}>
								Three Phase Thyristor Power Controller – POW-3-PA
							</Text>
							<Image src={Panel} w={137} h={173} ml={75} mt={33} />
						</Card.Section>

						<Text px={59} c={"#414141"} mt={30}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
			</Grid> */}

			{/* Mobile view */}
			{/* <Group wrap="nowrap" gap={0} hiddenFrom="xs">
				<Box w={360}>
					<Text fw={600} fz={20} ml={16} style={{ color: "#262728", lineHeight: "40px" }}>
						Our Products
					</Text>
				</Box>

			</Group>
			<Grid maw={360} px={16} pb={56} mt={24} hiddenFrom="xs" justify="center" align="flex-start">
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAA
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAB
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156} mt={32}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAC
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Grid.Col span={6}>
					<Card withBorder h={212} w={156} mt={32}>
						<Card.Section>
							<Text fz={12} fw={600} c={"#555459"} w={135} mt={12} ml={8}>
								Three Phase Thyristor Power Controller – POW-3-PAD
							</Text>
							<Image src={Panel} w={73} h={91} ml={42} mt={10} />
						</Card.Section>

						<Text c={"#414141"} fz={12} mt={18} ta={"center"}>
							₹12,600 – ₹14,700
						</Text>
					</Card>
				</Grid.Col>
				<Button variant="outline" color="#555459" w={176} mt={40}>
					View All
				</Button>
			</Grid> */}

			{/**Tablet View */}
			{/* <Paper w={768}>
				<Group wrap="nowrap" gap={0} w={768} hiddenFrom="md" visibleFrom="xs" ml={90}>
					<Text fz={26} fw={600} c={"#262728"} w={190}>
						Our Product
					</Text>
					<Divider orientation="horizontal" size={"sm"} w={302} ml={15} />

					{<UnstyledButton ml={21}>View All</UnstyledButton>}
				</Group>
				<Grid w={592} mt={24} hiddenFrom="md" visibleFrom="xs" ml={90}>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={6}>
						<Card withBorder h={364} w={284}>
							<Card.Section>
								<Text fz={14} fw={600} c={"#555459"} w={261} mt={24} ml={16}>
									Three Phase Thyristor Power Controller – POW-3-PAA
								</Text>
								<Image src={Panel} w={137} h={173} ml={75} mt={35} />
							</Card.Section>

							<Text c={"#414141"} fz={20} mt={30} ta={"center"}>
								₹12,600 – ₹14,700
							</Text>
						</Card>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default Products;
